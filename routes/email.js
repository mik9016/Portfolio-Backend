const router = require("express").Router();
const Message = require("../models/Message");

router.get("/", async (req, res, next) => {
  try {
    const message = await Message.findOne({ lastId });
    console.log(lastId);
    res.send(message);
  } catch (error) {
    res.status(500).send("unable to connect to database");
  }
});

router.post("/", async (req, res, next) => {
  const mes = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    await mes.save();
    const lastMessage = await Message.findOne(mes._id);

    await res.send(lastMessage);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
