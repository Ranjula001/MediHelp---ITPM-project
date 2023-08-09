import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";
import {deletePrescriptionByID} from "../services/prescriptionService";
import Navbar from "./NavBar";


export default function MyPrescriptions() {

    const navigate = useNavigate();

    const [prescriptions, setPrescriptions] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);
    const email = JSON.parse(localStorage.getItem('email'))



    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = prescriptions.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setPrescriptions([...prescriptions])
        }
    }

    useEffect(() => {


        getPrescriptions();
    }, []);

    function getPrescriptions() {


        axios.get("http://localhost:8070/prescription/").then((res) => {

            const dataSet = res.data

            const newDataSet =  dataSet.filter(data => data.email === email)
            setPrescriptions(newDataSet);

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
                getPrescriptions()

            }
        });



    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="container"><br/>
                    <h2>Prescription Management</h2><br></br>

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

                    <button className="btn btn-success mr-1"><a href="/addPrescriptions"
                                                                style={{textDecoration: 'none', color: 'white'}}>Add New
                        Prescription</a></button>


                    {/*<button className="btn btn-success"><a href="/SupReport"*/}
                    {/*                                       style={{textDecoration: 'none', color: 'white'}}>Genarate*/}
                    {/*    Report</a></button>*/}
                    <br></br>


                    <br></br>
                    <table className="table table-success table-striped">
                        <thead>
                        <tr>
                            {/*<th scope="col">ID</th>*/}
                            <th scope="col"style={{width: '150px'}}>Image</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Province</th>
                            <th scope="col">District</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.length > 0 ? tableFilter.map((prescription, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td style={{width: '150px'}}>
                                        <img style={{ width: '50px', height: '50px' }} src={prescription.image} alt="Example image" />
                                        {/*<a href={prescription.image} target='_blank'>View</a>*/}

                                    </td>

                                    <td>{prescription.clientName}</td>
                                    <td>{prescription.province}</td>
                                    <td>{prescription.district}</td>
                                    <td>{prescription.email}</td>
                                    <td>{prescription.mobileNumber}</td>
                                    <td>{prescription.description}</td>

                                    <td>
                                        <a className="btn btn-warning" href={'/UpdatePrescription/:id'}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteHospital(prescription._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete

                                        </button>
                                    </td>
                                </tr>
                            ))
                            :
                            prescriptions.map((prescription, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td style={{width: '150px'}}>

                                        <img style={{ width: '50px', height: '50px' }} src={prescription.image} alt="Example image" />
                                        {/*<a href={prescription.image} target='_blank'>View</a>*/}
                                    </td>
                                    <td>{prescription.clientName}</td>
                                    <td>{prescription.province}</td>
                                    <td>{prescription.district}</td>
                                    <td>{prescription.email}</td>
                                    <td>{prescription.mobileNumber}</td>
                                    <td>{prescription.description}</td>

                                    <td>
                                        <a className="btn btn-warning" href={`/UpdatePrescription/${prescription._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteHospital(prescription._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete

                                        </button>
                                    </td>
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
