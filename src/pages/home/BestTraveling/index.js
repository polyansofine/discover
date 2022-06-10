import { Container, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const BestTraveling = (props) => {
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);
  const { settingData, getSettingData } = props;

  useEffect(() => {
    const formData = new FormData();
    formData.append("action", "discover_shurooq_homepage_settings");
    getSettingData(formData);
  }, []);

  const imagesData = [
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      colClassName: "d-flex align-items-end",
      image: `https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.gallary_images?.image1}`,
      image_link: `${settingData?.gallary_images?.image1_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      colClassName: "d-lg-none",
      image: `https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.gallary_images?.image3}`,
      image_link: `${settingData?.gallary_images?.image3_link}`,
    },
    {
      colProps: {
        lg: 8,
      },
      image: `https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.gallary_images?.image2}`,
      image_link: `${settingData?.gallary_images?.image2_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      colClassName: "d-none d-lg-block",
      image: `https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.gallary_images?.image3}`,
      image_link: `${settingData?.gallary_images?.image3_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      image: `https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.gallary_images?.image4}`,
      image_link: `${settingData?.gallary_images?.image4_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      image: `https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.gallary_images?.image5}`,
      image_link: `${settingData?.gallary_images?.image5_link}`,
    },
  ];

  return (
    <section className="best-traveling-section">
      <Container>
        {/* <p className="sec-title-heading">Gallery of our trip</p> */}
        <h2 className="sec-title">Popular Activites</h2>
        <Row form className="mt-4 mt-sm-0">
          {imagesData.map(({ colProps = {}, colClassName = "", image = "", image_link = "" }, index) => (
            <Col key={index} {...colProps} className={colClassName}>
              <a href={image_link} target="_blank"><img src={image} className="w-100" alt="" /></a>
            </Col>
          ))}
          {/* <Col sm={6} lg={4} className="d-flex align-items-end">
            <img
              src={`https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image1}`}
              className="w-100"
              alt=""
            />
          </Col>
          <Col sm={6} lg={4} className="d-lg-none">
            <img
              src={`https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image3}`}
              className="w-100"
              alt=""
            />
          </Col>
          <Col lg={8}>
            <img
              src={`https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image2}`}
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col lg={4} className="d-none d-lg-block">
            <img
              src={`https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image3}`}
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col lg={4}>
            <img
              src={`https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image4}`}
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col lg={4}>
            <img
              src={`https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image5}`}
              className="img-fluid"
              alt=""
            />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = ({ user: { settingData } }) => ({
  settingData,
});

const mapDispatchToProps = {
  getSettingData: userAction.getSettingData,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BestTraveling));
