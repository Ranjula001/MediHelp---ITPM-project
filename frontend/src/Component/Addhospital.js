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
import Swal from "sweetalert2";



export default function Addhospital() {

    const [hospitalName, setHospitalName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [fax, setFax] = useState("");
    const [type, setType] = useState("General Hospital");
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
        const hospital = {
            hospitalName,
            mobileNumber,
            email,
            fax,
            type,
            description,
            image,

        }



        const hosp =  addHospital(hospital);

            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/all");

    }


    return (

        <div className="row">

            <div className="col-md-3">
                <AdminDashbroad></AdminDashbroad>
            </div>

            <div className="col-md-9">
                <div className="maincontainer">


                    <div className="container"><br></br>
                        <h2>Add Hospital Details</h2>

                        <form className="row g-2" onSubmit={senddata}>


                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>
                                    <MDBCard>
                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>Hospital Name</label>
                                                <input type="text" className="form-control" id="hospitalName"
                                                       placeholder="Enter hospital name"

                                                       onChange={(e) => {

                                                           setHospitalName(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="modelNumber">Mobile Number</label>
                                                <input type="text" className="form-control" id="modelNumber"
                                                       placeholder="Enter Model Number"

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
                                                <label htmlFor="fax">Fax</label>
                                                <input type="number" className="form-control" id="fax"
                                                       aria-describedby="emailHelp" placeholder="Enter fax"

                                                       onChange={(e) => {

                                                           setFax(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="nationality">Hospital Type</label>
                                                <select className="form-control"
                                                        onChange={(e) => {

                                                            setType(e.target.value);

                                                        }}>
                                                    <option value='National Hospital of Sri Lanka'>
                                                    National Hospital of Sri Lanka
                                                    </option>
                                                    <option value='private Hospital'>
                                                        Private Hospital
                                                    </option>
                                                    <option value='Teaching Hospitals'>
                                                    Teaching Hospitals
                                                    </option>
                                                    <option value='Provincial General Hospitals'>
                                                    Provincial General Hospitals
                                                    </option>
                                                    <option value='District General Hospitals '>
                                                    District General Hospitals 
                                                    </option>
                                                    <option value='Base Hospitalss '>
                                                    Base Hospitals
                                                    </option>
                                                    <option value='Divisional Hospitals'>
                                                    Divisional Hospitals 
                                                    </option>


                                                </select>
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
                                                           aria-describedby="emailHelp" placeholder="Enter fax"
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
