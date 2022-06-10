import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { fade } from "../../../shared/style/style";
import { scrollToTop } from "../../../util";
import { getVoucherDetails } from "../../../actions/user-action-type";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import "./style.scss";
import voucher_empty from "../../../assets/images/offer_banner_graphic.png";

const BrandVoucherCard = (props) => {
  const [flag, setFlag] = useState(false);
  const t = useTranslation();
  const history = useHistory();
  const isEnglish = localStorage.getItem("user_language");
  const {
    index = 0,
    type,
    amount,
    name,
    expiry_date,
    bg_color,
    textDark = false,
    img,
    id,
    getVoucherDetails,
    voucherData,
    voucherDetailStatus,
    description,
    terms,
    url_slug,
    arabic_name,
  } = props;
  const getDetails = () => {
    //history.push(`../v/${url_slug}`);
    const data = new FormData();
    data.append("action", "getVourcherDetails");
    data.append("id", id);
    setFlag(true);
    getVoucherDetails(data);
  };

  useEffect(() => {
    if (voucherDetailStatus === "success") {
      if (flag) {
        setFlag(false);
        history.push(`../v/${voucherData.data.url_slug}`);
      }
    }
  }, [voucherDetailStatus]);
  return (
    <div
      onClick={() => {
        // scrollToTop();
        getDetails();
        // history.push("/voucher-details");
      }}
      className="offer-card"
    >
      <div className="logo-wrapper">
        {img ? (
          <img
            className="ImageBox"
            src={`https://api.discovershurooq.ae/files/${img}`}
            alt={"alt"}
          />
        ) : (
          <img className="ImageBox" src={voucher_empty} />
        )}
      </div>
      <div className="content">
        <div>
          {localStorage.getItem("user_language") == "en" ? (
            <p className="name">{name}</p>
          ) : (
            <p className="name">{arabic_name}</p>
          )}
          <p className="title">{isEnglish == "en" ? amount : arabic_name}</p>
        </div>
        <p className="validTill">
          {t("vouchers.valid_till")}:{" " + moment(expiry_date).format("MMM-DD")}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { voucherData, voucherDetailStatus } }) => ({
  voucherData,
  voucherDetailStatus,
});

const mapDispatchToProps = {
  getVoucherDetails: userAction.getVoucherDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BrandVoucherCard));

const ImageBox = styled("div")`
  width: 34px;
  height: 34px;
  margin: 0 auto 4px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 40px;
    max-height: 40px;
  }
`;
const TopBox = styled("div")`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 19px 8px;
  text-align: center;
  box-shadow: 0 0 4px 0 #d7d7d7;
`;
const BottomBox = styled("div")`
  border-radius: 12px;
  padding: 18px 8px 12px;
  text-align: center;
  flex-grow: 1;
  box-shadow: 0 0 4px 0 #d7d7d7;
`;
const Bar = styled("div")`
  box-shadow: 0 0px 2px 0 #d7d7d7;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  height: 10px;
  background-color: #fff;
`;
