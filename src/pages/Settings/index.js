import React, { useState, useEffect } from "react";
import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Input, Button } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LineArrow } from "../../components/SvgComponents";
import { logOut } from "../../actions/user-action-type";
import ProfileIcon from "../../assets/images/icons/Profile.svg";
import ReceiptIcon from "../../assets/images/icons/Receipt.svg";
import HelpIcon from "../../assets/images/icons/Help.svg";
import CardIcon from "../../assets/images/icons/Card.svg";
import ChangePasswordIcon from "../../assets/images/icons/change-password.svg";
import { useCookies } from 'react-cookie';

function UploadContent() {
  const btns = [{ name: "About", active: "true" }, { name: "Terms" }, { name: "Faq" }];
  return (
    <div className="UploadContent">
      <div className="tab-package-btn w-100">
        <div className="wrapper">
          {btns.map(({ name, active = false, index }) => (
            <button key={index} className={cx({ active: active })}>{name}</button>
          ))}
        </div>
      </div>
      <p>
        Get ready for an exciting off-road experience as you discover the most spectacular vistas
        Mleiha has to offer. Your journey will last approximately 6 hours as you take in views from
        two different peaks, visit ancient sites, stop for picture-perfect photos of the stunning
        landscape and conclude your adventure in the relaxing setting of our Sunset Lounge.
      </p>
    </div>
  );
}

function Settings() {
  const t = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [collapseToggle, setCollapseToggle] = useState(false);
  document.title = "My Acccount - DiscoverShurooq";
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const onLogOut = () => {
    dispatch(logOut());
    removeCookie("token");
    history.push("/login");
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (

    <div>
      <UploadBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Settings" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard">
          <Row>
            <Col md={3}>
              {/* <UploadContent /> */}
            </Col>
            <Col md={6}>
              <div className="settings">
                <div className="">
                  <div
                    className="settings_row"
                    onClick={() => history.push({ pathname: "/edit-profile" })}
                  >
                    <div className="settings_icon" id="help_icon">
                      <img src={ProfileIcon} alt="Profile icon" />
                    </div>
                    <div className="settings_text">
                      <div className="settings_toptext">
                        {t("settings.account_settings")}
                      </div>
                      <div className="settings_bottomtext">
                        {t("settings.account_settings_description")}
                      </div>
                    </div>
                  </div>
                  <div className="settings_row">
                    {" "}
                    {/*onClick={() => history.push({ pathname: "/invoics" })} */}
                    <div className="settings_icon" id="help_icon">
                      <img src={ReceiptIcon} alt="Order History icon" />
                    </div>
                    <div
                      className="settings_text"
                      onClick={() => history.push({ pathname: "/order-history" })}
                    >
                      <div className="settings_toptext">
                        {t("settings.order_history")}
                      </div>
                      <div className="settings_bottomtext">
                        {t("settings.order_history_description")}
                      </div>
                    </div>
                  </div>

                  <div className="settings_row" onClick={() => onLogOut()}>
                    <div className="settings_icon" id="help_icon">
                      <img
                        width="15px"
                        height="15px"
                        src={ChangePasswordIcon}
                        alt="Change Password icon"
                      />
                    </div>
                    <div className="settings_text">
                      <div className="settings_toptext">{t("settings.logout")}</div>
                      <div className="settings_bottomtext">
                        {t("settings.logout_description")}
                      </div>
                    </div>
                  </div>
                  <div className="settings_row" />
                </div>
              </div>
            </Col>
            <Col md={3}>
            </Col>
          </Row>
        </div>
      </section>
    </div>

  );
}

export default Settings;

