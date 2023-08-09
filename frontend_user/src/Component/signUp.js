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
//import {Card, Container, Row, Col} from "react-bootstrap";
//import {addHospital} from "../services/hospitalService";
//import AdminDashbroad from "./AdminDashbroad";
//import {addevent} from "../services/eventService";
import Swal from "sweetalert2";
import {loginUser, signUp} from "../services/UserServices";


export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [nic, setNic] = useState("");

    const navigate = useNavigate();


   async function register(e) {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            mobile,
            nic
        }

       try {
           const eve = await signUp(user);
           Swal.fire({
               title: 'Success!',
               text: 'Logged in successfully',
               icon: 'success',
               showConfirmButton: false,
               timer: 1500
           });
           navigate('/');
       } catch (error) {
           console.error(error);
           Swal.fire({
               title: 'Error!',
               text: 'Failed to log in',
               icon: 'error',
               showConfirmButton: false,
               timer: 1500
           });
       }

    }


    return (

        <div className='background'>
            <div className="row">


                <div>
                    <div className="maincontainer">


                        <div className="container"><br></br>
                            <h1 className='text-center' style={{color:"black"}}>Register To MediCare</h1>

                            <form className="row g-2" onSubmit={register}>


                                <MDBContainer fluid>
                                    <MDBRow className='justify-content-center align-items-center m-5'>
                                        <MDBCard style={{background: '#ffffff' , width: '50%',padding:'20px'}}>


                                            <div className="form-group">
                                                <MDBCol md='12'>
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="form-control" id="name"
                                                           placeholder="Enter name"

                                                           onChange={(e) => {

                                                               setName(e.target.value);

                                                           }} required/>
                                                    <br></br>
                                                </MDBCol>
                                            </div>
                                            <div className="col-auto">

                                                <MDBCol md='12'>
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" id="userName"
                                                           placeholder="Enter user name"

                                                           onChange={(e) => {

                                                               setEmail(e.target.value);

                                                           }} required/>
                                                    <br></br>
                                                </MDBCol>
                                            </div>

                                            <div className="form-group">
                                                <MDBCol md='12'>
                                                    <label htmlFor="modelNumber">Password</label>
                                                    <input type="password" className="form-control" id="modelNumber"
                                                           placeholder="Enter Model Number"

                                                           onChange={(e) => {

                                                               setPassword(e.target.value);

                                                           }} required/>
                                                    <br></br>
                                                </MDBCol>
                                            </div>

                                            <div className="form-group">
                                                <MDBCol md='12'>
                                                    <label htmlFor="mobile">Mobile</label>
                                                    <input type="number" className="form-control" id="mobile"
                                                           placeholder="Enter name"

                                                           onChange={(e) => {

                                                               setMobile(e.target.value);

                                                           }} required/>
                                                    <br></br>
                                                </MDBCol>
                                            </div>

                                            <div className="form-group">
                                                <MDBCol md='12'>
                                                    <label htmlFor="nic">NIC</label>
                                                    <input type="text" className="form-control" id="nic"
                                                           placeholder="Enter name"

                                                           onChange={(e) => {

                                                               setNic(e.target.value);

                                                           }} required/>
                                                    <br></br>
                                                </MDBCol>
                                            </div>


                                            <button type="submit" className="btn btn-success">Register</button>
                                            <br/>
                                            <a href="/">Have an account? Login</a>

                                            <br/>
                                        </MDBCard>
                                    </MDBRow>
                                </MDBContainer>


                            </form>
                        </div>


                    </div>

                </div>


            </div>

        </div>


    )

}
