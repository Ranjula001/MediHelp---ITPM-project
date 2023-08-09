const router = require("express").Router();
let Hospital = require("../models/Hospital");
router.route("/add").post((req,res)=>{


    const hospitalName = req.body.hospitalName;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const fax = req.body.fax;
    const type = req.body.type;
    const description = req.body.description;
    const image = req.body.image;

    const newHospital = new Hospital({

        hospitalName,
        mobileNumber,
        email,
        fax,
        type,
        description,
        image
    })

    newHospital.save().then(()=>{

        res.json("Hospital Success Added")
    }).catch((err)=>{

        console.log(err);
    })
})    



router.route("/").get((req,res)=>{

    Hospital.find().then((Hospital)=>{
        res.json(Hospital)

    }).catch((err)=>{

        console.log(err);
    })

})





router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;
    const {hospitalName, mobileNumber,email, fax, type, description,image} = req.body;

    const upadatepdetails = {

        hospitalName,
        mobileNumber,
        email,
        fax,
        type,
        description,
        image
    }

    const update = await Hospital.findByIdAndUpdate(userId, upadatepdetails).then(() =>{

        res.status(200).send({status: "Hospital details updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with updating date", error:err.message})
    })


   })



   router.route("/delete/:id").delete(async (req,res) => {

    let userId = req.params.id;

    await Hospital.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "Hospital details deleted"});

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with Delete user", error:err.message})
    })

   })


   router.route("/get/:id").get(async (req,res) => {

    let userId = req.params.id;
    const user = await Hospital.findById(userId).then( (Hospital) =>{

        res.status(200).send({status: "user fetched", user : Hospital})

    }).catch((err)=>{
 
        console.log(err.message);
        res.status(500).send({status: "Erroe with get user", error:err.message})
    })

})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await Hospital.findById(userId).then(()=>{
        res.status(200).send({status:"User fetched", user:user});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error:err.message});
 })
})



module.exports = router;
