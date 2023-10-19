import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login"
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
