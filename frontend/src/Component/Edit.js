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

function EditHospital(userId) {

    const [Hospital, setHospital] = useState([]);
    const [hospitalName, setHospitalName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [fax, setFax] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const params = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        getHospitalDetails();
    }, [])

    const getHospitalDetails = async () => {
        let result = await fetch(`http://localhost:8070/Hospital/get/${params.id}`);
        // setHospital(user.)
        const {user} = await result.json();
        // setHospital(user.data);
        setHospitalName(user.hospitalName)
        setMobileNumber(user.mobileNumber)
        setEmail(user.email)
        setFax(user.fax)
        setType(user.type)
        setDescription(user.description)

        /* setName(result.name);
         setPassport(result.passport);
         setAge(result.age);
         setGender(result.gender);
         setMobile(result.mobile);
         setEmail(result.email); */
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

    function updateHospital(e) {
        e.preventDefault();


        const updateHospital = {
            hospitalName,
            mobileNumber,
            email,
            fax,
            type,
            description,
            image
        }

        axios.put(`http://localhost:8070/Hospital/update/${params.id}`, updateHospital).then((res) => {
            setHospital(res.data);
            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/all')

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
                        <h2>Update Hospital Details</h2>

                        <form onSubmit={updateHospital}>

                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>
                                    <MDBCard>

                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label htmlFor="name" className="form-label">Hospital Name</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Your hospitalname"
                                                       value={hospitalName}
                                                       onChange={(e) => {


                                                           setHospitalName(e.target.value);

                                                       }}/>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">

                                            <MDBCol md='6'>
                                                <label htmlFor="name" className="form-label">Mobile Number</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Your mobilenumber"
                                                       value={mobileNumber}
                                                       onChange={(e) => {


                                                           setMobileNumber(e.target.value);

                                                       }}/>
                                            </MDBCol>

                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>

                                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email"
                                                       placeholder="Enter Email"
                                                       value={email}
                                                       onChange={(e) => {


                                                           setEmail(e.target.value);

                                                       }}/>
                                            </MDBCol>

                                        </div>


                                        <div className="form-group">

                                            <MDBCol md='6'>
                                                <label htmlFor="name" className="form-label">fax</label>
                                                <input type="text" className="form-control" id="fax"
                                                       placeholder="Enter Your fax"
                                                       value={fax}
                                                       onChange={(e) => {


                                                           setFax(e.target.value);

                                                       }}/>
                                            </MDBCol>

                                        </div>


                                        <div className="form-group">
                                            <MDBCol md='6'>

                                                <label htmlFor="name" className="form-label">Hospital Type</label>

                                                <select value={type} className="form-control"
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
                                            </MDBCol>


                                        </div>

                                        <div className="form-group">

                                            <MDBCol md='6'>

                                                <label htmlFor="name" className="form-label">Description</label>
                                                <input type="text" className="form-control" id="description"
                                                       placeholder="Enter Total No Of Days in Sri Lanka"
                                                       value={description}
                                                       onChange={(e) => {


                                                           setDescription(e.target.value);

                                                       }}/>
                                            </MDBCol>

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

                                        <br></br>
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

export default EditHospital;
