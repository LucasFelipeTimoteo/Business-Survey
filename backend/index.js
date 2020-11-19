require('dotenv').config()
const cors = require('cors')

const express = require('express')
const cookieParser = require('cookie-parser')


const userRouter = require('./src/routes/userRouter')
const surveyRouter = require('./src/routes/surveyRouter')

const app = express()

app.use(cors({origin: "*"}))

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cookieParser())

// routes
app.use(surveyRouter)
app.use(userRouter)

app.listen(
  process.env.PORT || 3030, 
  () => console.log(`
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       SERVER RUNNING ON PORT ${process
        .env.PORT || 3030}
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `)
)