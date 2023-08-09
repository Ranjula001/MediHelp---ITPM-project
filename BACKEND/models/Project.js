const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectName : {
        type : String,
        require : true
    },
    projectDescription : {
        type : String,
        require : true
    },
    projectOrganisation : {
        type: String,
        require : true
    },
    projectStartDate : {
        type: String,
        require : true
    },
    projectEndDate : {
        type : String,
        require : true
    },
    projectLocation : {
        type : String,
        require : true
    }
})

const Project = mongoose.model("Project Details",ProjectSchema);

module.exports = Project;
