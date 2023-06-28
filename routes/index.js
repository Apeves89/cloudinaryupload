var express = require('express');
var router = express.Router();
const cloudinary = require("../config/cloudinary");
const upload = require("../config/multer");
const Photo = require('../models/photo')

/* GET home page. */
router.get('/', async function(req, res) {
  const photos = await Photo.find({});
  res.render('index',{title:'Express',photos})
});

router.post("/", upload.single("photo"), async (req, res) => {

	console.log(req.body, req.file)
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user
    let photo = new Photo({
      photoUrl: result.secure_url,
    });
    // save user details in mongodb
    await photo.save();
    res.status(200)
      .send({
        photo
      });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;