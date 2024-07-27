/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

const iconClasses = `h-6 w-6`;
const iconLargeClasses = `h-10 w-10`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    iconlarge: <Squares2X2Icon className={iconLargeClasses} />,
    name: "Dashboard",
    desc: 'Home'
  },
  {
    path: "/app/Specialities", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component    
    iconlarge: <InboxArrowDownIcon className={iconLargeClasses} />, // icon component
    name: "Specialities", // name that appear in Sidebar
    desc: "Create new or Modify exisiting Speciality",
  },
  {
    path: "/app/campaigns", // url
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    iconlarge: <CurrencyDollarIcon className={iconLargeClasses} />, // icon component
    name: "Campaigns", // name that appear in Sidebar
    desc: "Create new or Modify exisiting Campaign",
  },
  {
    path: "/app/settings", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    iconlarge: <Cog6ToothIcon className={`${iconLargeClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    desc: "Modify settings for admin panel",
    submenu: [
      {
        path: "/app/settings-profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
      {
        path: "/app/settings-billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Billing",
      },
      {
        path: "/app/settings-team", // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: "Team Members", // name that appear in Sidebar
      },
    ],
  },
];

export default routes;
