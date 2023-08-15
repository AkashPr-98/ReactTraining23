import abc from './logo.svg';
import './App.css';
import Home from './Components/Home'

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

  const arr = ["Akash", "Vikas", "NandKishor"]

  const randNo = [20, 52, 85, 45, 32, 25, 55, 65]

  const myStyle = {
    color: 'green',
    fontSize: '80px'
  }

  const details = [
    {
      fname: "Harshal",
      age: 23
    },
    {
      fname: "Akash",
      age: 25
    },
    {
      fname: "Piyush",
      age: 22
    }
  ]

  return (
    <>
      <div className="App">
        <Home/>
        {/* <header className="App-header">
          <img src={abc} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 style={myStyle}>Hello World</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            We are learning React
          </a>
        </header> */}
        {arr.map(a => {
          return (
            <h1 className='text-danger'>{a}</h1>
          )
        })}
        {randNo.filter(c => c < 50).map(no => {
          return (
            <h2>Numbers less than 50 : {no}</h2>
          )
        })}
        {
          details.map(detail => {
            return(
              <div>
                <h4>Name: {detail.fname}</h4>
                <h4>Age: {detail.age}</h4>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
// export {Home}