import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {addHospital, deleteHospitalByID, getAllHospitals} from "../services/hospitalService";
import {deleteProjectByID} from "../services/projectService";
import AdminDashbroad from "./AdminDashbroad";
import { Link } from "react-router-dom";


export default function AllProject() {

    const navigate = useNavigate();

    const [project, sethProject] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = project.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            sethProject([...project])
        }
    }

    useEffect(() => {


        getProjects();
    }, []);

    function getProjects() {

        axios.get("http://localhost:8070/project/").then((res) => {

            sethProject(res.data);

        }).catch((err) => {

            alert(err.message);
        })
    }
    function deleteProject(id) {


        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteProjectByID(id);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");

                getProjects()
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
                    <h2>Projects</h2><br></br>

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

                    <button className="btn btn-success mr-1"><a href="/addProjects"
                                                                style={{textDecoration: 'none', color: 'white'}}>Add New
                        Project</a></button>


                    {/*<button className="btn btn-success"><a href="/SupReport"*/}
                    {/*                                       style={{textDecoration: 'none', color: 'white'}}>Genarate*/}
                    {/*    Report</a></button>*/}
                    {" "}
                    <Link to = '/GenProjectRepo' className="btn btn-success">
                       Generate Report
                    </Link>


                    <br></br>


                    <br></br>
                    <table id="report-table" className="table table-success table-striped">
                        <thead>
                        <tr>
                            {/*<th scope="col">ID</th>*/}
                            <th scope="col">Project Name</th>
                            <th scope="col">Project Organization</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Location</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.length > 0 ? tableFilter.map((project, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td>{project.projectName}</td>
                                    <td>{project.projectOrganisation}</td>
                                    <td>{project.projectStartDate}</td>
                                    <td>{project.projectEndDate}</td>
                                    <td>{project.projectLocation}</td>
                                    <td>{project.projectDescription}</td>

                                    <td>
                                        <a className="btn btn-warning" href={'/UpdateProject/:id'}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteProject(project._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete

                                        </button>
                                    </td>
                                </tr>
                            ))
                            :
                            project.map((project, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td>{project.projectName}</td>
                                    <td>{project.projectOrganisation}</td>
                                    <td>{project.projectStartDate}</td>
                                    <td>{project.projectEndDate}</td>
                                    <td>{project.projectLocation}</td>
                                    <td>{project.projectDescription}</td>

                                    <td>
                                        <a className="btn btn-warning" href={`/UpdateProject/${project._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteProject(project._id)}>
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
