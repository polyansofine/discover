import React, { useEffect } from "react";
import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Input, Button } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import ArrowIcon from '../../assets/images/icons/left-arrow.svg';
import "./style.scss";

function UploadContent() {
  const btns = [{ name: "About", active: "true" }, { name: "Terms" }, { name: "Faq" }];
  return (
    <div className="UploadContent">
      <div className="tab-package-btn w-100">
        <div className="wrapper">
          {btns.map(({ name, active = false }, index) => (
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

const OrderHistory = (props) => {
  const t = useTranslation()
  const isEnglish = localStorage.getItem('user_language');
  const {
    orderHistoryData,
    getOrderHistoryData
  } = props
  const history = useHistory()
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const data = new FormData();
    data.append("action", "orderHistory");
    getOrderHistoryData(data);
  }, [])

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
              <div className="destinations-package">
                <div class="">
                  <div className="backContainer d-flex">
                    <p class="menu-text">
                      <i class="fas fa-arrow-left arrow" onClick={() => history.push('/settings')}></i>{t('settings.order_history')}
                    </p>

                    {/* <img src={ArrowIcon} height="20px" alt="Back icon" onClick={() => history.push({ pathname: "/settings" })} />
                    <div className="password_text">{t('settings.order_history')}</div> */}
                  </div>
                  {orderHistoryData.length == 0
                    ?
                    <Col className="mb-3" style={{ textAlign: 'center', marginTop: '200px', justifyContent: 'center' }}>
                      <p style={{ textAlign: 'center' }}>{t('order_history.empty_message')}</p>
                    </Col>
                    :
                    orderHistoryData.map((item, index) => (
                      <div key={index}>
                        <div className="cake-card-wrapper">
                          <div className="cake-card-body ticket" onClick={() => item.status == 1 && history.push(`../booking-details/${item.order_number}`)} >
                            <span className="cake-card-left-img">
                              <img src={"https://api.discovershurooq.ae/files/" + item.package_img} alt="" />
                            </span>
                            <span className="cake-card-content">
                              <span className="cake-card-heading-text">
                                {isEnglish == 'en' ? item.package_name : item.package_arabic_name}
                              </span>
                              <span class="cake-card-muted-text mt-3" style={{ fontSize: "13px", background: "#fbfbfb", width: "100%", display: "block", margin: "auto" }}>{t('order_history.booking')} #{item.order_number} | {t('order_history.price')} = {item.total}</span>
                              <span className="cake-card-muted-text mt-3" style={{ fontSize: "13px", background: "#fbfbfb", width: "100%", display: "block", margin: "auto" }}>{t('order_history.child')} = {item.child_qty} | {t('order_history.adult')} = {item.adult_qty}</span>
                            </span>
                            <span className={"cake-card-right " + (item.status == 0 ? `${t('order_history.processing')}` : item.status == 1 ? 'qr' : `${t('order_history.failed')}`)}>
                              {item.status == 0 ? `${t('order_history.processing')}` : item.status == 1 ? `${t('order_history.show_qr')}` : `${t('order_history.failed')}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
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

const mapStateToProps = ({ user: { orderHistoryData } }) => ({
  orderHistoryData
});

const mapDispatchToProps = {
  getOrderHistoryData: userAction.getOrderHistoryData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderHistory));

