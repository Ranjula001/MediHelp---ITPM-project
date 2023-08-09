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
import AdminDashbroad from "./AdminDashbroad";
//import {addevent} from "../services/eventService";
import {addPrescription} from "../services/prescriptionService";
import Swal from "sweetalert2";



export default function AddPrescription() {

    const [clientName, setClientName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");



    const navigate = useNavigate();

    function onChangeImage(e)  {
        if (e.target.type === "file") {
            const scope = this;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                // scope.setState({ image: reader.result });
                setImage(reader.result)
            };
        } else {
            setImage(e.target.value)

            // this.setState({ image: e.target.value });
        }
    };

    function  senddata(e) {
        e.preventDefault();
        const prescription = {
            clientName,
            mobileNumber,
            email,
            province,
            district,
            description,
            image

        }

        const eve =  addPrescription(prescription);

            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/allPrescriptions");

    }


    return (

        <div className="row">

            <div className="col-md-3">
                <AdminDashbroad></AdminDashbroad>
            </div>

            <div className="col-md-9">
                <div className="maincontainer">


                    <div className="container"><br></br>
                        <h2>Add Presctiption Details</h2>

                        <form className="row g-2" onSubmit={senddata}>


                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>
                                    <MDBCard>


                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>Client Name</label>
                                                <input type="text" className="form-control" id="clientName"
                                                       placeholder="Enter client name"

                                                       onChange={(e) => {

                                                           setClientName(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="mobile">Mobile</label>
                                                <input type="number" className="form-control" id="mobile"
                                                       aria-describedby="emailHelp" placeholder="Enter mobile"

                                                       onChange={(e) => {

                                                           setMobileNumber(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>


                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email"
                                                       aria-describedby="emailHelp" placeholder="Enter Email"

                                                       onChange={(e) => {

                                                           setEmail(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="province">Province</label>
                                                <input type="text" className="form-control" id="province"
                                                       aria-describedby="emailHelp" placeholder="Enter province"

                                                       onChange={(e) => {

                                                           setProvince(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="district">District</label>
                                                <input type="text" className="form-control" id="district"
                                                       aria-describedby="emailHelp" placeholder="Enter district"

                                                       onChange={(e) => {

                                                           setDistrict(e.target.value);

                                                       }} required/>
                                                <br></br>
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

                                                                  setDescription(e.target.value);

                                                              }}/>
                                                    <br></br>
                                                </Col>
                                            </MDBRow>

                                        </div>

                                        <div className="form-group">
                                            <MDBRow>
                                                <Col md='6'>
                                                    <label htmlFor="description">Image</label>
                                                    <input type="file" className="form-control" id="fax"
                                                           aria-describedby="emailHelp"
                                                           onChange={onChangeImage}
                                                           required/>
                                                    <br></br>
                                                </Col>
                                            </MDBRow>

                                        </div>

                                        <button type="submit" className="btn btn-success">Submit</button>
                                        <br></br>

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
