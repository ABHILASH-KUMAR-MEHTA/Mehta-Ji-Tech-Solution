const express = require('express');
const router = express.Router();
const abhi = require("../controller/auth-controller")
const validate = require("../middleware/validate-middleware")
const {signupScheme,loginScheme} = require("../validation/auth-validation")
const authMiddleware = require ("../middleware/authMiddleware")


router.route('/').get(abhi.home); 

router.route('/signup').post( validate(signupScheme), abhi.yansh);

router.route('/login').post( validate(loginScheme), abhi.login);

router.route("/user").get(authMiddleware, abhi.user)


module.exports = router