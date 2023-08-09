import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {brown} from "@mui/material/colors";
import {Grid} from "@mui/material";
import Navbar from "./NavBar";


export default function Allhospital() {

    const navigate = useNavigate();

    const [hospitals, sethospital] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = hospitals.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            sethospital([...hospitals])
        }
    }

    useEffect(() => {
        gethospital();
    }, []);

    function gethospital() {

        axios.get("http://localhost:8070/Hospital/").then((res) => {

            sethospital(res.data);

        }).catch((err) => {

            alert(err.message);
        })
    }

    function deleteHospital(userId) {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHospitalByID(userId);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
                gethospital()


            }
        });

    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="container"><br/>
                    <h2>Hospital List</h2><br></br>

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

                    <br></br>


                    <br></br>
                    <div>
                        <Grid container spacing={3}>
                        {value.length > 0 ? tableFilter.map((Hospital, id) => (
                            <Grid item xs={12} md={4}>
                                <Card sx={{maxWidth: 345}}>
                                    <CardMedia
                                        sx={{height: 140}}
                                        image={Hospital.image}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {Hospital.hospitalName} - {Hospital.type}
                                        </Typography>

                                        <Typography gutterBottom variant="h6" component="div">
                                            {Hospital.mobileNumber}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {Hospital.description}

                                        </Typography>
                                    </CardContent>

                                </Card>
                                </Grid>
                            ))
                            :
                            hospitals.map((Hospital, id) => (


                                <Grid item xs={12} md={4}>

                                <Card sx={{maxWidth: 345}}>
                                            <CardMedia
                                                sx={{height: 140}}
                                                image={Hospital.image}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {Hospital.hospitalName} - {Hospital.type}
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {Hospital.mobileNumber}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {Hospital.description}
                                                </Typography>
                                            </CardContent>

                                        </Card>
                                </Grid>

                            ))
                        }
                        </Grid>
                    </div>

                    <br/>


                </div>
            </div>


        </div>

    )
}
