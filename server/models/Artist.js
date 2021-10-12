//MODEL FOR ARTISTS COLLECTION IN MUSIC APP DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artistSchema=mongoose.Schema({
    artistName:[Schema.Types.String],
    name: {
        type: String,
        required: true
    },
  
});

module.exports=mongoose.model('artists',artistSchema);
