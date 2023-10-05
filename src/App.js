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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './Components/Registration';

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
          <Routes>
              <Route path='/' element={<Registration/>}/>
          </Routes>
        </UseContextDemo>


      </div>
    </BrowserRouter>
  );
}

export default App;
// export {Home}

{/* <Route path='/' element={<Home/>}/>
<Route path='/array' element={<ArrayMethods/>}/>
<Route path='/events' element={<Events/>}/>
<Route path='/effectdemo' element={<UseEffectDemo/>}/>
<Route path='/statedemo' element={<UseStateDemo/>}/>
<Route path='/contact' element={<ContactUs/>}/> */}
{/* <Route path='/contact1' element={<ContUs/>}/> */}