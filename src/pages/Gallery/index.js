import React, { useEffect, useState } from "react";
import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Container } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { connect, useSelector } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import headBanner from "../../assets/images/headerImages/view-all-destiations-AND-Gallery.jpg";

const Gallery = (props) => {
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
      image: `https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image1}`,
      image_link: `${settingData?.gallary_images?.image1_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      colClassName: "d-lg-none",
      image: `https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image3}`,
      image_link: `${settingData?.gallary_images?.image3_link}`,
    },
    {
      colProps: {
        lg: 8,
      },
      image: `https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image2}`,
      image_link: `${settingData?.gallary_images?.image2_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      colClassName: "d-none d-lg-block",
      image: `https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image3}`,
      image_link: `${settingData?.gallary_images?.image3_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      image: `https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image4}`,
      image_link: `${settingData?.gallary_images?.image4_link}`,
    },
    {
      colProps: {
        sm: 6,
        lg: 4,
      },
      image: `https://api.discovershurooq.ae/files/${settingData?.gallary_images?.image5}`,
      image_link: `${settingData?.gallary_images?.image5_link}`,
    },
  ];

  return (
    <div>
      <UploadBanner  backgroundImage={headBanner}
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Gallery Shurooq" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div>
            <Container fluid>
              <Row form className="mt-4 mt-sm-0">
                {imagesData.map(({ colProps = {}, colClassName = "", image = "", image_link = "" }, index) => (
                  <Col key={index} {...colProps} className={colClassName}>
                    <a href={image_link} target="_blank"><img src={image} className="w-100" alt="" /></a>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ user: { settingData } }) => ({
  settingData,
});

const mapDispatchToProps = {
  getSettingData: userAction.getSettingData,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Gallery));
