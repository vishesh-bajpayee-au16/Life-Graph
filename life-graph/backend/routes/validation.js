const Joi = require("@hapi/joi");

// SIGNUP VALIDATION

const signupValidation = (data) => {
  const schema = {
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).max(1024).required(),
  };

  return Joi.validate(data, schema);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).max(1024).required(),
  };

  return Joi.validate(data, schema);
};

module.exports.signupValidation = signupValidation;
module.exports.loginValidation = loginValidation;
