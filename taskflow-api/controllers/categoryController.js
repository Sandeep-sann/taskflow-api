const prisma = require("../config/db");

// ===============================
// Get All Categories
// ===============================
const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        userId: req.user.id
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

// ===============================
// Create Category
// ===============================
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required."
      });
    }

    const category = await prisma.category.create({
      data: {
        name,
        userId: req.user.id
      }
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully.",
      data: category
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

// ===============================
// Update Category
// ===============================
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await prisma.category.findFirst({
      where: {
        id: Number(id),
        userId: req.user.id
      }
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found."
      });
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: Number(id)
      },
      data: {
        name
      }
    });

    res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      data: updatedCategory
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

// ===============================
// Delete Category
// ===============================
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findFirst({
      where: {
        id: Number(id),
        userId: req.user.id
      }
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found."
      });
    }

    await prisma.category.delete({
      where: {
        id: Number(id)
      }
    });

    res.status(200).json({
      success: true,
      message: "Category deleted successfully."
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
};
