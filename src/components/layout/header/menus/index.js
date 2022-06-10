import { Link } from "react-router-dom";
import cx from "classnames";
import { scrollToTopSmooth } from "../../../../util";

export default function Menus({ active = false, close = () => {} }) {
   const menuData = [
      { name: "HOME", link: "/" },
      { name: "OFFERS", link: "/vouchers" },
      { name: "DESTINATIONS", link: "/view-all-destination" },
      { name: "ABOUT ", link: "/aboutus" },
      { name: "CONTACT", link: "/contactus" },
   ];

   return (
      <>
         <span onClick={close} className={cx("menu-bg d-lg-none", { active })} />
         <div className={cx("menus", { active })}>
            <ul>
               {menuData.map(({ name, link }, index) => (
                  <li key={index}>
                     <Link to={link} onClick={scrollToTopSmooth}>
                        {name}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}
