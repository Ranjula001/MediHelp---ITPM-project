const router = require("express").Router();
let Event = require("../models/Event");

router.route("/add").post((req, res)=>{
    const eventUserName = req.body.eventUserName;
    const email = req.body.email;
    const province = req.body.province;
    const mobileNumber = req.body.mobileNumber;
    const district = req.body.district;
    const nic = req.body.nic;
    const city = req.body.city;
    const typeOfRequest = req.body.typeOfRequest;
    const subject = req.body.subject;
    const message = req.body.message;
    const image = req.body.image;

    const newEvent = new Event({
        eventUserName,
        email,
        province,
        mobileNumber,
        district,
        nic,
        city,
        typeOfRequest,
        subject,
        message,
        image
    });


    newEvent.save().then(()=>{
        res.json("Event saved")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Event.find().then((projects)=>{
        res.json(projects)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) => {
    let userID = req.params.id;
    const {
        eventUserName,
        email,
        province,
        mobileNumber,
        district,
        nic,
        city,
        typeOfRequest,
        subject,
        message,
        image} = req.body;
    
    const updateEvent = {
        eventUserName,
        email,
        province,
        mobileNumber,
        district,
        nic,
        city,
        typeOfRequest,
        subject,
        message,
        image
    }

    const update = await Event.findByIdAndUpdate(userID, updateEvent)
    .then(()=>{
        res.status(200).send({status:"Details Updated"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with updating details", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req, res) => {
    let userID = req.params.id;
    
    await Event.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status:"Details Deleted"}); 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting details", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userID = req.params.id;


    const event = await Event.findById(userID).then((event)=>{
        res.status(200).send({status:"Details fetched", user:event})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with fetching details", error: err.message});
    })
})

module.exports = router;
