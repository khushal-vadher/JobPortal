import './App.css';
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Personaldetail from "./Component/Resume/Personaldetail"
import Education from "./Component/Resume/Education"
import Experience from "./Component/Resume/Experience"
import Skill from "./Component/Resume/Skill"
import Resume from "./Component/Resume/Resume"
import Jobpost from "./Component/Jobpost"
import Joblist from "./Component/Joblist"
import Jobdetails from './Component/Jobdetails';
import EmployeeProfile from './Component/EmployeeProfile';
import Employeerprofile from "./Component/Employeerprofile"
import Contact from './Component/Contact/contact';
import PageNotFound from './Component/PageNotFound/index'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
function App() {
  const user = JSON.parse(localStorage.getItem("userbool"));
  const employee = JSON.parse(localStorage.getItem("employeebool"));
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobdetails" element={<Jobdetails />} />
          <Route path="/postjob" element={<Jobpost />} />
          <Route path='/joblist' exact element={<Joblist />} />
          <Route path='/personaldetail' element={<Personaldetail />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/employeerprofile' element={<Employeerprofile />} />
          <Route path="/employeeprofile" element={<EmployeeProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
