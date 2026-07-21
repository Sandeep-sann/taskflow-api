const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all category routes
router.use(authMiddleware);

// Get all categories
router.get("/", categoryController.getCategories);

// Create a new category
router.post("/", categoryController.createCategory);

// Update a category
router.put("/:id", categoryController.updateCategory);

// Delete a category
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
