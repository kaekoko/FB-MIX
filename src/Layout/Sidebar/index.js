import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LogoWrapper from "@/Components/CommonComponent/LogoWrapper";
import MENUITEMS from "./MenuData";
import AccountContext from "@/Helper/AccountContext";
import SettingContext from "@/Helper/SettingContext";

const MenuList = dynamic(() => import("./MenuList"), {
  ssr: false,
});
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState([]);
  const { sidebarOpen, setSidebarOpen } = useContext(SettingContext);

  let storePermission = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER)
    storePermission =
      localStorage.getItem("account") &&
      JSON.parse(localStorage.getItem("account"));
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Modify the the sidebar as per permissions
  const filterSidebar = (sidebarItems) => {
    return sidebarItems.reduce((filteredItems, item) => {
      const clonedItem = { ...item };
      filteredItems.push(clonedItem);
      return filteredItems;
    }, []);
  };
  const modifiedSidebar = filterSidebar(MENUITEMS);

  return (
    <div className={`sidebar-wrapper ${sidebarOpen ? "close_icon" : ""}`}>
      <div id="sidebarEffect" />
      <div className={`${mounted ? "skeleton-loader" : ""}`}>
        <LogoWrapper setSidebarOpen={setSidebarOpen} />
        <nav className="sidebar-main">
          <div id="sidebar-menu">
            <ul className="sidebar-links" id="simple-bar">
              {modifiedSidebar && (
                <MenuList
                  menu={modifiedSidebar}
                  level={0}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
