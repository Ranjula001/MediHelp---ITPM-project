import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {deletePrescriptionByID} from "../services/prescriptionService";
import Navbar from "./NavBar";



export default function AllPrescriptions() {

    const navigate = useNavigate();
    const email = JSON.parse(localStorage.getItem('email'))


    const [prescriptions, setPrescriptions] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = prescriptions.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setPrescriptions([...prescriptions])
        }
    }

    useEffect(() => {


        getPrescriptions();
    }, []);

    function getPrescriptions() {


        axios.get("http://localhost:8070/prescription/").then((res) => {


            setPrescriptions(res.data);


        }).catch((err) => {

            alert(err.message);
        })
    }
    function deletePrescriptions(userId) {


        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deletePrescriptionByID(userId);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
                getPrescriptions()

            }
        });


        // axios.delete(`http://localhost:8070/Hospital/delete/${userId}`).then((res) => {
        //
        //
        //     alert("Deleted")
        //
        //     res.json().then((res) => {
        //         console.warn(res)
        //     })
        // })
    }


    return (



        <div >

            <Navbar></Navbar>

            <div>
                <div className="container"><br/>
                    <h2>Prescription List</h2><br></br>

                    <div className="input-group rounded">

                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" value={value}
                               onChange={filterData}
                        />

                        <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
             </span>
                    </div>

                    <br></br>

                    {/*<button className="btn btn-success mr-1"><a href="/addPrescriptions"*/}
                    {/*                                            style={{textDecoration: 'none', color: 'white'}}>Add New*/}
                    {/*    Prescription</a></button>*/}


                    {/*<button className="btn btn-success"><a href="/SupReport"*/}
                    {/*                                       style={{textDecoration: 'none', color: 'white'}}>Genarate*/}
                    {/*    Report</a></button>*/}
                    <br></br>


                    <br></br>
                    <Grid container spacing={2}>

                        {value.length > 0 ? tableFilter.map((prescription, id) => (
                            <Grid item xs={12} md={4}>

                                <Card sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {prescription.clientName}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {prescription.description}
                                            </Typography>
                                        </CardContent>


                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={prescription.image}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                            </Grid>
                            ))
                            :
                            prescriptions.map((prescription, id) => (
                                <Grid item xs={12} md={4}>

                                <Card sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {prescription.clientName}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {prescription.description}
                                            </Typography>
                                        </CardContent>

                                        {/*<CardActions>*/}
                                        {/*    <Button href={`/UpdatePrescription/${prescription._id}`} size="small">Edit</Button>*/}
                                        {/*    <Button onClick={() => deletePrescriptions(prescription._id)} size="small">Remove</Button>*/}
                                        {/*</CardActions>*/}

                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={prescription.image}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                                </Grid>
                            ))
                        }
                    </Grid>


                </div>
            </div>


        </div>

    )
}
