//Sidebar icon imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";

// For sidemenu items
export const SidebarMenuItems = [
  {
    id: 1,
    icon: UilEstate,
    name: "Dashboard",
  },
  {
    id: 2,
    icon: UilClipboardAlt,
    name: "Orders",
  },
  {
    id: 3,
    icon: UilUsersAlt,
    name: "Customers",
  },
  {
    id: 4,
    icon: UilPackage,
    name: "Products",
  },
  {
    id: 5,
    icon: UilChart,
    name: "Analytics",
  },
];

// For stats cards
export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// For updates Card
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch battery",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bonds",
    noti: "has received Samsung charging gadget",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Tony Stark",
    noti: "has ordered Apple smart watch, Samsung Gear",
    time: "2 hours ago",
  },
];
