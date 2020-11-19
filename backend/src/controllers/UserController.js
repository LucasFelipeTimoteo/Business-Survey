require('dotenv').config()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { registerValidation, loginValidation } = require('../validation/schema')

const {
  checkIfEmailExists,
  insertNewUser,
  getUser
} = require('../database/queries')

module.exports.UserController = {
  async register(req, res) {
    try {
      const Schema = registerValidation()
      const isValidSchema = await Schema.validateAsync(req.body)

      const { email, username, password } = req.body

      if (isValidSchema) {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = {
          username,
          email,
          password: hashedPassword
        }

        const registeredUser = await insertNewUser("users", newUser)
        const userId = registeredUser[0]
        res.json({ message: "registered", userId })
      }
    }
    catch (error) {
      const codeError = error.code

      if(codeError === "ER_DUP_ENTRY"){
        res.status(400).json({message: "email already registered"})
      }
      res.status(400).json({message: error.sqlMessage})
    }
  },

  async login(req, res) {
    try {
      const Schema = loginValidation()
      const isValidSchema = await Schema.validateAsync(req.body)

      const { email, password } = req.body

      if (isValidSchema) {
        const checkedEmail = await checkIfEmailExists("users", email)
        const userEmail = checkedEmail[0]

        if (!userEmail) {
          throw new Error("incorrect email")
        }

        const user = await getUser("users", email)
        const userData = user[0]

        const isPasswordValid = await bcrypt.compare(password, userData.password)

        if (!isPasswordValid) {
          res.status(400).json({ message: "Incorrect password" })
        }

        const token = jwt.sign({ id: userData.id }, process.env.secretKey)
        res.cookie('jwt', token, { httpOnly: true })

        res.json({ message: "logged" })
        res.redirect('/survey')
      }
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}