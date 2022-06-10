import React from "react";
import pinIcon from "../../../assets/images/icons/pin.svg";
import subtractionIcon from "../../../assets/images/icons/subtraction.svg";
import { useHistory } from "react-router-dom";

const DestinationCard = (props) => {
  const history = useHistory();
  const { img, name, location, id, url_slug, arabic_name } = props;
  return (
    <div className="destination-card" onClick={() => history.push(`d/${url_slug}`)}>
      <img className="location-image" src={`https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${img}`} alt={name} />
      <span className="layer" />
      <div className="content">
        {localStorage.getItem('user_language') == 'en'
          ?
          <h2 className="name">{name}</h2>
          :
          <h2 className="name">{arabic_name}</h2>
        }
      </div>
    </div>
  );
};

export default DestinationCard;
