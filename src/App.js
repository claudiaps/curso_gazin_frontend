import logo from './logo.svg';
import './App.css';
import NewFile from './NewFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewFile />
        <p>
          Alterando para a branch feature 1
        </p>
        <span>
          Alterando para a branch feature 2
        </span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
