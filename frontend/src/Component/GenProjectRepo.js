import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios";
import HomeButton from './Home';
import './DownPDF.css'
import './GoBack.css'
import { Link } from 'react-router-dom';


export default function GenProjRepo({search,setSearch}){

    const [projects,setproject] = useState([]);


     const[value , setValue] = useState('');
     const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {

    function getproject()
    {
       
  
      axios.get("http://localhost:8070/project/").then((res) => {
  
  
         setproject(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getproject();
    },[]); 

  return (

    <div className="newstaff">
    <div className="marginaling">
      <br/>
    <Link to = "/allProjects" className="GoBack">Go back</Link>
    <button className="DownPDF" onClick={handlePrint}>Download PDF</button>
    </div>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   <br/>
   <br/>
  <div ref={componentRef}>
        <h2 className="aling topic-report">Annual Report</h2>
        <br/>
        <table className="table table-success table-striped">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                      <th scope="col">Project Name</th>
                      <th scope="col">Organization</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">End Date</th>
                      <th scope="col">Location</th>
                      <th scope="col">Description</th>
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((Project,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          
                          <td>{Project.projectName}</td>
                          <td>{Project.projectOrganisation}</td>
                          <td>{Project.projectStartDate}</td>
                          <td>{Project.projectEndDate}</td>
                          <td>{Project.projectLocation}</td>
                          <td>{Project.projectDescription}</td>
                          
                          
                      </tr>
                  ))
                :
                projects.map((Project,id) => (
                  <tr key={id}>
                      <td>{id+1}</td>
                      <td>{Project.projectName}</td>
                        <td>{Project.projectOrganisation}</td>
                        <td>{Project.projectStartDate}</td>
                        <td>{Project.projectEndDate}</td>
                        <td>{Project.projectLocation}</td>
                        <td>{Project.projectDescription}</td>
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

 )
};