const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

require('dotenv/config')

//Middlewares
app.use(bodyParser.json())
app.use(cors())

//Import Eoutes
const postsRoute = require("./routes/posts");

app.use('/posts', postsRoute);

//Routes
app.get('/' , (req,res) => {
    res.send("<h1>We are on HOME 🏘️ </h1>")
})


//Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('conected to DB!');
})

app.listen(3000)