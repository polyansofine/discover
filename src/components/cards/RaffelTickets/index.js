import React from "react";
import { Row, Col, Button } from "reactstrap";
import cx from "classnames";

const RaffelTickets = () => {
  const vlaues = [
    { title: "Today", value: "+21" },
    { title: "Total", value: "218", valueClassName: "total" },
    { title: "Week", value: "+118" },
  ];
  return (
    <div>
      <h3 className="s-title d-flex align-items-end justify-content-between">
        <span>Raffel Tickets</span>
        <span className="sub">+ AED 26.75</span>
      </h3>
      <div className="bg-black raffel-tickets-card">
        <Row form className="mb-3 align-items-end">
          {vlaues.map(({ title, value, valueClassName = "" }) => (
            <Col>
              <p className="title">{title}</p>
              <p className={cx("value", valueClassName)}>{value}</p>
            </Col>
          ))}
        </Row>
        <Button color="purple-light" size="sm" className="w-100 text-uppercase text-center">
          <i className="fas fa-qrcode mr-2" />
          <b>Spend And Win</b>
        </Button>
      </div>
    </div>
  );
};

export default RaffelTickets;
