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
import {loginUser} from "../services/UserServices";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


   async function login(e) {
        e.preventDefault();
        const user = {
            email,
            password,
        }

       try {
           const eve = await loginUser(user);
           Swal.fire({
               title: 'Success!',
               text: 'Logged in successfully',
               icon: 'success',
               showConfirmButton: false,
               timer: 1500
           });

           localStorage.setItem('email', JSON.stringify(email));
           navigate('/home');
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
                    <h1 style={{color:"black"}} className='text-center'>Welcome To MediHelp </h1>

                    <form className="row g-2" onSubmit={login}>


                        <MDBContainer fluid >
                            <MDBRow className='justify-content-center align-items-center m-5'>
                                <MDBCard style={{background: '#ffffff' , width: '50%',padding:'20px'}} >



                                    <div className="col-auto mt-2">

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
                                                   placeholder="Enter password"

                                                   onChange={(e) => {

                                                       setPassword(e.target.value);

                                                   }} required/>
                                            <br></br>
                                        </MDBCol>
                                    </div>


                                    <button type="submit" className="btn btn-success">Login</button>
                                    <br/>
                                    <a href="/signUp">Don't have an account? Sign Up</a>

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
