import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/project" Component={Project} />
      </Routes>
    </div>
  );
}

export default App;
