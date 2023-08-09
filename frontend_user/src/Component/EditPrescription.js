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
import {updateHospital} from "../services/hospitalService";
import Swal from "sweetalert2";
import Navbar from "./NavBar";

function EditPrescription(userId) {

    const [Prescription, setPrescription] = useState([]);
    const [clientName, setClientName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const params = useParams();
    const navigate = useNavigate();


    function onChangeImage(e)  {
        if (e.target.type === "file") {
            const scope = this;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                setImage(reader.result)
            };
        } else {
            setImage(e.target.value)

        }
    };

    useEffect(() => {
        getPrescriptionDetails();
    }, [])

    const getPrescriptionDetails = async () => {
        let result = await fetch(`http://localhost:8070/prescription/get/${params.id}`);
        const {user} = await result.json();
        setClientName(user.clientName)
        setMobileNumber(user.mobileNumber)
        setEmail(user.email)
        setProvince(user.province)
        setDistrict(user.district)
        setDescription(user.description)

    }

    function onChangeImage(e)  {
        if (e.target.type === "file") {
            const scope = this;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                setImage(reader.result)
            };
        } else {
            setImage(e.target.value)

        }
    };

    function updateEvent(e) {
        e.preventDefault();


        const updatePrescription = {
            clientName,
            mobileNumber,
            email,
            province,
            district,
            description,
            image
        }

        axios.put(`http://localhost:8070/prescription/update/${params.id}`, updatePrescription).then((res) => {
            setPrescription(res.data);
            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/allPrescriptions')

        }).catch((err) => {
            alert(err.message);
        })
    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="maincontainer">


                    <div className="container">
                        <h2>Update Prescription Details</h2>

                        <form onSubmit={updateEvent}>

                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>


                                    <MDBCard>


                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>Client Name</label>
                                                <input type="text" className="form-control" id="clientName"
                                                       placeholder="Enter client name"

                                                       value={clientName}
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
                                                       value={mobileNumber}

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
                                                       value={email}

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
                                                       value={province}

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
                                                       value={district}

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
                                                              value={description}

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

export default EditPrescription;
