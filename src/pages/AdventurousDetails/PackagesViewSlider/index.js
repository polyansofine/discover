import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
const ContentView = (props) => {
  const history = useHistory();
  const { package_name = "", img = "", price = "", location = "", url_slug, getPackageDetails, child_price } = props;
  return (
    <div className="slide-content-view col-md-6 col-sm-6" onClick={() => {
      getPackageDetails("");
      history.push(`../p/${url_slug}`)
    }}>
      <div className="holder">
        <div className="image-wrapper">
          <img className="view-image" src={`https://api.discovershurooq.ae/files/${img}`} />
          {(price != "" || child_price != "") && 
            <p className="price" style={{ backgroundColor: "#ec6550" }}>AED {price==""?child_price:price}</p>
          }
        </div>
        <div className="d-wrap">
          <h3 className="name">{package_name}</h3>
          <p className="location">{location}</p>
        </div>
      </div>
    </div>
  );
};

const PackagesViewSlider = (props) => {
  const { tagData, getPackageDetails } = props;
  return (
    <div className="categorys-view-slider-wrapper">
      <div className="categorys-view-slider row">
        {/* <OwlCarousel ref={refferencr} options={options} events={events}> */}
        {tagData?.map((data, index) => (
          <>
            {data.hide == '0' && data.enable == '1' && data.checkout == 'DiscoverShurooq' &&
              <ContentView key={index} {...data} getPackageDetails={getPackageDetails} />
            }
          </>
        ))}
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  user: { packageDetails, getPackageDetailsStatus },
}) => ({
  packageDetails,
  getPackageDetailsStatus
});

const mapDispatchToProps = {
  getPackageDetails: userAction.getPackageDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PackagesViewSlider));
