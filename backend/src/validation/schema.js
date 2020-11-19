const Joi = require('joi')

module.exports.registerValidation = function() {
  const Schema = Joi.object({
    username: Joi.string().required().min(1).max(200),
    email: Joi.string().email().required().max(200),
    password: Joi.string().required().min(5).max(800)
  })

  return Schema
}

module.exports.loginValidation = function() {
  const Schema = Joi.object({
    email: Joi.string().email().required().max(200),
    password: Joi.string().required().min(5).max(800)
  })

  return Schema
}
