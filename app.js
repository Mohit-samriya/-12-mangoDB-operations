const express = require("express");
const postRoutes = require("./routes/post");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
dotenv.config()

mongoose.connect("mongodb+srv://User1:9Wdr8XkBAW98CJg@cluster0.aavek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true})
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log('DB connection error: ${err.message}');
})

const midWare = (req, res, next) => {
    console.log("applied");
    next();
}

app.use(morgan("dev"));
app.use(midWare);
app.use(bodyParser.json())
app.use("/", postRoutes);


app.listen(3000 , () => {
    console.log("Node js api listening !");
});