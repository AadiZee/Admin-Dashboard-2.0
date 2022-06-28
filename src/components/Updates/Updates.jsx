import React from "react";
import { UpdatesData } from "../../Data/Data";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="updates">
      {UpdatesData.map((data, index) => {
        return (
          <div className="update">
            <img src={data.img} alt={data.name} />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{data.name}</span>
                <span> {data.noti}</span>
              </div>
              <span>{data.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
