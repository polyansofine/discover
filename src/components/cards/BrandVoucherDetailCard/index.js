import React, { useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { fade } from "../../../shared/style/style";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import qrimage from "../../../assets/images/qr-code.png";

const BrandVoucherCard = (props) => {
  const history = useHistory();
  const {
    index = 0,
    type,
    amount,
    name,
    expiry_date,
    color = "#f8777c",
    textDark = false,
    img,
  } = props;

  const [showQR, setQR] = useState(false);
  return (
    <div className="BrandVoucherCard detail" onClick={() => history.push("/voucher-details")}>
      <TopBox>
        <p>
          <b>Voucher No.</b> 9869596236
        </p>
        <div className="d-table mx-auto">
          <div className="d-flex">
            <div className="mr-4">
              <ImageBox color={color}>
                <img
                  className="brand-logo"
                  src={`https://api.discovershurooq.ae/files/${img}`}
                  alt={"alt"}
                />
              </ImageBox>
            </div>
            <div>
              <p className="name">{name}</p>
              <p className="validTime">
                Valid till: <br />
                {moment(expiry_date).format("MMM-DD")}
              </p>
            </div>
          </div>
        </div>

        <div className="info">
          <Table>
            <tbody>
              <tr>
                <td className="text-right">
                  <b>Valid till: </b>
                </td>
                <td>{moment(expiry_date).format("MMM-DD")}</td>
              </tr>
              <tr>
                <td className="text-right">
                  <b>Brand: </b>
                </td>
                <td>{name}</td>
              </tr>
              <tr>
                <td className="text-right">
                  <b>Type: </b>
                </td>
                <td>AED</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </TopBox>
      <Bar color={color} />
      <BottomBox className={cx({ "text-white": !textDark })} style={{ backgroundColor: color }}>
        <p className="discount-per">
          {type} {amount}
        </p>
        <p className="discount">Discount</p>

        {showQR ? (
          <div className="qr-code mt-4">
            <p>Coupon Code</p>
            <h4>GFGRT343</h4>
            <img src={qrimage} alt="" />
          </div>
        ) : (
          <div className="pt-4 py-3 px-4 ">
            <Button className="w-100" color="warning" onClick={() => setQR(true)}>
              Claim
            </Button>
          </div>
        )}
      </BottomBox>
    </div>
  );
};

export default BrandVoucherCard;
const ImageBox = styled("div")`
  width: 60px;
  height: 60px;
  margin: 0 8px;
  border-radius: 100%;
  background-color: ${({ color }) => fade(color, 0.5)};
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
  padding: 19px 16px;
`;
const BottomBox = styled("div")`
  border-radius: 12px;
  padding: 18px 8px 12px;
  text-align: center;
  flex-grow: 1;
`;
const Bar = styled("div")`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  height: 10px;
  background: ${({ color }) =>
    `repeating-linear-gradient(90deg, transparent 0 10px, ${color} 10px 20px);`};
  background-color: #fff;
`;
