import abc from './logo.svg';
import './App.css';
import Home from './Components/Home'
import ArrayMethods from './Components/ArrayMethods'
import Events from './Components/Events'
import UseStateDemo from './Components/UseStateDemo'

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

  const name = "Akash"
  const age = 25
  const profession = "Developer"

  const car = {
    brand: "Tata",
    model: "Nexon"
  }

  return (
    <>
      <div className="App">
        {/* <Home name={name} age={age} profession={profession}
        car={car}/> */}

        {/* <h1>Home1 Page</h1>
        <Home name="Akash" age={25} profession="Developer"
        car={car}/> */}
        {/* <h1>Home2 Page</h1>
        <Home name="Piyush" age={29} profession="Devops Engineer"/> */}
        {/* <ArrayMethods /> */}

        <Events/>
        <UseStateDemo/>

      </div>
    </>
  );
}

export default App;
// export {Home}