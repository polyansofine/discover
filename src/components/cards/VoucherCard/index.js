import React from "react";
import cx from "classnames";

const VoucherCard = (props) => {
  const { className = "", logo = "", brand = "", offerPercent = "", voucherLeft = "" } = props;
  return (
    <div className={cx("voucher-card", className)}>
      <img className="brand-logo mb-3" src={logo} alt={brand} />
      <h3 className="text-nowrap" title={brand}>
        {brand}
      </h3>
      <h3 className="mb-3">
        <b>{offerPercent}& OFF</b>
      </h3>
      {voucherLeft && <p className="mb-0 voucherLeft">{voucherLeft} vouchers left</p>}
    </div>
  );
};

export default VoucherCard;
