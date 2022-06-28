import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDashboard.css";

const MainDashboard = () => {
  return (
    <div className="mainDashboard">
      <h1>Dashboard</h1>
      <div>
        <Cards />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default MainDashboard;
