const express = require("express");
const prismaDirectory = require("../../../config/prismaDirectory");
const router = express.Router();

router.get("/", async (req, res) => {
  const { countryCode, productCategory, platformType } = req.query;

  try {
    const brands = await prismaDirectory.resellPlatform.findMany({
      where: {
        ...(platformType && { platformType }),
        ...(countryCode && {
          countries: {
            some: {
              countryCode,
            },
          },
        }),
        ...(productCategory && {
          productCategories: {
            some: {
              productCategory: {
                key: productCategory,
              },
            },
          },
        }),
      },
      orderBy: { name: "asc" },
      include: {
        countries: true,
        productCategories: {
          include: {
            productCategory: true,
          },
        },
      },
    });

    return res.status(200).json({ brands });
  } catch (error) {
    console.error("Error in GET /resell-platforms", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/available-types", async (req, res) => {
  const { countryCode, productCategory } = req.query;

  if (!countryCode || !productCategory) {
    return res
      .status(400)
      .json({ error: "countryCode and productCategory are required" });
  }

  try {
    const availableTypes = await prismaDirectory.resellPlatform.findMany({
      where: {
        countries: {
          some: {
            countryCode,
          },
        },
        productCategories: {
          some: {
            productCategory: {
              key: productCategory,
            },
          },
        },
      },
      select: {
        platformType: true,
      },
      distinct: ["platformType"],
    });

    const types = availableTypes.map((entry) => entry.platformType);

    return res.status(200).json({
      availablePlatformTypes: {
        B2C: types.includes("B2C"),
        C2C: types.includes("C2C"),
      },
    });
  } catch (error) {
    console.error("Error in GET /resell-platforms/available-types", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/logos", async (req, res) => {
  const { countryCode } = req.query;

  if (!countryCode) {
    return res.status(400).json({ error: "countryCode is required" });
  }

  try {
    const logos = await prismaDirectory.resellPlatform.findMany({
      select: {
        id: true,
        name: true,
        logo: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({ platforms: logos });
  } catch (error) {
    console.error("Error in GET /resell-platforms/logos", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/business-search", async (req, res) => {
  const {
    lat,
    lon,
    limit = 20,
    bboxOffset = 0.01, // starting radius (~11km)
    maxBboxOffset = 0.1, // maximum search radius (~110km)
    osm,
  } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "lat and lon are required" });
  }

  let currentOffset = parseFloat(bboxOffset);
  const maxOffset = parseFloat(maxBboxOffset);
  const increment = 0.01; // how much to expand each try (~11km more)
  const minResults = 5; // 👈 minimum number of results needed

  const buildQuery = (offset) => {
    const minLat = parseFloat(lat) - offset;
    const maxLat = parseFloat(lat) + offset;
    const minLon = parseFloat(lon) - offset;
    const maxLon = parseFloat(lon) + offset;
    const bbox = `${minLat},${minLon},${maxLat},${maxLon}`;

    if (osm) {
      const { key, value, extra } =
        typeof osm === "string" ? JSON.parse(osm) : osm;
      return `
        [out:json][timeout:25];
        (
          node["${key}"="${value}"${
        extra ? `]["${extra.split("=")[0]}"="${extra.split("=")[1]}"` : ""
      }](${bbox});
          way["${key}"="${value}"${
        extra ? `]["${extra.split("=")[0]}"="${extra.split("=")[1]}"` : ""
      }](${bbox});
          relation["${key}"="${value}"${
        extra ? `]["${extra.split("=")[0]}"="${extra.split("=")[1]}"` : ""
      }](${bbox});
        );
        out center ${limit};
      `;
    } else {
      return `
        [out:json][timeout:25];
        (
          node["shop"="second_hand"](${bbox});
          way["shop"="second_hand"](${bbox});
          relation["shop"="second_hand"](${bbox});
        );
        out center ${limit};
      `;
    }
  };

  async function searchWithIncreasingRadius() {
    let allResults = [];

    while (currentOffset <= maxOffset) {
      const query = buildQuery(currentOffset);

      try {
        const response = await fetch(
          "https://overpass-api.de/api/interpreter",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `data=${encodeURIComponent(query)}`,
          }
        );

        if (!response.ok) {
          const text = await response.text();
          console.error("Overpass raw error:", text);
          return res
            .status(500)
            .json({ error: "Overpass API returned an error." });
        }

        const json = await response.json();
        const results = json.elements
          .map((el) => {
            const { tags = {}, lat, lon, center } = el;
            return {
              name: tags?.name,
              lat: lat || center?.lat,
              lon: lon || center?.lon,
              tags,
              id: el.id,
              type: el.type,
            };
          })
          .filter((x) => x.lat && x.lon);

        allResults = results;

        if (allResults.length >= minResults) {
          return res.json({
            platforms: allResults.slice(0, limit),
            bboxOffset: currentOffset,
          });
        }

        currentOffset += increment; // expand search radius
      } catch (err) {
        console.error("Overpass proxy error:", err);
        return res.status(500).json({ error: "Overpass request failed" });
      }
    }

    // If even after maxOffset we don't have enough results
    res.json({
      platforms: allResults.slice(0, limit),
      bboxOffset: currentOffset,
    });
  }

  searchWithIncreasingRadius();
});

router.get("/:id", async (req, res) => {
  return res.status(200).json({ message: "inside the get by id route" });
});

module.exports = router;
