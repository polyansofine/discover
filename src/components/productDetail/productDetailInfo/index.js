import React, { useEffect, useState } from "react";
import cx from "classnames";
import wifi from "../../../assets/images/icons/wifi.svg";
import parking from "../../../assets/images/icons/Feature_parking.svg";
import toilet from "../../../assets/images/icons/Toilet-pictogram.svg";
import dining from "../../../assets/images/icons/dining.svg";
import washrooms from "../../../assets/images/icons/washrooms.svg";
import seating from "../../../assets/images/icons/seating.svg";
import refreshments from "../../../assets/images/icons/refreshments.svg";
import lounge from "../../../assets/images/icons/Bar.svg";

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
  return (
      <div className="row">
        {JSON.parse(mega_slider_images).map((value, index) => (
          <div className="col-sm-6" key={index} onClick={() => { }}>
           <img src={`http://api.discovershurooq.ae/files/${value}`}></img>
          </div>
        ))}
      </div>
  )
}

function ProductDetailInfo(props) {
  const { packageDetails } = props;
  const [activeTab, setActiveTab] = useState(1);
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
  return (
    <div className="package-detail-info">

      <div className="tab-btns">
        {tabs.map(({ id, name }) => (
          <button
            key={id}
            className={cx("btn", { active: id === activeTab })}
            onClick={() => setActiveTab(id)}
          >
            {name}
          </button>
        ))}
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

export default ProductDetailInfo;
