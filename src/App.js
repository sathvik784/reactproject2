import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Usertext from './components/usertext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter />
        <Usertext />

      </header>
    </div>
  );
}

export default App;
