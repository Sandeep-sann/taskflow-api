const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,      // Show all validation errors
      allowUnknown: false,    // Reject unknown fields
      stripUnknown: true      // Remove unknown fields if allowed
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.details.map((err) => ({
          field: err.path.join("."),
          message: err.message
        }))
      });
    }

    next();
  };
};

module.exports = validate;
