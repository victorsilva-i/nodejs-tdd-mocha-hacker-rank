const router = require("express").Router();
const controller = require("../controllers/reminders");

router.post("/", async function (req, res, next) {
  try {
    const reminderCreated = await controller.create(req);
    return res.status(201).send(reminderCreated);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const reminderList = await controller.getAll(req);
    return res.status(200).send(reminderList);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const remindersList = await controller.getById(req);
    if (remindersList.length > 0) {
      return res.status(200).send(remindersList[0]);
    } else {
      return res.status(404).send("ID not found");
    }
  } catch (error) {
    return res.status(404).send("ID not found");
  }
});

router.delete("/:id", function (req, res, next) {
  return new Promise((resolve, reject) => {
    resolve(res.status(405).send());
  });
});
router.put("/:id", function (req, res, next) {
  return new Promise((resolve, reject) => {
    resolve(res.status(405).send());
  });
});
router.patch("/:id", function (req, res, next) {
  return new Promise((resolve, reject) => {
    resolve(res.status(405).send());
  });
});

module.exports = router;
