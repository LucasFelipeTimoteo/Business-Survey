const { Router } = require('express')
const requireAuth = require('../middlewares/authentication/requireAuth')

const router = Router()

router.get('/survey', () => {})

module.exports = router