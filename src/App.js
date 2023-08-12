import Header from "./components/scripts/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Header} />
      </Routes>
    </div>
  );
}

export default App;
