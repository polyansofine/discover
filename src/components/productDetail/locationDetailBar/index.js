import React, { useState, Fragment } from "react";
import { Row, Col, Button } from "reactstrap";

import calendarIcon from "./Calendar.svg";
import locationIcon from "./Location.svg";
import starIcon from "./Star.svg";

// const Content = (props) => {
//   const { icon, title } = props;
//   return (
//     <div className="">
//       <img src={icon} />
//       <div>
//         <p>{title}</p>
//         <p>Husøy, Norway</p>
//       </div>
//     </div>
//   );
// };

function LocationDetailBar(props) {
  const { adultPrice, childPrice } = props;
  return (
    <div className="LocationDetailBar">
      <div className="wrapper">
       
        <div>
          <div className="d-table mx-auto">
            <p className="price">{adultPrice}</p>
            <p className="person">Per Person</p>
          </div>
        </div>
        {parseInt(childPrice) > 0 &&
          <>
            <div>
              <div className="d-table mx-auto">
                <p className="price">{childPrice}</p>
                <p className="person">Per Person</p>
              </div>
            </div>
            <div className="text-right">
              <Button color="more" className="ml-auto">
                Buy Now <span>{">"}</span>
              </Button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default LocationDetailBar;
