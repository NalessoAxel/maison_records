const router = require('express').Router();
const vinylController = require('../controllers/vinyl.controller');

router.post('/addReference', vinylController.addReference);
router.get('/New', vinylController.getAllVinyls);
router.get('/numberOfPreviews', vinylController.numberOfPreviews);
router.get('/:id', vinylController.vinylInfo);
router.delete('/:id', vinylController.deleteVinyl);
router.patch('/update/:id', vinylController.updateVinyl);


// Image upload
router.post('/upload', vinylController.addImage.single("image"), (req,res) => {
    res.send("single file upload success")
})
router.patch('/updateImage/:id', vinylController.updateVinylImage)

    
// ROUTE FOR SONGS
router.patch('/updateSong/:id', vinylController.updateVinylSong)

for (let i = 0; i < vinylController.addSong.length; i++) {
    router.post('/uploadSong' + (i + 1), vinylController.addSong[i].multerConfig.single("song"), (req, res) => {
        res.send("song",i,"upload success")})
        // equivaut à router.post('/uploadSong1', arrayofConfigsMulter.single("song"), (req,res) => {
            //     res.send("single song upload success")
            // }) with arrayofConfigsMulter = [{configMulter1},{configMulter2},{configMulter3},{configMulter4}]
        }
            



module.exports = router;