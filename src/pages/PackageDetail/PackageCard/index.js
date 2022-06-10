import { Row, Col } from "reactstrap";
import Content from "./Content";
import PackageOptions from "./PackageOptions";
import { useState } from 'react';

export default function PackageCard() {
  const [couponValue, setCouponValue] = useState("");
  const [showCoupon, isShowCoupon] = useState(false);

  return (
    <section className="PackageCard">
      <div className="PackageCard-card">
        <Row>
          <Col xl={6}>
            <Content setCouponValue={setCouponValue} isShowCoupon={isShowCoupon} />
          </Col>
          <Col xl={6}>
            <PackageOptions setCouponValue={setCouponValue} isShowCoupon={isShowCoupon} showCoupon={showCoupon} couponValue={couponValue} />
          </Col>
        </Row>
      </div>
    </section>
  );
}
