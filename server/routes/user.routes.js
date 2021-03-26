const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

//auth
router.post('/register', authController.signUp);




// user DB
router.get('/', userController.getAllUsers); //tu vas dans userController et active telle fonction
router.get('/:id', userController.userInfo); // selection d'un user précis
// router.put('/:id', userController.updateUser); // route pour update info du user
// router.delete('/:id', userController.deleteUser);

module.exports = router;