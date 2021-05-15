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
  },
  getAll: (req) => {
    return new Promise((resolve, reject) => {
      let params = {};
      if (req.query.user || req.query.after) {
        params["where"] = {
          user: req.query.user,
          date: {
            [Op.gte]: req.query.after
          }
        }
      }
      Reminder.findAll(params)
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  getById: (req) => {
    return new Promise((resolve, reject) => {
      Reminder.findByPk(req.params.id)
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  }

}
