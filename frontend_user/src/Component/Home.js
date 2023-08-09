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
import ControlledCarousel from "./HomeSlide";
import "./slider.css"
import Footer from "./Footer";
import './glass.css';



export default function Home() {

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

            navigate("/allEvents");

    }


    return (
        

        <div >

            <Navbar></Navbar>

            <div className='background'>
                <div className="maincontainer">


                    <div className="container"><br></br>
                    <h1 className='text-center' style={{ padding: '100px', fontSize: '50px', fontFamily: 'fantasy' }}>Welcome To MediHelp</h1>
                    </div>
                    <form>
                    <div className="slider" id="glassmorphism">
                        <ControlledCarousel/>    
                    </div> 
                    </form> 
                    <br/>                      
                    <br/>
                    
                    
                </div>

            </div>

            <Footer></Footer>

        </div>


    )

}
