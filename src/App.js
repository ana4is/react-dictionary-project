import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <header className="App-header">
          <Dictionary />
        </header>
        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://github.com/ana4is/react-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Anaïs FLECHIER
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
