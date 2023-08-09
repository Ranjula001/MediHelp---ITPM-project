import './App.css';


import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GenRepo from "./Component/GenHospitalRepo";
import Addhospital from "./Component/Addhospital";
import AllProject from "./Component/allProject";
import AddProject from "./Component/AddProject";
import EditProject from "./Component/EditProjects";
import Login from "./Component/login";
import Signup from "./Component/signUp";
import AddDoanation from "./Component/AddDonation";
import AllDonations from "./Component/AllDonations";
import Home from "./Component/Home";















function App() {
    return (
        <Router>
            <Routes>

                
                
                
                
                
                <Route path="/allProjects" element={<AllProject/>}/>
                <Route path="/addProjects" element={<AddProject/>}/>
                
                
                
                
                
                
                <Route path="/UpdateProject/:id" element={<EditProject/>}/>
                
                <Route path="/addDonation/:id" element={<AddDoanation/>}/>
                <Route path="/myDonations" element={<AllDonations/>}/>
                
                

          
                <Route path="/" element={<Login/>}/>
                <Route path="/signUp" element={<Signup/>}/>

                <Route path="/all" element={<Allhospital/>}/>
                <Route path="/Update/:id" element={<EditHospital/>}/>
                <Route path="/SupReport" element={<GenRepo/>}/>
                <Route path="/add" element={<Addhospital/>}/>

                <Route path="/home" element={<Home/>}/>

              
               

            </Routes>
        </Router>
    );
}

export default App;
