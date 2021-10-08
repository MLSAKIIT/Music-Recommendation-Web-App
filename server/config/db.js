const mongoose = require("mongoose");
// const config = require('config');
// const db = config.get('mongoURI'); 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect('mongodb+srv://admin01:admin01@project-m0.qihnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
