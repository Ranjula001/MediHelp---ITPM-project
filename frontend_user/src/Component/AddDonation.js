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
import {addDonation, addHospital} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";
import Swal from "sweetalert2";
import Navbar from "./NavBar";



export default function AddDoanation() {

    const params = useParams();


    const [evendId, setEventId] = useState(params.id);
    const [dName, setDName] = useState("");
    const [dEmail, setDEmail] = useState("");
    const [dMobile, setDMobile] = useState("");
    const [dAmount, setDAmount] = useState("");
    const [dCardNumber, setDCardNumber] = useState("");
    const [dCardExpDate, setDCardExpDate] = useState("");
    const [dCardCVV, setDCardCVV] = useState("");


    const navigate = useNavigate();


    function  senddata(e) {
        e.preventDefault();
        const donation = {
            evendId,
            dName,
            dEmail,
            dMobile,
            dAmount,
            dCardNumber,
            dCardExpDate,
            dCardCVV,

        }

        addDonation(donation);

            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/allProjects");

    }


    return (

        <div >

            <Navbar></Navbar>


            <div >
                <div className="maincontainer">


                    <div className="container"><br></br>
                        <h2>Add Donation Details</h2>

                        <form className="row g-2" onSubmit={senddata}>


                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>
                                    <MDBCard>
                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>Donor Name</label>
                                                <input type="text" className="form-control" id="hospitalName"
                                                       placeholder="Enter donation name"

                                                       onChange={(e) => {

                                                           setDName(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="modelNumber">Mobile Number</label>
                                                <input type="text" className="form-control" id="modelNumber"
                                                       placeholder="Enter mobile Number"

                                                       onChange={(e) => {

                                                           setDMobile(e.target.value);

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

                                                           setDEmail(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="fax">Amount</label>
                                                <input type="number" className="form-control" id="fax"
                                                       aria-describedby="emailHelp" placeholder="Enter amount"

                                                       onChange={(e) => {

                                                           setDAmount(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <hr/>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="cardNumber">Card Number</label>
                                                <input type="number" className="form-control" id="cardNumber"
                                                       aria-describedby="emailHelp" placeholder="card Number"

                                                       onChange={(e) => {

                                                           setDCardNumber(e.target.value);

                                                       }} required/>
                                                <br/>
                                            </MDBCol>
                                        </div>


                                        <div className="form-group">
                                            <MDBRow>
                                                <Col md='6'>
                                                    <label htmlFor="expireDate">Expire Date</label>
                                                    <input type="date" className="form-control" id="expireDate"
                                                           aria-describedby="emailHelp" placeholder="expire date"

                                                           onChange={(e) => {

                                                               setDCardExpDate(e.target.value);

                                                           }} required/>
                                                    <br></br>
                                                </Col>
                                            </MDBRow>

                                        </div>

                                        <div className="form-group">
                                            <MDBRow>
                                                <Col md='6'>
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input type="number" className="form-control" id="cvv"
                                                           aria-describedby="emailHelp" placeholder="cvv"

                                                           onChange={(e) => {

                                                               setDCardCVV(e.target.value);

                                                           }} required/>
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
