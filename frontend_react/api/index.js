require("dotenv").config();
const express = require("express");
const path = require("path");
const stripeCreateBillingSession = require("./stripe-create-billing-session.js");
const stripeWebhook = require("./stripe-webhook.js");
const stripeCreateCheckoutSession = require("./stripe-create-checkout-session.js");
const newsletter = require("./newsletter.js");

// Port to run your server on
const port = process.env.PORT || 8080;

const app = express();

// Get the raw body which is needed by Stripe webhook
const jsonOptions = {
  verify: (req, res, buf) => {
    if (buf && buf.length) {
      req.rawBody = buf.toString("utf8");
    }
  },
};

app.use(express.json(jsonOptions));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "./../build")));

app.use("/api/stripe-create-billing-session", stripeCreateBillingSession);
app.use("/api/stripe-webhook", stripeWebhook);
app.use("/api/stripe-create-checkout-session", stripeCreateCheckoutSession);
app.use("/api/newsletter", newsletter);

// Catchall for any request that doesn't match an API route or static file.
// Point to index.html so user is served the client-side web app.
// React Router will handle displaying the correct page based on path.
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./../build", "index.html"));
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
