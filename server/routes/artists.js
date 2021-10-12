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
    const {artistName}=req.body;
    console.log(artistName);
    const newArtists = new artists ({
      name:artistName, 
    });

    newArtists.save((err) => {
      if (err) {
       console.log("failure");
      } else {
       console.log("success");
      }
    });

});
module.exports = router;
