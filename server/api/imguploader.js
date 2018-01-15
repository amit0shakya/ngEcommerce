var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');

  // Set The Storage Engine
  const storage = multer.diskStorage({
    destination: './../../public',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  // Init Upload
  const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('produtimg');

  // Check File Type
  function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }

  router.post('/productpic', (req, res) => {

    console.log(req.body,'<<<<upload pic')
        
    upload(req, res, (err) => {
      if(err){
        res.send('Error>>', err);
      } else {
        if(req.file == undefined){
          res.send('Error: No File Selected!');
        } else {
          res.send('File Uploaded!');
        }
      }
    });
    
  });

module.exports = router