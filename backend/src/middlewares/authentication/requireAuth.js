require('dotenv').config()
const jwt = require("jsonwebtoken")

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists and if is verified
  if (token) {
    jwt.verify(token, process.env.secretKey, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken)
        next()
      }
    })
  }
  else {
    res.redirect('/login')
  }
}

// module.exports.checkUser = () => {
//   const token = req.cookies.jwt

  
// }