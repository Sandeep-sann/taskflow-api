const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all task routes
router.use(authMiddleware);

// Get all tasks
router.get("/", taskController.getTasks);

// Create a new task
router.post("/", taskController.createTask);

// Update a task
router.put("/:id", taskController.updateTask);

// Delete a task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
