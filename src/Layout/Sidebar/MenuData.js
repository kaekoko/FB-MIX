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
      {
        title: "Self Transactions",
        path: "/self/transaction",
        displayTitle: "Self Transactions",
        permission: [""],
      },
      {
        title: "Self Commission",
        path: "/self/commission",
        displayTitle: "Self Commission",
        permission: [""],
      },
    ],
  },
  {
    title: "Single Bets Log",
    displayTitle: "Single Bets Log",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      {
        title: "All Bets",
        path: "/bet/single/all",
        displayTitle: "All Bets",
        permission: [""],
      },
      {
        title: "Pending Bets",
        path: "/bet/single/pending",
        displayTitle: "Pending Bets",
        permission: [""],
      },
      {
        title: "Won Bets",
        path: "/bet/single/won",
        displayTitle: "Won Bets",
        permission: [""],
      },
      {
        title: "Lost Bets",
        path: "/bet/single/lost",
        displayTitle: "Lost Bets",
        permission: [""],
      },
      {
        title: "Refunded Bets",
        path: "/bet/single/refunded",
        displayTitle: "Refunded Bets",
        permission: [""],
      },
    ],
  },
  {
    title: "Multiple Bets Log",
    displayTitle: "Multiple Bets Log",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      {
        title: "All Bets",
        path: "/bet/multi/all",
        displayTitle: "All Bets",
        permission: [""],
      },
      {
        title: "Pending Bets",
        path: "/bet/multi/pending",
        displayTitle: "Pending Bets",
        permission: [""],
      },
      {
        title: "Won Bets",
        path: "/bet/multi/won",
        displayTitle: "Won Bets",
        permission: [""],
      },
      {
        title: "Lost Bets",
        path: "/bet/multi/lost",
        displayTitle: "Lost Bets",
        permission: [""],
      },
      {
        title: "Refunded Bets",
        path: "/bet/multi/refunded",
        displayTitle: "Refunded Bets",
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
  // {
  //   title: "Report",
  //   displayTitle: "Report",
  //   icon: <RiListUnordered />,
  //   type: "sub",
  //   children: [
  //     {
  //       title: "User W/L Detail",
  //       path: "/report",
  //       displayTitle: "winlose/detail",
  //       permission: [""],
  //     },
  //   ],
  // },
];

export default MENUITEMS;
