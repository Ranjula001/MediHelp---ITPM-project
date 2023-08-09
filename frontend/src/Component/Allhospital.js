import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";


export default function Allhospital() {

    const navigate = useNavigate();

    const [hospitals, sethospital] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = hospitals.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            sethospital([...hospitals])
        }
    }

    useEffect(() => {
        gethospital();
    }, []);

    function gethospital() {

        axios.get("http://localhost:8070/Hospital/").then((res) => {

            sethospital(res.data);

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
                await deleteHospitalByID(userId);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
                gethospital()


            }
        });

    }


    return (


        <div className="row">

            <div className="col-md-3" >

                <AdminDashbroad></AdminDashbroad>
            </div>



            <div className="col-md-9" >
                <div className="container"><br/>
                    <h2>Hospital Management</h2><br></br>

                    <div className="input-group rounded">

                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" value={value}
                               onChange={filterData}
                        /> {" "}      {" "} 

                        <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
             </span>
                    </div>

                    <br></br>

                    <button className="btn btn-success mr-1"><a href="/add"
                                                                style={{textDecoration: 'none', color: 'white'}}>Add New
                        Hospital</a></button> {'    '}


                    <button className="btn btn-success"><a href="/SupReport"
                                                           style={{textDecoration: 'none', color: 'white'}}>Genarate
                      Report</a></button>
                    <br></br>


                    <br></br>
                    <table className="table table-success table-striped">
                        <thead>
                        <tr>
                            {/*<th scope="col">ID</th>*/}
                            <th scope="col"style={{width: '150px'}}>Image</th>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Fax</th>
                            <th scope="col">Hospital Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.length > 0 ? tableFilter.map((Hospital, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}

                                    <td style={{width: '150px'}}>
                                        <img style={{ width: '50px', height: '50px' }} src={Hospital.image} alt="Example image" />
                                        {/*<a href={Hospital.image} target='_blank'>View</a>*/}

                                    </td>


                                    <td>{Hospital.hospitalName}</td>
                                    <td>{Hospital.mobileNumber}</td>
                                    <td>{Hospital.email}</td>
                                    <td>{Hospital.fax}</td>
                                    <td>{Hospital.type}</td>
                                    <td>{Hospital.description}</td>

                                    <td>
                                        <a className="btn btn-warning" href={'/Update/:id'}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteHospital(Hospital._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete

                                        </button>
                                    </td>
                                </tr>
                            ))
                            :
                            hospitals.map((Hospital, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}


                                    <td style={{width: '150px'}}>

                                                 <img style={{ width: '50px', height: '50px' }} src={Hospital.image} alt="Example image" />
                                                  {/*<a href={Hospital.image} target='_blank'>View</a>*/}
                                                 </td>


                                    <td>{Hospital.hospitalName}</td>
                                    <td>{Hospital.mobileNumber}</td>
                                    <td>{Hospital.email}</td>
                                    <td>{Hospital.fax}</td>
                                    <td>{Hospital.type}</td>
                                    <td>{Hospital.description}</td>

                                    <td>
                                        <a className="btn btn-warning" href={`/update/${Hospital._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteHospital(Hospital._id)}>
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
