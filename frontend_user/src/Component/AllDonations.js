import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";
import {deletePrescriptionByID} from "../services/prescriptionService";
import Navbar from "./NavBar";
import Footer from "./Footer";


export default function AllDonations() {

    const navigate = useNavigate();

   const email = JSON.parse(localStorage.getItem('email'))

    const [donations, setDonations] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = donations.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setDonations([...donations])
        }
    }

    useEffect(() => {


        getMyDonations();
    }, []);

   const getMyDonations = async () => {

        // let result = await fetch(`http://localhost:8070/donation/get/${email}`);


        axios.get("http://localhost:8070/donation/").then((res) => {


            const dataSet = res.data

           const newDataSet =  dataSet.filter(data => data.dEmail === email)


            setDonations(newDataSet);

        }).catch((err) => {

            alert(err.message);
        })
    }

    function deleteHospital(userId) {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deletePrescriptionByID(userId);
                // navigate("/all");
                // useEffect();
                Swal.fire("Deleted!", "Your item has been deleted.", "success");

            }
        });


        // axios.delete(`http://localhost:8070/Hospital/delete/${userId}`).then((res) => {
        //
        //
        //     alert("Deleted")
        //
        //     res.json().then((res) => {
        //         console.warn(res)
        //     })
        // })
    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="container"><br/>
                    <h2>My Donation List</h2><br></br>

                    <div className="input-group rounded">

                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" value={value}
                               onChange={filterData}
                        />

                        <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
             </span>
                    </div>

                    <br></br>

                    <table className="table table-success table-striped">
                        <thead>
                        <tr>
                            {/*<th scope="col">ID</th>*/}
                            <th scope="col">Donation Id</th>
                            <th scope="col">Donation Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.length > 0 ? tableFilter.map((donations, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td>{donations._id}</td>
                                    <td>{donations.dName}</td>
                                    <td>{donations.dMobile}</td>
                                    <td>{donations.dEmail}</td>
                                    <td>{donations.dAmount}</td>

                                </tr>
                            ))
                            :
                            donations.map((donations, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td>{donations._id}</td>
                                    <td>{donations.dName}</td>
                                    <td>{donations.dMobile}</td>
                                    <td>{donations.dEmail}</td>
                                    <td>{donations.dAmount}</td>

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>

    )
}
