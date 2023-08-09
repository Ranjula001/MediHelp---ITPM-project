import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import {deleteProjectByID} from "../services/projectService";
import AdminDashbroad from "./AdminDashbroad";
import {Grid} from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Navbar from "./NavBar";


export default function AllProject() {

    const navigate = useNavigate();

    const [project, sethProject] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = project.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            sethProject([...project])
        }
    }

    useEffect(() => {

        function getProjects() {



            axios.get("http://localhost:8070/project/").then((res) => {

                sethProject(res.data);

            }).catch((err) => {

                alert(err.message);
            })
        }
        getProjects();
    }, []);

    function deleteHospital(id) {


        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                const project =  deleteProjectByID(id);
                navigate("/allProjects");
                // useEffect();
                Swal.fire("Deleted!", "Your item has been deleted.", "success");

            }
        });

    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="container"><br/>
                    <h2>Projects List</h2><br></br>

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

                    <br/>

                    <Grid container spacing={2}>

                        {value.length > 0 ? tableFilter.map((project, id) => (
                                <Grid item xs={12} md={4}>

                                    <Card sx={{ display: 'flex' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {project.projectName} - {project.projectOrganisation}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {project.projectStartDate} -
                                                    {project.projectEndDate}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button href={`/addDonation/${project._id}`} size="small">Donate</Button>
                                            </CardActions>


                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151 }}
                                            image='https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-superJumbo.jpg?quality=75&auto=webp'
                                            alt="Live from space album cover"
                                        />
                                    </Card>
                                </Grid>
                            ))
                            :
                            project.map((project, id) => (
                                <Grid item xs={120} md={40}>

                                    <Card sx={{ display: 'flex' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {project.projectName} - {project.projectOrganisation} <br/> <h6> {project.projectDescription}  </h6>                                              </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {project.projectStartDate} -
                                                    {project.projectEndDate}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button href={`/addDonation/${project._id}`} size="small">Donate</Button>
                                            </CardActions>


                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151 }}
                                            image='https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-superJumbo.jpg?quality=75&auto=webp'
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
