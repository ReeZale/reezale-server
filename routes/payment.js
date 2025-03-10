const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment-intent", async (req, res) => {
  try {
    const { amount, currency, paymentMethodId } = req.body;

    if (!amount || !paymentMethodId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create PaymentIntent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Amount in cents
      currency: currency, // Change based on your currency
      payment_method: paymentMethodId,
      confirm: true, // Immediately confirm the payment
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
    });

    console.log("Payment intent response", paymentIntent);

    return res.status(201).json({ data: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe Payment Error:", error);
    return res.status(500).json({ error: "Payment failed" });
  }
});

module.exports = router;
