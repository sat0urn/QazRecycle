const Router = require("express");
const router = new Router();
const userController = require('../controller/userConroller')
const authMiddleware = require('../middleware/authMiddleware')
const {body} = require("express-validator");

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
);
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/activate/:link', userController.activate)
router.get('/users', authMiddleware, userController.getUsers)
router.get('/user/:id', userController.getUserOf)

module.exports = router;


