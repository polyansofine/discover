import React, { useEffect, useState } from "react";
import cx from "classnames";
import timerIcon from "../../../../assets/images/icons/timer.svg";
import { connect } from "react-redux";
import * as userAction from "../../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import wifi from "../../../../assets/images/icons/wifi.svg";
import parking from "../../../../assets/images/icons/Feature_parking.svg";
import toilet from "../../../../assets/images/icons/Toilet-pictogram.svg";
import dining from "../../../../assets/images/icons/dining.svg";
import washrooms from "../../../../assets/images/icons/washrooms.svg";
import seating from "../../../../assets/images/icons/seating.svg";
import refreshments from "../../../../assets/images/icons/refreshments.svg";
import lounge from "../../../../assets/images/icons/Bar.svg";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const AboutContent = ({ description }) => (
  <div className="text-content">
    <p dangerouslySetInnerHTML={{ __html: description }}></p>
  </div>
);
const AmenitiesContent = (props) => {
  const { amenities } = props;
  return (
    <div className="adventurous">
      <div className="options">
        {amenities.map((value, index) => (
          <div key={index} onClick={() => { }}>
            <button className="btn">
              {value == "free_wiFi" &&
                <img src={wifi} />
              }
              {value == "free_parking" &&
                <img src={parking} />
              }
              {value == "dining" &&
                <img src={dining} />
              }
			        {value == "washrooms" &&
                <img src={washrooms} />
              }
			        {value == "seating" &&
                <img src={seating} />
              }
              {value == "bar_or_lounge" &&
                <img src={lounge} />
              }
			        {value == "refreshments" &&
                <img src={refreshments} />
              }
              {value.replace(/_/g, ' ')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const LocationContent = (props) => {
  const { lan, lat } = props;
  let url = "https://maps.google.com/maps?q=" + lat + "," + lan + "&hl=es;z=14&output=embed";
  return (
    <div className="text-content">
      <iframe src = {url}></iframe>
    </div>
  )
}

const TermsContent = (props) => {
  const {term} = props;
  return (
    <div className="text-content">
    <p dangerouslySetInnerHTML={{ __html: term }}></p>
  </div>
  )
}

const AdditionalContent = (props) => {
  const {additional_info} = props;
  return (
    <div className="text-content">
    <p dangerouslySetInnerHTML={{ __html: additional_info }}></p>
  </div>
  )
}

const ItineraryContent = (props) => {
  const {itinerary} = props;
  return (
    <div className="text-content">
    <p dangerouslySetInnerHTML={{ __html: itinerary }}></p>
  </div>
  )
}

const GalleryContent = (props) => {
  const {mega_slider_images} = props;
  const images = JSON.parse(mega_slider_images);
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <>
      <div className="row">
        {JSON.parse(mega_slider_images).map((value, index) => (
          <div className="col-sm-6" key={index} onClick={() => { setOpen(true); setPhotoIndex(index) }}>
           <img src={`http://api.discovershurooq.ae/files/${value}`}></img>
          </div>
        ))}
      </div>
      {isOpen && images.length > 0 && (
          <Lightbox
            mainSrc={`http://api.discovershurooq.ae/files/`+images[photoIndex]}
            nextSrc={`http://api.discovershurooq.ae/files/`+images[(photoIndex + 1) % images.length]}
            prevSrc={`http://api.discovershurooq.ae/files/`+images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
    </>
  )
}

const Content = (props) => {
  const btns = [
    { name: "About", active: "true" },
    { name: "Amenities" },
    { name: "Location" },
    { name: "Terms" },
    { name: "Additional Info" },
    { name: "Itinerary" },
  ];

  const { package_slug } = props.match.params;
  const { packageDetails, getPackageDetails, setCouponValue, isShowCoupon } = props;
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const data = new FormData();
    data.append("action", "packagesDetails");
    data.append("slug", package_slug);
    getPackageDetails(data);

  }, []);

  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    setTabs([]);
    if(packageDetails?.description && packageDetails?.description != ""){
      setTabs(prev => [...prev, { id: 1, name: "About" }])
    }
    if(packageDetails?.amenities && packageDetails?.amenities.length > 0){
      setTabs(prev => [...prev, { id: 2, name: "Amenities" }])
    }
    if(packageDetails?.lan && packageDetails?.lat){
      setTabs(prev => [...prev, { id: 3, name: "Location" }])
    }
    if(packageDetails?.term_conditions && packageDetails?.term_conditions != ""){
      setTabs(prev => [...prev, { id: 4, name: "Terms" }])
    }
    if(packageDetails?.additional_info && packageDetails?.additional_info != ""){
      setTabs(prev => [...prev, { id: 5, name: "Additional Info" }])
    }
    if(packageDetails?.itinerary && packageDetails?.itinerary != ""){
      setTabs(prev => [...prev, { id: 6, name: "Itinerary" }])
    }
    if(packageDetails?.mega_slider_images && packageDetails?.mega_slider_images != "[]"){
      setTabs(prev => [...prev, { id: 7, name: "Gallery" }])
    }
  }, [packageDetails])

  const setCouponText = (txt) => {
		var cop = txt.split(">")[1].split("<")[0];
		setCouponValue(cop);
		isShowCoupon(true);
	}

  return (
    <div className="package-content package-detail-info">
      <div className="d-flex justify-content-between" style={{ alignItems: 'center' }}>
				<div style={{ width: '100%' }}>
					{localStorage.getItem('user_language') == 'en'
						?
						<h2 className="name mb-3" style={{fontSize: 24}}>{packageDetails?.package_name}</h2>
						:
						<h2 className="name mb-3">{packageDetails?.arabic_name}</h2>
					}
					{packageDetails?.enable_note == 1
						?
						<div className="days alert alert-secondary" dangerouslySetInnerHTML={{ __html: packageDetails?.note }} onClick={e => setCouponText(packageDetails?.note)} ></div>
						:
						null}
				</div>
			</div>
      <div className="tab-package-btn">
        <div className="" style={{overflowX: "auto", display: "flex", paddingTop: 25, paddingBottom: 25, paddingLeft: 15, paddingRight: 15}}>
          {tabs.map(({ id, name}) => (
            <button key={id} className={cx("btn", { active: id === activeTab })} onClick={() => setActiveTab(id)} >{name}</button>
          ))}
        </div>
      </div>
      <div className="content">
        {activeTab === 1 && <AboutContent description={packageDetails?.description} />}
        {activeTab === 2 && <AmenitiesContent amenities={packageDetails?.amenities} />}
        {activeTab === 3 && <LocationContent lan={packageDetails?.lan} lat={packageDetails?.lat} />}
        {activeTab === 4 && <TermsContent term={packageDetails?.term_conditions}/>}
        {activeTab === 5 && <AdditionalContent additional_info={packageDetails?.additional_info}/>}
        {activeTab === 6 && <ItineraryContent itinerary={packageDetails?.itinerary}/>}
        {activeTab === 7 && <GalleryContent mega_slider_images={packageDetails?.mega_slider_images}/>}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  user: {
    packageDetails,
  },
}) => ({
  packageDetails,
});

const mapDispatchToProps = {
  getPackageDetails: userAction.getPackageDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Content));