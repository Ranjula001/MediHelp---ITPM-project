const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventUserName : {
        type : String,
        require : true
    },
    email :{
        type : String,
        required : true
    },
    province :{
        type : String,
        required : true
    },
    mobileNumber :{

        type : Number,
        required : true
    },
    district : {
        type : String,
        require : true
    },

    nic : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    typeOfRequest : {
        type: String,
        require : true
    },
    subject : {
        type: String,
        require : true
    },
    message : {
        type : String,
        require : true
    },
    image :{
        type : String,
        require : true
    }
})

const Event = mongoose.model("Event Details",EventSchema);

module.exports = Event;
