const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();



const stripe = require('stripe')(process.env.SECRET_KET);
const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true})); 


mongoose.connect(URL, {

   //useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   //useFindAndModify: false

});
    
const connection = mongoose.connection;
connection.once("open", () => {
   console.log("Mongodb Conection Success!");
})

const HospitalRouter = require("./routes/Hospitals.js");
app.use("/hospital",HospitalRouter);

const donationRouter = require("./routes/donations.js");
app.use("/donation",donationRouter);

const projectRouter = require("./routes/projects.js");
app.use("/project",projectRouter);

// const eventRouter = require("./routes/event.js");
// app.use("/event",eventRouter);

const prescriptionRouter = require("./routes/prescription.js");
app.use("/prescription",prescriptionRouter);




const userRoutes = require("./routes/UserRoutes.js");
app.use('/user', userRoutes);




app.listen(PORT, () => {
    console.log(`Server is up and runing on port number : ${PORT}`)
})


