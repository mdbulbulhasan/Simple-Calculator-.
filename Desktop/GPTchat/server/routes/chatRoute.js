const express = require("express");
const fetchData = require("./fetchReply");
const router = express.Router();

//token

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const reply = await fetchData(prompt);
    res.send(reply);
  } catch (error) {
    console.error("Error in chat route:", error);
    res.status(500).send("Error fetching data from Replicate");
  }
});

module.exports = router;
