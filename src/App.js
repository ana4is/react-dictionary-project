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
          <small>This was coded by Anaïs FLECHIER</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
