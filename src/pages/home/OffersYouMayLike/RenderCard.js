import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-multi-lang";
import { useHistory } from "react-router-dom";
import voucher_empty from "../../../assets/images/offer_banner_graphic.png";
import { scrollToTop } from "../../../util";

export default function RenderCard(props) {
  const { title, decription, validTill, logo } = props;
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
    // getVoucherDetails(data);

    history.push(`/v/${url_slug}`);
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
      className="offer-card"
      onClick={() => {
        scrollToTop();
        getDetails();
        // history.push("/voucher-details");
      }}
    >
      <div className="logo-wrapper">
        {img ? (
          <img src={`https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${img}`} alt={name} />
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
          <p className="decription">{decription}</p>
        </div>
        <p className="validTill">
          {t("vouchers.valid_till")}:{" " + moment(expiry_date).format("MMM-DD")}
        </p>
      </div>
    </div>
  );
}
