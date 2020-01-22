var express = require('express');
var router = express.Router();
const userController = require('../controllers/userManagement.controller');
/* GET home page. */
router.post('/register', userController.registerUser);
router.post('/login', userController.login);
router.post('/resetPassword', userController.resetPassword);
router.post('/changePassword', userController.changePassword);

module.exports = router;
