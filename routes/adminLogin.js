const router = require("express").Router();
const Message = require("../models/Message");

router.get("/", async (req, res, next) => {
    try {
        const message = await Message.find();
        res.send(message);
      } catch (error) {
        res.status(500).send("unable to connect to database");
      }
  });

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.adminName === process.env.USER && req.body.adminPassword === process.env.PASSWORD)
      res.send(true);
      
    else {
      res.send(false);
    }
  } catch (error) {
    res.status(500).send("unable to connect to database");
  }
});

module.exports = router;
