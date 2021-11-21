import React from "react";
import Repertoire from "./Repertoire";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/repertoire" element={<Repertoire />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
