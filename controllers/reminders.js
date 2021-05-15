const Reminders = require('../models/reminders');
const { Op } = require('sequelize');
const Reminder = require("../models/reminders")


module.exports = {

  create: (req) => {
    return new Promise((resolve, reject) => {
      Reminder.create(req.body)
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  }

}
