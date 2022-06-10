import React, { useState, useEffect, useRef } from "react";
// import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Input, Button, Container } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import OwlCarousel from "react-owl-carousel2";
import {Grid} from "@material-ui/core"

import { Component } from "react";
import { Link } from "react-router-dom";
import "./kid.css";
// import leftLineArrow from "../../assets/images/icons/line-arrow-left.svg";
// import PackagesViewSlider from "./PackagesViewSlider";
import mapIcon from "../../../assets/images/icons/maps-and-flags.svg";
import ContentLoader from "react-content-loader";

const options = {
   nav: true,
   loop: true,
  autoplay: false,
   navText : ['<img src="https://img.icons8.com/ios/48/ffffff/circled-chevron-left.png"/>','<img src="https://img.icons8.com/ios/48/ffffff/circled-chevron-right.png"/>'],
  responsive: {
     0: {
         items: 1,
      },
      576: {
         items: 2,
      },
      
    
      
      991: {
         items: 3,
      },
      // 1200: {
      //    items: 4,
      // },
      1600: {
        items: 3,
      },
   },
};
const events = {
   onDragged: function (event) {},
   onChanged: function (event) {},
};
function LoaderCard(props) {
  return (
    <ContentLoader
      speed={2}
      // width={638}
      // height={420}
      viewBox="0 0 638 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="1" y="0" rx="30" ry="30" width="638" height="380" />
      <rect x="19" y="396" rx="3" ry="3" width="300" height="8" />
      <rect x="19" y="410" rx="3" ry="3" width="300" height="8" />
      <rect x="500" y="410" rx="3" ry="3" width="100" height="8" />
    </ContentLoader>
  );
}

function RenderBookCard(props) {
  const [imgLoad, setImageLoad] = useState(false);
  const { package_name, arabic_name, url_slug, price, original_price, child_price, rating, img, destination_id, destinationData } =
    props;
  const history = useHistory();
  const t = useTranslation();
  const [destName, setDestName] = useState('');
  useEffect(() => {
    for (var i = 0; i < destinationData?.length; i++) {
      if (destinationData[i]["id"] == destination_id) {
        setDestName(destinationData[i].name)
      }
    }
  }, [])

  const top = () => (
    <div className="top-content">
      {destName != ""? 
      <div>
        <p className="rating">
          <img src={mapIcon} alt="rating" />
          {destName}
        </p>
      </div> : <div></div>
      }
    </div>
  );

  const bottom = () => (
    <div className="bottom-content">
      {localStorage.getItem("user_language") == "en" ? (
        <h3 className="title pr-4">{package_name}</h3>
      ) : (
        <h3 className="title pr-4">{arabic_name}</h3>
      )}

      <p className="price">
        {original_price == "" ? (
          <> AED {price != "" ? price : child_price} Only</>
        ) : (
          <>
            <del style={{ fontSize: 11 }}> AED {original_price}</del>

            <span>
              {t("packages.price")} AED{price}
            </span>
          </>
        )}
      </p>
    </div>
  );

    const image = "https://api.discovershurooq.ae/cdn-cgi/image/width=730,height=300,quality=100,sharpen=1/files/" + img;

  return (
    <>
      <div
        className={cx("book-exp-card", { "d-none": !imgLoad })}
        onClick={() => history.push(`../p/${url_slug}`)}
        // style={{ backgroundImage: `url(${image})` }}
      >
                    <img
                          id="kid"
          className="render-image"
          onError={() => setImageLoad(true)}
          onLoad={() => setImageLoad(true)}
          src={image}
          alt=""
        />
        <div className="content">
          {top()}
          {bottom()}
        </div>
      </div>
      {/* {!imgLoad && <LoaderCard />} */}
    </>
  );
}

const Family = (props) => {
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);
  const btns = [{ active: "true" }, {}, {}, {}];
  const { slug } = props;
  const [activeTab, setActiveTab] = useState(0);
  const { tagData1, getTagData1, settingData, getSettingData, destinationData, getDestinationData, header, tagtitle} = props;
  const [loader, setLoader] = useState(true);
  const refferencr = useRef(null);
  console.log('family=', tagData1);
  const mainTagData = [];
 tagData1 && tagData1.map((data, index) => {
    if (data.hide == "0" && data.enable == "1" && data.checkout.includes("DiscoverShurooq")) { mainTagData.push(data) }else { return false}
  });
  useEffect(() => {
    console.log('slugggg=======', slug)
    const data = new FormData();
    data.append("action", "packagesByTags");
    data.append("tag", slug);
    if (slug === "") { } else {
      getTagData1(data);
    }

    const destData = new FormData();
    destData.append("action", "destinations");
    getDestinationData(destData);

    const formData = new FormData();
    formData.append("action", "discover_shurooq_homepage_settings");
    getSettingData(formData);
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [slug]);

  // function clickedTag(id, value) {
  //   setActiveTab(id);
  //   if (id == 0) {
  //     const data = new FormData();
  //     data.append('action', 'packagesByCategory');
  //     data.append('tag', value);
  //     getTagData(data);
  //   } else {
  //     const data = new FormData();
  //     data.append('action', 'packagesByTags');
  //     data.append('tag', value);
  //     getTagData(data);
  //   }
  // }

  const renderLoader = () => (
   <OwlCarousel ref={refferencr} options={options} events={events}>
      {["", "", "", "", "","", ""].map((data, index) => (
        <Col md={6} key={"bookData" + index} className="book-exp-card-col">
          <LoaderCard />
        </Col>
      ))}
  </OwlCarousel>
  );

  const renderData = () => (
      <OwlCarousel ref={refferencr} options={options} events={events} >
        {/* {tagData.length == 0? <Col><div style={{justifyContent: 'center', display: 'flex'}}><p>No Packages Found</p></div></Col> : <div></div>} */}
      {mainTagData && mainTagData.slice(0,6).map((data, index) =>(
          <div  key={"bookData" + index} className="book-SlideCard-wrapper">
            <RenderBookCard {...data} destinationData={destinationData} />
          </div>
        ) 
      )}
    </OwlCarousel>
  );

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, [tagData1]);

  return (
    <div>
      {/* <UploadBanner
        // linkPage={[{ type: "link", name: "Home", link: "/" }, { name: `DiscoverShurooq - ${slug}` }]}
      /> */}
      <section className="book-youre-experience-section-homepage">
        <Container>
          <div className="title-container">
            <Grid container direction="row" justify="space-between" alignItems="center">
                          <h2 className="sec-title">{header}</h2>
              <Button color="primary" style={{cursor: 'pointer'}} onClick = {() => history.push(`/t/${slug}`)} className="read-more-btn" >SEE ALL</Button>
             
            </Grid>
            <p>  {tagtitle}</p>

          </div>
                          
      </Container>
      <div className="book-slider-wrapper">
            <div id="kid" className="book-slider">
                  {loader ? renderLoader() : renderData()}
            </div>
      </div>
        {/* <div className="UploadCard">
          <Row>
            <Col md={12}>
              <div className="mainview">
                <div className="content-view" style={{ paddingTop: 90 }}>
                  <div className="main-view-packages">
                    {tagData != null && tagData != "" &&
                      <PackagesViewSlider tagData={tagData} />
                    }
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
      </section>
    </div>
  );
};

const mapStateToProps = ({ user: { tagData1, settingData, destinationData } }) => ({
  tagData1,
  settingData,
  destinationData,
});

const mapDispatchToProps = {
  getTagData1: userAction.getTagData1,
  getSettingData: userAction.getSettingData,
  getDestinationData: userAction.getDestinationData,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Family));
