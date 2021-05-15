var express = require('express');
var router = express.Router();
var reminders = require("../controllers/reminders")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.post('/reminders', async function (req, res, next) {
  try {
    const reminderCreated = await reminders.create(req);
    res.status(200).send(reminderCreated)
  }
  catch (error) {
    console.log(error)
  }

});

module.exports = router;
