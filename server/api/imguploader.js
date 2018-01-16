var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var DIR = './uploads/';

//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');

  router.post('/productpic', (req, res) => {
      var path = '';
      upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err,"<<<error");
          return res.status(422).send("an Error occured")
        }  
      // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
      });       
  });

module.exports = router