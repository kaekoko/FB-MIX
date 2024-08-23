import { RiContactsLine, RiHomeLine, RiListUnordered } from "react-icons/ri";

const MENUITEMS = [
  {
    title: "Dashboard",
    displayTitle: "Dashboard",
    icon: <RiHomeLine />,
    path: "/dashboard",
    type: "link",
  },
  {
    title: "Account",
    displayTitle: "Account",
    icon: <RiContactsLine />,
    type: "sub",
    children: [
      {
        title: "My Profile",
        path: "/profile",
        displayTitle: "My Profile",
        permission: [""],
      },
      {
        title: "Change Password",
        path: "/changepassword",
        displayTitle: "Change Password",
        permission: [""],
      },
    ],
  },
  {
    title: "Active Bet Slips",
    displayTitle: "Active Bet Slips",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      {
        title: "All Bet Slips",
        path: "/allBetSlips",
        displayTitle: "All Bet Slips",
        permission: [""],
      },
    ],
  },
  {
    title: "Member Management",
    displayTitle: "Member Management",
    icon: <RiContactsLine />,
    type: "sub",
    children: [
      {
        title: "Agent",
        path: "/agent",
        displayTitle: "Agent",
        permission: [""],
      },
      {
        title: "User",
        path: "/user",
        displayTitle: "User",
        permission: [""],
      },
    ],
  },
  {
    title: "Report",
    displayTitle: "Report",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      {
        title: "User W/L Detail",
        path: "/report",
        displayTitle: "winlose/detail",
        permission: [""],
      },
    ],
  },
];

export default MENUITEMS;
