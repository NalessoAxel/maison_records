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

// ROUTE FOR SONGS

// let routes = ["/uploadSong1","/uploadSong2","/uploadSong3","/uploadSong4"]
let routesObj = [
            {
                lien: "/uploadSong1",
                uploadFunction: vinylController.addSongPreview1
            },
            {
                lien: "/uploadSong2",
                uploadFunction: vinylController.addSongPreview2
            },
            {
                lien: "/uploadSong3",
                uploadFunction: vinylController.addSongPreview3
            },
            {
                lien: "/uploadSong4",
                uploadFunction: vinylController.addSongPreview4
            }
        ]

for (let route of routesObj) {
router.post(route.lien, route.uploadFunction.single("song"), (req, res) => {
    res.send("single song upload success")
})
}

// router.post('/uploadSong1', vinylController.addSongPreview1.single("song"), (req,res) => {
//     res.send("single song upload success")
// })
// router.post('/uploadSong2', vinylController.addSongPreview2.single("song"), (req,res) => {
//     res.send("single song upload success")
// })
// router.post('/uploadSong3', vinylController.addSongPreview3.single("song"), (req,res) => {
//     res.send("single song upload success")
// })
// router.post('/uploadSong4', vinylController.addSongPreview4.single("song"), (req,res) => {
//     res.send("single song upload success")
// })

// router.patch('/updateSongPreview/:id', vinylController.addSongPreview.single("song"), (req,res) => {
//     res.send("single song update success")
// })



module.exports = router;