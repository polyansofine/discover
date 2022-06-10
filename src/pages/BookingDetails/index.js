import React, { useEffect, useState } from "react";
import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Container } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { connect, useSelector } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import { Link } from "react-router-dom";
import leftLineArrow from "../../assets/images/icons/line-arrow-left.svg";
import { scrollToTopSmooth } from "../../util";
import Tick from '../../assets/images/icons/success.svg';
import Pending from '../../assets/images/icons/order-pending.svg';
import whats_app from '../../assets/images/whats_app.png';
import orderrailed from '../../assets/images/icons/order-railed.png';
import qrcode from "qrcode";
import ReactPixel from 'react-facebook-pixel';
import "./style.scss";

function Images({ status }) {
  if (status == 0) {
    return (
      <img src={Pending} alt="Tick icon" className="tick" />
    );
  } else if (status == 1) {
    return (
      <img src={Tick} alt="Tick icon" className="tick" />
    );
  } else {
    return (
      <img src={orderrailed} alt="Tick icon" className="tick" />
    );
  }
}

const BookingDetail = (props) => {
  const t = useTranslation()
  const isEnglish = localStorage.getItem('user_language');
  const { order_number } = props.match.params
  const [subpackData, setSubpackData] = useState({});
  const [mealData, setMealData] = useState({});
  let search = window.location.search;
  const {
    bookingData,
    bookPackages,
  } = props
  useEffect(() => {
    const data = new FormData();
    data.append("action", "bookingDetails");
    data.append("order_number", order_number);
    bookPackages(data);

    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [])
  if (search == "?success") {
    if (bookingData?.package_name) {
      ReactPixel.track('Purchase', {
        content_name: `${bookingData?.package_name} - Package`,
        content_ids: '',
        currency: 'AED',
        content_category: 'product',
        content_type: 'product',
        value: `${bookingData?.total}`
      })
    }
  }
  const history = useHistory();
  const [qrCode, setQrCode] = useState(1);
  const promise = qrcode.toDataURL(bookingData?.order_number).then(res => { setQrCode(res) }).catch(error => {
  });

  useEffect(() => {
    let data = {};
    let subName = "", adultQty = 0, childQty = 0;
    for (let index = 0; index < bookingData?.order_sub_packages?.length; index++) {
      if(index == 0)
      {
        subName = bookingData?.order_sub_packages[index].package_name;
      }
      adultQty += Number(bookingData?.order_sub_packages[index].adult_qty);
      childQty += Number(bookingData?.order_sub_packages[index].child_qty);
    }
    data["name"] = subName;
    data["adult"] = adultQty;
    data["child"] = childQty;
    setSubpackData(data);

    let mealData = {};
    let mealName="", mealQty = 0;
    for (let index = 0; index < bookingData?.order_meals?.length; index++) {
      if(index == 0)
      {
        mealName = bookingData?.order_meals[index].meal_name;
      }
      mealQty += Number(bookingData?.order_meals[index].meal_qty);
    }
    mealData["name"] = mealName;
    mealData["mealQty"] = mealQty;
    setMealData(mealData);
  }, [bookingData])

  return (
    <div>
      <UploadBanner
        linkPage={[{ name: "BookingDetails Shurooq" }]} backgroundImage={`https://api.discovershurooq.ae/files/`+bookingData?.package_img}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div className="order-success" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <article className="ticket">
              <header className="ticket__wrapper">
                {bookingData.status == 0 && <div className="ticket__header"></div>}
                {bookingData.status == 1 && <div className="ticket__header_success"></div>}
                {bookingData.status != 0 && bookingData.status != 1 && <div className="ticket__header_normal"></div>}
                <section className="ticket__section">
                  {isEnglish == 'en'
                    ?
                    <div className="name">{`${bookingData?.package_name} (${bookingData?.destination_name})`}</div>
                    :
                    <div className="name">{`${bookingData?.package_arabic_name} (${bookingData?.dest_arabic_name})`}</div>
                  }
                </section>
              </header>
              <div className="ticket__divider">
                <div className="ticket__notch"></div>
                <div className="ticket__notch ticket__notch--right"></div>
              </div>
              <div className="ticket__body">
                <section className="ticket__section" style={{display: 'flex', justifyContent: 'center'}}>
                  <Images status={bookingData?.status}></Images>
                </section>
                
                <hr className="line" />
                <div className="shape_left"></div>
                <section className="ticket__section ticket_row man_count">
                  <div className="ticket_column" style={{ width: "auto" }}>
                    <p className="venue">{t('Booking_details.adults')}</p>
                    <p className="time">{bookingData?.adult_qty}</p>
                  </div>
                  <span style={{ fontSize: 24, fontWeight: 'bold' }}>+</span>
                  <div className="ticket_column" style={{ width: "auto" }}>
                    <p className="venue">{t('Booking_details.kids')}</p>
                    <p className="time">{bookingData?.child_qty}</p>
                  </div>
                </section>
                <div className="shape_right"></div>
                <hr className="line" />

                <section className="ticket__section">
                  <div className="ticket_column">
                    <div className="text_small">{t('Booking_details.booked_by')}</div>
                    <div className="details-text email_text">{bookingData?.email}</div>
                    <div className="details-text">{bookingData?.mobile}</div>
                  </div>
                </section>
                <section className="ticket__section">
                  <div className="ticket_column booking_date">
                    <div className="text_small">{t('Booking_details.booking_date')}</div>
                    <div className="details-text">{bookingData?.created_at}</div>
                  </div>
                </section>
                <section className="ticket__section">
                  <div className="ticket_column">
                    <div className="text_small">{t('Booking_details.order_number')}</div>
                    <div className="details-text">{bookingData?.order_number}</div>
                  </div>
                  <div className="ticket_column">
                    <div className="text_small">{t('Booking_details.total')}</div>
                    <div className="details-text">{bookingData ? "AED" : null} {bookingData?.total}</div>
                  </div>
                </section>
                <section className="ticket__section">
                  <div className="ticket_column">
                    <div className="text_small">Subpackages</div>
                    <div className="details-text">{subpackData?.name} (Adult: {subpackData?.adult} | Child: {subpackData?.child})</div>
                  </div>
                  <div className="ticket_column">
                    <div className="text_small">People for Transport</div>
                    <div className="details-text">{bookingData?.transport_name}</div>
                  </div>
                  <div className="ticket_column">
                    <div className="text_small">Meals</div>
                    <div className="details-text">{mealData?.name} (Qty: {mealData?.mealQty})</div>
                  </div>
                  <div className="ticket_column">
                    <div className="text_small">Coupon Applied</div>
                    <div className="details-text">{bookingData?.created_at}</div>
                  </div>
                  <div className="ticket_column">
                    <div className="text_small">Coupon</div>
                    <div className="details-text">{bookingData?.coupon}</div>
                  </div>
                  <div className="ticket_column">
                    <div className="text_small">Event Date</div>
                    <div className="details-text">{bookingData?.date}</div>
                  </div>
                </section>
                {bookingData?.status == 1
                  ?
                  <div className="qr_container">
                    <img src={qrCode} alt="QRCode" />
                    <section className="ticket__section">

                    </section>
                  </div>
                  :
                  null
                }

              </div>
              <footer className="ticket__footer">
                <a href="https://api.whatsapp.com/send?phone=971562147660">
                  <div style={{ backgroundImage: `url(${whats_app})`, backgroundSize: 'cover', height: 60 }}>
                    <p style={{ color: 'white', paddingTop: 15, textAlign: 'center', paddingLeft: "20%", fontSize: "80%" }}>{t('Booking_details.contact_us')}</p>
                  </div>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ user: { bookingData } }) => ({
  bookingData,
});

const mapDispatchToProps = {
  bookPackages: userAction.bookPackages,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BookingDetail));
