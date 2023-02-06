import logo from './logo.svg';
//import './App.css';
import {Routes,Route} from 'react-router-dom';
import Index from './Pages/Index';
import About from './Pages/About';

import Login from './Pages/Login';
import Login_student from './Pages/Login_student';
import Login_parent from './Pages/Login_parent';
import Login_teacher from './Pages/Login_teacher';
import Login_management from './Pages/Login_management';
import Login_official from './Pages/Login_official';

import Test_students from './Pages/Test_students';
import Test_parents from './Pages/Test_parents';
import Test_teachers from './Pages/Test_teachers';
import Test_management from './Pages/Test_management';
import Test_official from './Pages/Test_official';


function App() {
  return (
      <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>

      <Route path="/Login_student" element={<Login_student/>}></Route>
      <Route path="/Login_parent" element={<Login_parent/>}></Route>
      <Route path="/Login_teacher" element={<Login_teacher/>}></Route>
      <Route path="/Login_management" element={<Login_management/>}></Route>
      <Route path="/Login_official" element={<Login_official/>}></Route>

      <Route path="/Test_students" element={<Test_students/>}></Route>
      <Route path="/Test_parents" element={<Test_parents/>}></Route>
      <Route path="/Test_teachers" element={<Test_teachers/>}></Route>
      <Route path="/Test_management" element={<Test_management/>}></Route>
      <Route path="/Test_official" element={<Test_official/>}></Route>


    </Routes> 

  );
}

export default App;
