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
import ProfileIcon from '../../assets/images/icons/Profile.svg';
import EmailIcon from '../../assets/images/icons/email.svg';
import CallIcon from '../../assets/images/icons/call.svg';
import ArrowIcon from '../../assets/images/icons/left-arrow.svg';
import { Alert } from "reactstrap";

function UploadContent() {
  const btns = [{ name: "About", active: "true" }, { name: "Terms" }, { name: "Faq" }];
  return (
    <div className="UploadContent">
      <div className="tab-package-btn w-100">
        <div className="wrapper">
          {btns.map(({ name, active = false }) => (
            <button className={cx({ active: active })}>{name}</button>
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

function Editprofile(props) {
  const t = useTranslation()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");
  const [alertText, setAlertText] = useState("");
  const [isAlert, setAlert] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const { getProfileDetails, userData, editProfile, editProfileStatus } = props
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const profileData = new FormData();
    profileData.append("action", "getProfileDetails");
    getProfileDetails(profileData)

  }, [])
  useEffect(() => {
    setName(userData ? userData.name : '')
    setEmail(userData ? userData.email : '')
    setPhone(userData ? userData.mobile : '')
  }, [userData])

  const onUpdateProfile = () => {
    const data = new FormData()
    data.append('action', 'editProfile')
    data.append('name', name)
    data.append('mobile', phone)
    // data.append('password',newPassword )
    editProfile(data)
  }

  useEffect(() => {
    if (editProfileStatus === "success") {
      setAlertText("Profile Updated Successfully");
      setAlert(true);
      setAlertColor("success");
      setTimeout(
        function () {
          history.push("/");
          setAlert(false);
          setAlertText("");
        }.bind(this),
        2000
      );
    }
  }, [editProfileStatus]);
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
              <div className="edit-profile destinations-package">
                <div className="">
                  <p class="menu-text">
                    <i class="fas fa-arrow-left arrow" onClick={() => history.push({ pathname: "/settings" })} ></i>{t('account_settings.heading')}
                  </p>
                  {/* <img src={ArrowIcon} height="20px" alt="Back icon" onClick={() => history.push({ pathname: "/settings" })} /> */}
                  {/* <div className="password_text">{t('account_settings.heading')}</div> */}
                  {isAlert && <Alert color={alertColor}>{alertText}</Alert>}

                  <div className="">
                    <p className="text_small">{t('account_settings.name')}</p>
                    <div className="input_row">
                      <img src={ProfileIcon} className="icon" alt="Profile Icon" />
                      <input type="text" className="input" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <p className="text_small">{t('account_settings.email')}</p>
                    <div className="input_row">
                      <img src={EmailIcon} alt="Email Icon" />
                      <input type="email" className="input" id="email" placeholder="Email" disabled value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <p className="text_small">{t('account_settings.phone')}</p>
                    <div className="input_row">
                      <img src={CallIcon} alt="Phone Icon" />
                      <input type="tel" className="input" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                  </div>
                  <button className="btn btn-dark" type="submit" style={{ marginTop: 30 }} onClick={() => onUpdateProfile()}>{t('account_settings.button')}</button>
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

const mapStateToProps = ({
  user: { userData, editProfileStatus },
}) => ({
  userData,
  editProfileStatus,
});

const mapDispatchToProps = {
  getProfileDetails: userAction.getProfileDetails,
  editProfile: userAction.editProfile
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Editprofile));

