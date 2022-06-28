import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/imgs/logo.png";
import { SidebarMenuItems } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* Main Logo */}
        <div className="logo">
          <img src={logo} alt="" />
          <span>
            Dash <span>2.0</span>
          </span>
        </div>

        {/* Sidebar menu */}
        <div className="menu">
          {SidebarMenuItems.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={item.id}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <item.icon />
                <span>{item.name}</span>
              </div>
            );
          })}

          <div className="menuItem">
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
