const express = require("express");
const verifyToken = require("../middleware/auth");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getHomepageData
} = require("../controllers/taskController");

const router = express.Router();

router.use(verifyToken);

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

router.get("/homepage", getHomepageData); // For homepage grouped tasks

module.exports = router;
