const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Models/Routes/userRoute")


app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.get("/", (req,res) =>{
    res.send("Test")
})
app.listen(port, (req,res) =>{
    console.log(`Server ouvert sur le port : ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection MongoDB établie"))
.catch((error) => console.log("Connection mongodb échouée", error.message))