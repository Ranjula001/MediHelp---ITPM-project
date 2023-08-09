const router = require("express").Router();
let Donation = require("../models/Donation");

router.route("/add").post((req, res)=>{
    const eventId = req.body.eventId;
    const dName = req.body.dName;
    const dEmail = req.body.dEmail;
    const dMobile = Number(req.body.dMobile);
    const dAmount = Number(req.body.dAmount);
    const dCardNumber = Number(req.body.dCardNumber);
    const dCardExpDate = req.body.dCardExpDate;
    const dCardCVV = Number(req.body.dCardCVV);

    const newDonation = new Donation({
        eventId,
        dName,
        dEmail,
        dMobile,
        dAmount,
        dCardNumber,
        dCardExpDate,
        dCardCVV
    });

    newDonation.save().then(()=>{
        res.json("Donation saved")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Donation.find().then((donations)=>{
        res.json(donations)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) => {
    let userID = req.params.id;
    const {eventId, dName, dEmail,dMobile,dAmount,dCardNumber,dCardExpDate,dCardCVV } = req.body;
    
    const updateDonation = {
        eventId,
        dName,
        dEmail,
        dMobile,
        dAmount,
        dCardNumber,
        dCardExpDate,
        dCardCVV
    }

    const update = await Donation.findByIdAndUpdate(userID, updateDonation)
    .then(()=>{
        res.status(200).send({status:"Details Updated"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with updating details", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req, res) => {
    let userID = req.params.id;
    
    await Donation.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status:"Details Deleted"}); 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting details", error: err.message});
    })
})

router.route("/getMyDonations/:email").get((req,res)=>{
    let email2 = req.params.email;

    Donation.find({email2}).then((donations)=>{

        res.json(donations)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userID = req.params.id;
    const user = await Donation.find(userID).then(()=>{
        res.status(200).send({status:"Details fetched", user:user})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with fetching details", error: err.message});
    })
})

module.exports = router;
