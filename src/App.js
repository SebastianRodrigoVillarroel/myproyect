import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Hola mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <PrimerComponente/>

        <SegundoComponente/>
        </a>
      </header>
    </div>
  );
}

export default App;
