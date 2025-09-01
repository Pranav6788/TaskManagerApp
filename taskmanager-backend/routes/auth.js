const express = require("express");
const fetch = require("node-fetch"); // npm install node-fetch
require("dotenv").config();

const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const apiKey = process.env.FIREBASE_API_KEY;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    const data = await response.json();
    console.log("OK1");
    if (response.ok) {
      res.json({ token: data.idToken });
    } else {
      res.status(401).json({ error: data.error.message }+"HEHE");
    }
    console.log("OK");
  } catch (err) {
    res.status(500).json({ error: "Login3 failed", details: err.message });
  }
});

module.exports = router;
