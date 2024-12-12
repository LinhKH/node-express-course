const stripe = require('stripe')(process.env.STRIPE_KEY); // secret key

// Server-Side (JavaScript): Use the secret key to create a PaymentIntent and return the client_secret to the client.
// Client-Side (Node.js with Express): Use the publishable key to handle the payment process, including confirming the payment with the client_secret.

const stripeController = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
