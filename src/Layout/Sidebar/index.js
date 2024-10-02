import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LogoWrapper from "@/Components/CommonComponent/LogoWrapper";
import MENUITEMS from "./MenuData";
import AccountContext from "@/Helper/AccountContext";
import SettingContext from "@/Helper/SettingContext";
import { usePathname } from "next/navigation";

const MenuList = dynamic(() => import("./MenuList"), {
  ssr: false,
});
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState([]);
  const { sidebarOpen, setSidebarOpen } = useContext(SettingContext);
  const pathname = usePathname();

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

  useEffect(() => {
    pathname && setSidebarOpen((prev) => !prev);
    console.log(pathname, "render");
  }, [pathname]);

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
                  level={0}
                  menu={modifiedSidebar}
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
