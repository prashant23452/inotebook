import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About  />} />
          <Route path="/" element={<Home/> }/>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
