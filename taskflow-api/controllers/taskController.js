const prisma = require("../config/db");

// ==========================
// Get All Tasks
// GET /tasks?status=pending&category=work
// ==========================
const getTasks = async (req, res) => {
  try {
    const { status, category } = req.query;

    const where = {
      userId: req.user.id,
    };

    if (status) {
      where.status = status;
    }

    if (category) {
      where.category = {
        name: {
          equals: category,
          mode: "insensitive",
        },
      };
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Create Task
// ==========================
const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      dueDate,
      categoryId,
    } = req.body;

    if (!title || !categoryId) {
      return res.status(400).json({
        success: false,
        message: "Title and Category are required.",
      });
    }

    const category = await prisma.category.findFirst({
      where: {
        id: Number(categoryId),
        userId: req.user.id,
      },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status: status || "pending",
        dueDate: dueDate ? new Date(dueDate) : null,
        userId: req.user.id,
        categoryId: Number(categoryId),
      },
      include: {
        category: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully.",
      data: task,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Update Task
// ==========================
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id: Number(id),
        userId: req.user.id,
      },
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        dueDate: req.body.dueDate
          ? new Date(req.body.dueDate)
          : undefined,
        categoryId: req.body.categoryId
          ? Number(req.body.categoryId)
          : undefined,
      },
      include: {
        category: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Task updated successfully.",
      data: updatedTask,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Delete Task
// ==========================
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id: Number(id),
        userId: req.user.id,
      },
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Task deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
