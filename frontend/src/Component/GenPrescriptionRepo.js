import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Hospitalreport({search,setSearch}){

    const [prescriptions,setprescription] = useState([]);


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

    function getprescription()
    {
       
  
      axios.get("http://localhost:8070/prescription/").then((res) => {
  
  
      setprescription(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getprescription();
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
                            <th scope="col">Client Name</th>
                            <th scope="col">Province</th>
                            <th scope="col">District</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Description</th>
                      
                      
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((prescription,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          
                                    <td>{prescription.clientName}</td>
                                    <td>{prescription.province}</td>
                                    <td>{prescription.district}</td>
                                    <td>{prescription.email}</td>
                                    <td>{prescription.mobileNumber}</td>
                                    <td>{prescription.description}</td>
                          
                          
                      </tr>
                  ))
                :
                prescriptions.map((prescription,id) => (
                  <tr key={id}>
                      <td>{id}</td>

                                    <td>{prescription.clientName}</td>
                                    <td>{prescription.province}</td>
                                    <td>{prescription.district}</td>
                                    <td>{prescription.email}</td>
                                    <td>{prescription.mobileNumber}</td>
                                    <td>{prescription.description}</td>
                      
                     
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

 )
};