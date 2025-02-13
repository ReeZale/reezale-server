const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const { product, token, email } = req.body;

  try {
    if (!product || !product.price) {
      return res.status(400).json({ error: "Invalid product details" });
    }

    const amount = Math.round(product.price * 100); // Convert price to cents

    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        token,
      },
      billing_details: {
        email: email,
        name: "Zachary Rodney",
      },
    });

    const customer = await stripe.customers.create({
      email,
      name: "Zachary Rodney",
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "sek",
      customer: customer.id,
      payment_method: paymentMethod.id, // Attach PaymentMethod
      confirm: true, // Charge immediately
      return_url: "https://yourdomain.com/payment-status", // Required for 3D Secure
      description: `Purchased: ${product.name}`,
      receipt_email: email, // Sends receipt to the user
    });

    if (paymentIntent.status === "requires_action") {
      return res.status(200).json({
        message: "Authentication required",
        next_action: paymentIntent.next_action.redirect_to_url,
      });
    }

    return res.status(200).json({
      message: "Payment successful",
      paymentIntent,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
