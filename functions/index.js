const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://127.0.0.1:5173#success",
    cancel_url: "http://127.0.0.1:5173#canseled",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: (100) * 100,
          product_data: {
            name: "My item",
          },
        },
      },
    ],
  });
  return {
    id: session.id,
  };
});
