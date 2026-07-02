const express = require("express");
const {
  getTasks,
  getTaskById,
  postTask,
  putTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();

router.post("/", postTask);

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.put("/:id", putTask);

router.delete("/:id", deleteTask);

module.exports = router;
