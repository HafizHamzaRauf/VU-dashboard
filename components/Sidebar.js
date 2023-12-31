import React from "react";
import { sidebaricons, belowsidebaricons } from "./data";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul className="sidebar-list">
        {sidebaricons.map((a) => (
          <SidebarItem bar={a.bar} icon={a.icon} name={a.name}></SidebarItem>
        ))}
      </ul>
      <div className="additional">
        <h2>ADDITIONAL</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579Z"
            fill="#92929D"
          />
        </svg>
      </div>
      {belowsidebaricons.map((a) => (
        <SidebarItem bar={a.bar} icon={a.icon} name={a.name}></SidebarItem>
      ))}
    </section>
  );
};

export default Sidebar;
