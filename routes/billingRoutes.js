import stripe from "stripe";
import keys from "../config/keys.js";
import { requireLogin } from "../middlewares/requireLogin.js";

export default (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe(keys.stripeSecretKey).charges.create({
      amount: 5000,
      currency: "USD",
      description: "$50 for 5 credits",
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
