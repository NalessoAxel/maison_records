const router = require('express').Router();
const orderController = require('../controllers/order.controller')

router.post('/addOrder', orderController.addOrder);
router.get('/', orderController.getAllOrders);


module.exports = router;
