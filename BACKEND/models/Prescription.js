const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    clientName : {
        type : String,
        require : true
    },
    province : {
        type : String,
        require : true
    },
    district : {
        type: String,
        require : true
    },
    email : {
        type: String,
        require : true
    },
    mobileNumber : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    image:{
        type : String,
        require : true
    }
})

const Prescription = mongoose.model("Prescription Details",PrescriptionSchema);

module.exports = Prescription;
