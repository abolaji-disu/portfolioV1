import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
