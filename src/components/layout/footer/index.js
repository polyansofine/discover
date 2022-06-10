import Info from "./Info";
import bgImage from "../../../assets/images/map.png";
import Menus from "./menus";

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
        <Info />
        <Menus />
      </div>
    </footer>
  );
}

export default Footer;
