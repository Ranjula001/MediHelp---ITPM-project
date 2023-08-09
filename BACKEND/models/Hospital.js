const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hospitalschema = new Schema({


    hospitalName :{

        type : String,
        required : true 
    },

    mobileNumber :{

        type : Number,
        required : true
    },

    email :{

        type : String,
        required : true 
    },

     fax :{

        type : Number,
        required : true 
    },

    type :{

        type : String,
        required : true
    },

    description : {

        type : String,
        required : true
    }, 

    image : {
        type : String,
        required : true
    }

})

const Hospital = mongoose.model("Hospital",hospitalschema);

module.exports = Hospital;