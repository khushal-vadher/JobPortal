import './App.css';
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import{Route,Routes,Navigate,BrowserRouter} from 'react-router-dom';
function App() {
  const user=JSON.parse(localStorage.getItem("userbool"));
  const employee=JSON.parse(localStorage.getItem("employeebool"));
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
      
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
