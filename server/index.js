const user = require('./routes/user')
const auth = require('./routes/auth')
const sawouser = require('./routes/sawoUser');
const artists=require('./routes/artists');
const connection = require("./config/db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api/user", user);
app.use('/api/auth', auth);
app.use('/api/sawouser', sawouser);
app.use('/artists',artists);




const port = process.env.PORT || 1821;
app.listen(port, () => console.log(`Listening on port ${port}...`));
