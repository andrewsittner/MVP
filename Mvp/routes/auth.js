const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login_signup", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.stats(400).json({ errors: 'thisone' });
    }

    if (!user) {
      return res.status(400).json({ errors: "Incorrect password or email" });
    }

    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: 'maybe this one' });
      }

      res.status(200).json({ success: `${user.id}` });
    });
  })(req, res, next);
});

module.exports = router;