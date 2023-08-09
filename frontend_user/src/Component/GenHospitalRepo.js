import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Hospitalreport({search,setSearch}){

    const [hospitals,sethospital] = useState([]);


     const[value , setValue] = useState('');
     const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


/*  const [hospital, setstaffde] = useState([
    {
        fristname:"",
        lastname:"",
        email:"",
        nationality:"",
        phone:"",
        tnds:""
    },
  ]);
*/
  useEffect(() => {

    function gethospital()
    {
       
  
      axios.get("http://localhost:8070/hospital/").then((res) => {
  
  
         sethospital(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    gethospital();
    },[]); 

 /* const renderClass = (Hospital, id) => {
    return (
      <tr key={id}>
       
        <td>{Hospital.fristname}</td>
        <td>{Hospital.lastname}</td>
        <td>{Hospital.email}</td> 
        <td>{Hospital.nationality}</td>
        <td>{Hospital.phone}</td>
        <td>{Hospital.tnds}</td>
      </tr>
    );
  };*/

  return (
    <div className="newstaff">
    <div className="marginaling">
    <button onClick={handlePrint}>Download PDF</button>
    </div>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   
  <div ref={componentRef}>
        <h2 className="aling topic-report">Annual Report</h2>

        <table className="table table-success table-striped">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
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
              {value.length > 0 ? tableFilter.map((Hospital,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          
                          <td>{Hospital.hospitalName}</td>
                          <td>{Hospital.mobileNumber}</td>
                          <td>{Hospital.email}</td>
                          <td>{Hospital.fax}</td>
                          <td>{Hospital.type}</td>
                          <td>{Hospital.description}</td>
                          
                          
                      </tr>
                  ))
                :
                hospitals.map((Hospital,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{Hospital.hospitalName}</td>
                      <td>{Hospital.mobileNumber}</td>
                      <td>{Hospital.email}</td>
                      <td>{Hospital.fax}</td>
                      <td>{Hospital.type}</td>
                      <td>{Hospital.description}</td>
                      
                     
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

  )
};
