import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
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
import {Card, Container, Row, Col} from "react-bootstrap";
import {addHospital} from "../services/hospitalService";
import {addProject} from "../services/projectService";
import AdminDashbroad from "./AdminDashbroad";
import Swal from "sweetalert2";


export default function AddProject() {

    const [projectName, setProjectName] = useState("");
    const [projectOrganisation, setProjectOrganisation] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [projectLocation, setProjectLocation] = useState("");
    const [projectDescription, setProjectDescription] = useState("");


    const navigate = useNavigate();

    function senddata(e) {
        e.preventDefault();
        const project = {
            projectName,
            projectOrganisation,
            projectStartDate,
            projectEndDate,
            projectLocation,
            projectDescription,

        }

          addProject(project);

        Swal.fire({
            title: 'Sucess!',
            text: ' successfull',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
        navigate("/allProjects");


        // navigate("#");

    }


    return (

        <div className="row">

            <div className="col-md-3">
                <AdminDashbroad></AdminDashbroad>
            </div>

            <div className="col-md-9">
                <div className="maincontainer">


                    <div className="container"><br></br>
                        <h2>Add Project Details</h2>

                        <form className="row g-2" onSubmit={senddata}>


                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>
                                    <MDBCard>


                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>Project Name</label>
                                                <input type="text" className="form-control" id="projectName"
                                                       placeholder="Enter project name"

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
