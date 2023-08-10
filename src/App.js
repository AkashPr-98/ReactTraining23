import abc from './logo.svg';
import './App.css';

function App() {

  const arr = ["Akash", "Vikas", "NandKishor"]

  const myStyle = {
    color: 'green',
    fontSize: '80px'
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
      <h1></h1>
    </>
  );
}

export default App;
