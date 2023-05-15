
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import Error from './Pages/Error';
import AboutUs from './Pages/AboutUs';
import AdminInterface from './Pages/AdminInterface';
import Users from './Pages/Users';
import Profile from './Pages/Profile';
import { useState } from 'react';

function App() {
  const [isAuth, setAuth] = useState(true)
  return (
    <div className="App">
    <NavBar/>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/*" element={<Error/>} />
     <Route path="/AboutUs" element ={<AboutUs/>} />
     {isAuth && <Route path="/AdminInterface" element={<AdminInterface/>}/> }
     <Route path="/Users" element={<Users/>} />
     <Route path="/Profile/:id" element={<Profile/>} />
    </Routes>
    </div>
  );
}

export default App;
