import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Reads from "./pages/reads";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/project" Component={Project} />
        <Route path="/resume" Component={Resume} />
        <Route path="/contact" Component={Contact} />
        <Route path="/reads" Component={Reads} />
      </Routes>
    </div>
  );
}

export default App;
