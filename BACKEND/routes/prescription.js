const router = require("express").Router();
let Prescription = require("../models/Prescription");

router.route("/add").post((req, res)=>{
    const clientName = req.body.clientName;
    const province = req.body.province;
    const district = req.body.district;
    const email = req.body.email;
    const mobileNumber = req.body.mobileNumber;
    const description = req.body.description;
    const image = req.body.image;

    const newPrescription = new Prescription({
        clientName,
        province,
        district,
        email,
        mobileNumber,
        description,
        image
    });


    newPrescription.save().then(()=>{
        res.json("Prescription saved")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Prescription.find().then((projects)=>{
        res.json(projects)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) => {
    let userID = req.params.id;
    const {
        clientName,
        province,
        district,
        email,
        mobileNumber,
        description,
        image } = req.body;

    const updatePrescription = {
        clientName,
        province,
        district,
        email,
        mobileNumber,
        description,
        image
    }

    const update = await Prescription.findByIdAndUpdate(userID, updatePrescription)
    .then(()=>{
        res.status(200).send({status:"Details Updated"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with updating details", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req, res) => {
    let userID = req.params.id;

    await Prescription.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status:"Details Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting details", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userID = req.params.id;
    const user = await Prescription.findById(userID).then((pres) =>{
        res.status(200).send({status:"Details fetched", user:pres})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with fetching details", error: err.message});
    })
})

module.exports = router;
