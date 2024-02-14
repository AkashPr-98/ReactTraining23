// import abc from './logo.svg';
import './App.css';
// import Home from './Components/Home'
// import ArrayMethods from './Components/ArrayMethods'
// import Events from './Components/Events'
// import UseStateDemo from './Components/UseStateDemo'
// import UseEffectDemo from './Components/UseEffectDemo';
import UseContextDemo from './Components/UseContextDemo';
import Navbar from './Components/Navbar';
// import { ContactUs } from './Components/ArrayMethods';
// import { ContUs } from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Registration from './Components/Registration';
import Users from './Components/Users';
import axios from 'axios';
import UpdateForm from './Components/UpdateForm';
import ContextForForm from './Components/ContextForForm';
import Login from './Components/Login';
import UserDetails from './Components/UserDetails';
import { useEffect, useState } from 'react';

// function Home() {
//   return (
//     <>
//       <div>
//         <h1>This is Home Page</h1>
//         <h1>And I will call this component</h1>
//       </div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </>
//   )
// }

function App() {

  // const name = "Akash"
  // const age = 25
  // const profession = "Developer"

  // const car = {
  //   brand: "Tata",
  //   model: "Nexon"
  // }

  axios.defaults.baseURL = 'http://localhost:8000/user'
  // axios.defaults.withCredentials = true

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home name={name} age={age} profession={profession}
        car={car}/> */}
        {/* <Home name="Akash" age={25} profession="Developer"
        car={car}/> */}
        {/* <h1>Home2 Page</h1>
        <Home name="Piyush" age={29} profession="Devops Engineer"/> */}
        {/* <ArrayMethods /> */}

        {/* <Events/>
        <UseStateDemo/> */}
        {/* <UseEffectDemo/> */}

        <Navbar />

        <UseContextDemo>
          <ContextForForm>
            <Routes>
              <Route path='/' element={<Registration />} />
              <Route path='/users' element={<Users />} />
              <Route path='/update' element={<UpdateForm />} />
              <Route path='/login' element={<Login onLogin={handleLogin} />} />
              <Route path='/user' element={<UserDetails />} />
            </Routes>
          </ContextForForm>
        </UseContextDemo>


      </div>
    </BrowserRouter>
  );
}

export default App