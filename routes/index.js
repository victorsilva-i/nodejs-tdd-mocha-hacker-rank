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
    res.status(201).send(reminderCreated)
  }
  catch (error) {
    console.log(error)
  }
});

router.get('/reminders', async function (req, res, next) {
  try {
    const reminderList = await reminders.getAll(req);
    res.status(200).send(reminderList)
  }
  catch (error) {
    console.log(error)
  }
});


router.get('/reminders/:id', async function (req, res, next) {
  try {
    const reminder = await reminders.getById(req);
    res.status(200).send(reminder)
  }
  catch (error) {
    console.log(error)
  }
});

module.exports = router;
