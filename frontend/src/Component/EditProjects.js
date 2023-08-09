import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Card, Container, Row, Col} from "react-bootstrap";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBSelect,
    MDBRadio
}
    from 'mdb-react-ui-kit';
import {get} from 'lodash';
import {useNavigate, useParams} from 'react-router-dom';
import AdminDashbroad from "./AdminDashbroad";
//import {updateHospital} from "../services/hospitalService";
import Swal from "sweetalert2";

function EditProject(userId) {

    const [Project, setProject] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [projectOrganisation, setProjectOrganisation] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [projectLocation, setProjectLocation] = useState("");
    const [projectDescription, setProjectDescription] = useState("");


    const params = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        getProjectDetails();
    }, [])

    const getProjectDetails = async () => {
        let result = await fetch(`http://localhost:8070/project/get/${params.id}`);
        const {user} = await result.json();
        setProjectName(user.projectName)
        setProjectOrganisation(user.projectOrganisation)
        setProjectStartDate(user.projectStartDate)
        setProjectEndDate(user.projectEndDate)
        setProjectLocation(user.projectLocation)
        setProjectDescription(user.projectDescription)

    }



    function updateEvent(e) {
        e.preventDefault();


        const updateProject = {
            projectName,
            projectOrganisation,
            projectStartDate,
            projectEndDate,
            projectLocation,
            projectDescription,
        }

        axios.put(`http://localhost:8070/project/update/${params.id}`, updateProject).then((res) => {
            setProject(res.data);
            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/allProjects')

        }).catch((err) => {
            alert(err.message);
        })
    }


    return (


        <div className='row'>

            <div className="col-md-3">

                <AdminDashbroad></AdminDashbroad>
            </div>

            <div className="col-md-9">
                <div className="maincontainer">


                    <div className="container">
                        <h2>Update Project Details</h2>

                        <form onSubmit={updateEvent}>

                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>



                                    <MDBCard>


                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>Project Name</label>
                                                <input type="text" className="form-control" id="projectName"
                                                       placeholder="Enter project name"

                                                       value={projectName}
                                                       onChange={(e) => {

                                                           setProjectName(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="projectOrganization">Project Organization</label>
                                                <input type="text" className="form-control" id="projectOrganization"
                                                       placeholder="Enter project organization"
                                                       value={projectOrganisation}

                                                       onChange={(e) => {

                                                           setProjectOrganisation(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="startDate">Start Date</label>
                                                <input type="date" className="form-control" id="startDate"
                                                       aria-describedby="emailHelp" placeholder="Enter startDate"
                                                       value={projectStartDate}

                                                       onChange={(e) => {

                                                           setProjectStartDate(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="endDate">End Date</label>
                                                <input type="date" className="form-control" id="endDate"
                                                       aria-describedby="emailHelp" placeholder="Enter endDate"
                                                       value={projectEndDate}

                                                       onChange={(e) => {

                                                           setProjectEndDate(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="location">Location</label>
                                                <input type="text" className="form-control" id="location"
                                                       aria-describedby="emailHelp" placeholder="Enter location"
                                                       value={projectLocation}

                                                       onChange={(e) => {

                                                           setProjectLocation(e.target.value);

                                                       }} required/>
                                                <br/>
                                            </MDBCol>
                                        </div>


                                        <div className="form-group">
                                            <MDBRow>
                                                <Col md='6'>
                                                    <label htmlFor="description">Description</label>
                                                    <textarea type="text" className="form-control" id="description"
                                                              max="100"
                                                              required

                                                              value={projectDescription}

                                                              onChange={(e) => {

                                                                  setProjectDescription(e.target.value);

                                                              }}/>
                                                    <br></br>
                                                </Col>
                                            </MDBRow>

                                        </div>

                                        <button type="submit" className="btn btn-success">Submit</button>
                                        <br/><br/>

                                    </MDBCard>




                                </MDBRow>
                            </MDBContainer>


                        </form>

                    </div>


                </div>

            </div>

        </div>


    )


}

export default EditProject;
