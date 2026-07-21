const Joi = require("joi");

// Create/Update Task Validation
const taskSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required(),

  description: Joi.string()
    .allow("")
    .optional(),

  status: Joi.string()
    .valid("pending", "in-progress", "completed")
    .optional(),

  dueDate: Joi.date()
    .optional(),

  categoryId: Joi.number()
    .integer()
    .required()
});

module.exports = {
  taskSchema
};
