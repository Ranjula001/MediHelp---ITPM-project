const router = require("express").Router();
let Project = require("../models/Project");

router.route("/add").post((req, res)=>{
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    const projectOrganisation = req.body.projectOrganisation;
    const projectStartDate = req.body.projectStartDate;
    const projectEndDate = req.body.projectEndDate;
    const projectLocation = req.body.projectLocation;

    const newProject = new Project({
        projectName,
        projectDescription,
        projectOrganisation,
        projectStartDate,
        projectEndDate,
        projectLocation
    });


    newProject.save().then(()=>{
        res.json("Project saved")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Project.find().then((projects)=>{
        res.json(projects)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) => {
    let userID = req.params.id;
    const {   projectName,
        projectDescription,
        projectOrganisation,
        projectStartDate,
        projectEndDate,
        projectLocation } = req.body;
    
    const updateProject = {
        projectName,
        projectDescription,
        projectOrganisation,
        projectStartDate,
        projectEndDate,
        projectLocation
    }

    const update = await Project.findByIdAndUpdate(userID, updateProject)
    .then(()=>{
        res.status(200).send({status:"Details Updated"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with updating details", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req, res) => {
    let userID = req.params.id;
    
    await Project.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status:"Details Deleted"}); 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting details", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userID = req.params.id;
    const user = await Project.findById(userID).then((project)=>{
        res.status(200).send({status:"Details fetched", user:project})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with fetching details", error: err.message});
    })
})

module.exports = router;
