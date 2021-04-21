# Pour afficher les images

## 1. faire un appel dans server.js


-  Haut de page     

        app.use('/images', express.static('images'))

 ## 2. Créer un module dans le Controllers qui stock l'image dans le server

- Haut de page
   
         const multer = require('multer');


- On créer la function qui va récupérer l'image, la stocker, et lui donner un title 

        const fileStorageEngine = multer.diskStorage({  
        destination: (req, file, cb) => { 
            cb(null, "./images");  // send image to images folder
        },
        filename: (req, file, cb) => {
            cb(null,nameOfImage+".png");
        }
        })

> Notre fichier ira dans un répertoire que nous avons créé  /images

- Module export

        module.exports.addImage = multer({
        storage: fileStorageEngine
        })

## 3. On créer une route dans notre models

- Création de la route

        router.post('/upload', vinylController.addImage.single("image"), (req,res) => {
        res.send("single file upload success")
        })
        
## 4. Il nous reste plus qu'a faire un fetch coté vue

- Fetch post

        const onSubmit = async (formAnswers) => {           
        try {

        const imageToUpload = new FormData();
        imageToUpload.append("image",formAnswers.image[0])

        const resUploadImage = await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/vinyl/upload/`,
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
            data: imageToUpload
        });
            
        } catch (err) {
            console.log(err);
        }
        window.location = ''
        }
