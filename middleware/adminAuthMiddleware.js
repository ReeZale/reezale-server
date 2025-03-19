const prisma = require("../config/prisma");
const {
  verifyAccessToken,
  verifyRefreshToken,
  createAccessToken,
  createRefreshToken,
} = require("../helpers/jwt");

const adminAuthMiddleware = async (req, res, next) => {
  const accessToken = req.cookies.reezale_auth;
  const refreshToken = req.cookies.reezale_refresh;

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ error: "Unauthorized: No tokens provided" });
  }

  let decodedAccess = null;

  // Gracefully try access token first
  if (accessToken) {
    try {
      decodedAccess = verifyAccessToken(accessToken);
    } catch (err) {
      decodedAccess = null; // expired or invalid
    }
  }

  // Access token valid
  if (decodedAccess && decodedAccess.userId) {
    req.userId = decodedAccess.userId;
    req.accountId = decodedAccess.accountId;
    return next();
  }

  // Refresh token fallback
  if (!refreshToken) {
    return res.status(401).json({ error: "Unauthorized: No refresh token" });
  }

  try {
    const decodedRefresh = verifyRefreshToken(refreshToken);
    if (!decodedRefresh || !decodedRefresh.userId) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Invalid refresh token" });
    }

    const tokenRecord = await prisma.authToken.findFirst({
      where: {
        token: refreshToken,
        userId: decodedRefresh.userId,
        isValid: true,
      },
    });

    if (!tokenRecord) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Refresh token revoked" });
    }

    // Issue new tokens
    const newAccessToken = createAccessToken({
      userId: decodedRefresh.userId,
      accountId: decodedRefresh.accountId,
    });

    const newRefreshToken = createRefreshToken({
      userId: decodedRefresh.userId,
      accountId: decodedRefresh.accountId,
    });

    await prisma.authToken.update({
      where: { id: tokenRecord.id },
      data: { token: newRefreshToken, updatedAt: new Date() },
    });

    // Send back new tokens
    res.cookie("reezale_auth", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.cookie("reezale_refresh", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    req.userId = decodedRefresh.userId;
    req.accountId = decodedRefresh.accountId;
    return next();
  } catch (refreshError) {
    console.error("Refresh flow error:", refreshError);
    return res.status(401).json({ error: "Unauthorized: Refresh failed" });
  }
};

module.exports = adminAuthMiddleware;
