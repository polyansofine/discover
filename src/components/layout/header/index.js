import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../../assets/images/logo2.png";
import cx from "classnames";
import Menus from "./menus";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../actions/user-action-type";
import { useHistory } from "react-router";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import $ from "jquery";
import { scrollToTopSmooth } from "../../../util";
import { Button } from "reactstrap";
import { LineArrow } from "../../SvgComponents";

function MenuIcon() {
  return (
    <svg
      fill="#fff"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="menu"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
    </svg>
  );
}

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isEnglish, defaultLanguage] = useState(true);
  const storeData = useSelector((store) => store);

  const handleScroll = () => {
    setIsSticky(() => (window.scrollY > 70 ? true : false));
  };
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };

  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const onLogOut = () => {
    dispatch(logOut());
    history.push("/");
  };

  const myAccountPage = () => {
    history.push("/settings");
  }

  useEffect(() => {
    const lang = localStorage.getItem("user_language");
    if (lang == null) {
      localStorage.setItem("user_language", "en");
      setLanguage("en");
      defaultLanguage(true);
      $("html").attr("dir", "ltr");
      $("html").attr("lang", "en");
    }
    if (lang == "en") {
      setLanguage("en");
      defaultLanguage(true);
      $("html").attr("lang", "en");
      $("html").attr("dir", "ltr");
    }
    if (lang == "ae") {
      setLanguage("ar");
      defaultLanguage(false);
      $("html").attr("lang", "ar");
      $("html").attr("dir", "rtl");
    }
  }, []);

  const updateLang = async () => {
    const lang = await localStorage.getItem("user_language");
    if (lang == null) {
      await localStorage.setItem("user_language", "en");
      setLanguage("en");
      defaultLanguage(true);
      $("html").attr("lang", "en");
      $("html").attr("dir", "ltr");
    }
    if (lang == "en") {
      await localStorage.setItem("user_language", "ae");
      setLanguage("ar");
      defaultLanguage(false);
      $("html").attr("lang", "ar");
      $("html").attr("dir", "rtl");
    }
    if (lang == "ae") {
      await localStorage.setItem("user_language", "en");
      setLanguage("en");
      defaultLanguage(true);
      $("html").attr("lang", "en");
      $("html").attr("dir", "ltr");
    }
  };

  return (
    <header id="header" className={cx({ isSticky })}>
      <Container fluid="xl">
        <div className="logo">
          <Link to="/" onClick={scrollToTopSmooth}>
            <img src={logo} height="100px" alt="logo" />
          </Link>
        </div>
        <Menus active={menu} close={() => setMenu(false)} />
        <div className="links" style={{display: 'flex'}} >
          {storeData.user.token ? null : <Link to="/register" onClick={scrollToTopSmooth} style={{marginTop: 5}} >Register</Link>}
          {/* {storeData.user.token ? null : <Button color="" className="arrow" onClick={() => history.push(`/register`)}>
            <span>
              Register
              <LineArrow />
            </span>
          </Button>} */}
          {storeData.user.token ? (
            // <Link to="/settings" onClick={scrollToTopSmooth} className="btn btn-primary">
            //   My Account
            // </Link>
            <Button color="primary" style={{ width: 140 }} className="arrow" onClick={() => history.push(`/settings`)}>
              <span>
                My Account
                <LineArrow />
              </span>
            </Button>
          ) : (
            // <Link to="/login" onClick={scrollToTopSmooth} className="btn btn-primary">
            //   Sign in
            // </Link>
            <Button color="primary" style={{ width: 100 }} className="arrow" onClick={() => history.push(`/login`)}>
              <span>
                Sign in
                <LineArrow />
              </span>
            </Button>
          )}

          <button onClick={() => setMenu(true)} className="menu-btn d-lg-none">
            <MenuIcon />
          </button>
        </div>
      </Container>
    </header>
  );
}
export default Header;
