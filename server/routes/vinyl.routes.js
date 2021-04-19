const router = require('express').Router();
const vinylController = require('../controllers/vinyl.controller');

router.post('/addReference', vinylController.addReference);
router.get('/New', vinylController.getAllVinyls);
router.get('/:id', vinylController.vinylInfo);


module.exports = router;