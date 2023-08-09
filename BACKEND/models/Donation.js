const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DonationSchema = new Schema({

    eventId : {
        type : String,
        require : true
    },
    dName : {
        type : String,
        require : true
    },
    dEmail : {
        type : String,
        require : true
    },
    dMobile : {
        type: Number,
        require : true
    },
    dAmount : {
        type: Number,
        require : true
    },
    dCardNumber : {
        type : Number,
        require : true
    },
    dCardExpDate : {
        type : String,
        require : true
    },
    dCardCVV : {
        type : Number,
        require : true
    }
})

const Donation = mongoose.model("Donation Details",DonationSchema);

module.exports = Donation;