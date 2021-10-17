const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const artists =require('./../models/Artist');
app.use(bodyParser.urlencoded({
  extended: true
}));

router.post('/',function(req,res)
{

    const {array}=req.body;
    console.log(array);
    const newArtists = new artists ({
      name:array, 
    });
    res.status(200).send(req.cookies);  
    newArtists.save((err) => {
      if (err) {
       console.log(err);
      } else {
       console.log("success");
      }
    });

});
module.exports = router;
