import React, { useEffect } from "react";
import ushna from "../../../assets/images/logos/ushna.png";
import { Row, Col } from "reactstrap";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import { LineArrow } from "../../../components/SvgComponents";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import cx from "classnames";
import { getLanguage, setLanguage, useTranslation } from 'react-multi-lang'
import moment from "moment";
import voucher_empty from '../../../assets/images/offer_banner_graphic.png';

function RenderCard(props) {
  // const { title, name, decription, validTill, logo } = props;
  const { color = "#e94661", img, amount, type, expiry_date, description, vendor_name, destination_name, name, arabic_description, arabic_name, dest_arabic_name, vendor_arabic_name } = props;
  const isEnglish = localStorage.getItem('user_language');
  const t = useTranslation()
  document.title = name + " - DiscoverShurooq";

  return (
    <div className="render-card">
      <div className="logo-wrapper">
        {img
          ?
          <img
            className="brand-logo"
            src={`https://api.discovershurooq.ae/files/${img}`}
            alt={"alt"}
            style={{ width: 100 }}
          />
          :
          <img className="ImageBox" style={{ width: 100 }} src={voucher_empty} />
        }
      </div>
      <div className="content">
        <div>
          <p className="name vouchers-name">{isEnglish == 'en' ? vendor_name : vendor_arabic_name}</p>
          <p className="title">{amount}</p>
          <p className="decription">{isEnglish == 'en' ? description : arabic_description}</p>
        </div>
        <p className="validTill">
          <b>Expires:</b> <i>{moment(expiry_date).format("MMM-DD")}</i>
        </p>
      </div>
    </div>
  );
}

const DetailView = (props) => {
  const data = {
    logo: ushna,
    name: "Babu Town",
    title: "50% Off",
    decription: "Order Babu Town at Home. Book with Talabat for 50% Off",
    validTill: "Aug-31",
  };
  const btns = [{ name: "About", active: "true" }, { name: "Terms" }];

  const { voucher_slug } = props.match.params;
  const {
    getNewBar,
    isNewBar,
    getNewPromo,
    getOldPromo,
    newPromosData,
    oldPromosData,
    token,
    voucherData,
    getVoucherDetails
  } = props;
  // This is the data of new and old promos

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const VoucherData = new FormData();
    VoucherData.append("action", "getVourcherDetails");
    VoucherData.append("slug", voucher_slug)
    getVoucherDetails(VoucherData);
  }, []);

  useEffect(() => {
    if (!voucherData.data) return;
    const NewPromoData = new FormData();
    NewPromoData.append("action", "getVoucherCode");
    NewPromoData.append("id", voucherData.data.id);
    getNewPromo(NewPromoData);
    const OldPromoData = new FormData();
    OldPromoData.append("action", "oldUserVouchers");
    OldPromoData.append("voucher_id", voucherData.data.id);
    getOldPromo(OldPromoData);
  }, [])

  return (
    <>
      <section className="voucherDetailView">
        <div className="voucherDetailView-card">
          <Row className="align-items-center  ">

            {token ?
              <>
                <Col sm={6}>
                  <div className="d-table mx-auto">
                    <QRCode value="discover-shurooq" />
                    <p className="text-center">
                      <b>Scan QR Code</b>
                    </p>
                  </div>
                </Col>
              </>
              :
              <>
                <Col sm={6}>
                  <div className="d-table mx-auto">
                    <Link style={{ width: 220 }} className="btn btn-primary arrow" to="/login">
                      <span>
                        <LineArrow />
                        Login to Get QR code
                      </span>
                    </Link>
                  </div>
                </Col>
              </>
            }

            <Col sm={6}>
              <div className="tab-package-btn w-100">
                <div className="wrapper">
                  {btns.map(({ name, active = false }, index) => (
                    <button key={index} className={cx({ active: active })}>{name}</button>
                  ))}
                </div>
              </div>
              <RenderCard {...voucherData.data} />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = ({
  user: { isNewBar, newPromosData, oldPromosData, token, voucherData },
}) => ({
  isNewBar,
  newPromosData,
  oldPromosData,
  token,
  voucherData
});

const mapDispatchToProps = {
  getVoucherDetails: userAction.getVoucherDetails,
  getNewBar: userAction.getNewBar,
  getNewPromo: userAction.getNewPromo,
  getOldPromo: userAction.getOldPromo,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DetailView));
