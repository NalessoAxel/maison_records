const router = require('express').Router();
const vinylController = require('../controllers/vinyl.controller');

router.post('/addReference', vinylController.addReference);
router.get('/New', vinylController.getAllVinyls);
router.get('/:id', vinylController.vinylInfo);
router.delete('/:id', vinylController.deleteVinyl)
router.patch('/update/:id', vinylController.updateVinyl)


router.post('/upload', vinylController.addImage.single("image"), (req,res) => {
    res.send("single file upload success")
})

router.patch('/updateImage/:id', vinylController.addImage.single("image"), (req,res) => {
    res.send("single file update success")
})
// vinylController.addImage = multer in vynilController
//single image = search one file with image name


module.exports = router;