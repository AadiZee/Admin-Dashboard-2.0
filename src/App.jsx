import React from "react";
import "./App.css";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
};

export default App;
