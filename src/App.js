import HomePage from "./components/homepage";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
    </Router>
  );
}

export default App;
