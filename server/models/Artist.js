//MODEL FOR ARTISTS COLLECTION IN MUSIC APP DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const artistSchema=mongoose.Schema({
    user_id:Schema.Types.ObjectId,
    user_name:String,
    name: {
        type: Array,
    },
  
});

module.exports=mongoose.model('artists',artistSchema);
