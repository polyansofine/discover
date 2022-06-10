import { Link } from "react-router-dom";
import { scrollToTopSmooth } from "../../../../util";

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
      <path
        d="M4.16663 1.66665L7.49996 4.99998L4.16663 8.33331"
        stroke="currentColor"
        strokeWidth="2"
        stroklinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Menus() {
  const menuData = [
    {
      name: "Spend & Win",
      link: "/",
    },
    {
      name: "Destinations",
      link: "/",
    },
    {
      name: "Offers",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Gallery",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <div></div>
  );
}
