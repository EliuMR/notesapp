import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />

        <h1> Hola mi nombre es Eliú</h1>
        <p> Esta aplicación está siendo actualizada por github, y es creada con React</p>
        <p>
        <a 
          href="https://github.com/EliuMR/notesapp" 
          target="_blank" 
          rel="noopener noreferrer">
          (click aquí para ver el repositorio)
          </a>
        </p>  
    </header>
    </div>
  );
}

export default App;
