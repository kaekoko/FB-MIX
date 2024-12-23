import {
  RiContactsLine,
  RiDashboard3Line,
  RiFileHistoryLine,
  RiGroupLine,
  RiGuideLine,
  RiHistoryLine,
  RiLineChartLine,
  RiListUnordered,
  RiSearch2Line,
  RiServiceFill,
  RiSlideshow2Line,
} from "react-icons/ri";

const MENUITEMS = [
  {
    title: "Dashboard",
    displayTitle: "Dashboard",
    icon: <RiDashboard3Line />,
    path: "/dashboard",
    type: "link",
  },
  {
    title: "Betslip Tracker",
    displayTitle: "Betslip Tracker",
    icon: <RiSearch2Line />,
    path: "/betsliptracker",
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
    icon: <RiHistoryLine />,
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
    icon: <RiFileHistoryLine />,
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
      {
        title: "Bonus Bets",
        path: "/bet/multi/bonus",
        displayTitle: "Bonus Bets",
        permission: [""],
      },
    ],
  },
  {
    title: "Member Management",
    displayTitle: "Member Management",
    icon: <RiGroupLine />,
    type: "sub",
    children: [
      {
        title: "Agent",
        path: "/agent",
        displayTitle: "Agent",
        permission: [""],
      },
      {
        title: "Staff",
        path: "/staff",
        displayTitle: "Staff",
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
    title: "Agent Report",
    displayTitle: "Agent Report",
    icon: <RiLineChartLine />,
    type: "sub",
    children: [
      {
        title: "Agent Report",
        path: "/report/agent/main",
        displayTitle: "Agent Report",
        permission: [""],
      },
      {
        title: "Daily Agent Report",
        path: "/report/daily/agent",
        displayTitle: "Daily Agent Report",
        permission: [""],
      },
      {
        title: "Today Agent Report",
        path: "/report/agent/current",
        displayTitle: "Today Agent Report",
        permission: [""],
      },
    ],
  },
  {
    title: "User Report",
    displayTitle: "User Report",
    icon: <RiLineChartLine />,
    type: "sub",
    children: [
      {
        title: "User Report",
        path: "/report/user/main",
        displayTitle: "User Report",
      },
      {
        title: "Daily User Report",
        path: "/report/daily/user",
        displayTitle: "Daily User Report",
      },
    ],
  },
  {
    title: "Transaction History",
    displayTitle: "Transaction History",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      {
        title: "Agent Transaction",
        path: "/transaction/agent",
        displayTitle: "Agent Transaction",
        permission: [""],
      },
      {
        title: "User Transaction",
        path: "/transaction/user",
        displayTitle: "User Transaction",
        permission: [""],
      },
    ],
  },
  {
    title: "Slider",
    displayTitle: "Slider",
    icon: <RiSlideshow2Line />,
    path: "/slider",
    type: "link",
  },
  {
    title: "Guide",
    displayTitle: "Guide",
    icon: <RiGuideLine />,
    path: "/guide",
    type: "link",
  },
  {
    title: "Customer support",
    displayTitle: "Customer Support",
    icon: <RiServiceFill />,
    path: "/support",
    type: "link",
  },
];

export default MENUITEMS;
