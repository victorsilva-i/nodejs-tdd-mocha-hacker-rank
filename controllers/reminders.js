const Reminders = require("../models/reminders");
const { Op } = require("sequelize");
const Reminder = require("../models/reminders");

module.exports = {
  create: (req) => {
    return new Promise((resolve, reject) => {
      Reminder.create(req.body)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  getAll: (req) => {
    return new Promise((resolve, reject) => {
      let params = {};
      if (req.query) {
        if (req.query.user || req.query.after) {
          let where = {};
          if (req.query.user) {
            where["user"] = parseInt(req.query.user);
          }
          if (req.query.after) {
            where["date"] = {
              [Op.gte]: parseInt(req.query.after),
            };
          }
          params["where"] = where;
        }
      }
      Reminder.findAll(params)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  getById: (req) => {
    return new Promise((resolve, reject) => {
      Reminder.findAll({ where: { id: req.params.id } })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
