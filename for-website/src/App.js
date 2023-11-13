import logo from './logo.svg';
import './App.css';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <Education/>
    </div>
  );
}

export default App;
