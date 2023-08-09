import './App.css';

//import AdminDashbroad from "./Component/AdminDashbroad"

import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GenRepo from "./Component/GenHospitalRepo";
import Addhospital from "./Component/Addhospital";
import AllProject from "./Component/allProject";
import AddProject from "./Component/AddProject";
import AdminHome from './Component/AdminHome';


import EditProject from "./Component/EditProjects";

import AllDonations from "./Component/AllDonations";

import Login from "./Component/login";
import Signup from "./Component/signUp";

import AllPrescriptions from "./Component/AllPrescriptions";
import AddPrescription from "./Component/AddPrescription";
import EditPrescription from "./Component/EditPrescription";


import Home from './Component/Home';


import GenProjRepo from "./Component/GenProjectRepo";

import GenPrec from "./Component/GenPrescriptionRepo"; 









function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>

                <Route path='/adminHome' element={<AdminHome/>}/>

                


                <Route path="/all" element={<Allhospital/>}/>
                <Route path="/Update/:id" element={<EditHospital/>}/>
                <Route path="/SupReport" element={<GenRepo/>}/>
                <Route path="/add" element={<Addhospital/>}/>


                <Route path="/allPrescriptions" element={<AllPrescriptions/>}/>
                <Route path="/addPrescriptions" element={<AddPrescription/>}/>
                <Route path="/UpdatePrescription/:id" element={<EditPrescription/>}/>
                <Route path="/PresRport" element={<GenPrec/>}/>

                <Route path="/addPrescriptions" element={<AddPrescription/>}/>
                <Route path="/UpdatePrescription/:id" element={<EditPrescription/>}/>
                <Route path="/myPrescriptions" element={<AllPrescriptions/>}/>


                <Route path="/signUp" element={<Signup/>}/>
               

                <Route path="/allProjects" element={<AllProject/>}/>
                <Route path="/addProjects" element={<AddProject/>}/>

                <Route path="/GenProjectRepo" element={<GenProjRepo/>}/>
                
                


                <Route path="/UpdateProject/:id" element={<EditProject/>}/>
                
                <Route path="/allDonations" element={<AllDonations/>}/>
            </Routes>
        </Router>
    );
}

export default App;
