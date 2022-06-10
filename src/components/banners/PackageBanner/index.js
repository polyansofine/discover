import headBanner from "../../../assets/images/backgrounds/package.png";
import LinkPage from "../../LinkPage";
import OwlCarousel from "react-owl-carousel2";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const slideData = [
  { image: headBanner },
  { image: headBanner },
  { image: headBanner },
  { image: headBanner },
  { image: headBanner },
];

const options = {
  nav: false,
  loop: true,
  autoplay: true,
  items: 1,
};
const events = {
  onDragged: function (event) { },
  onChanged: function (event) { },
};

export default function PackageBanner(props) {
  const refferencr = useRef(null);
  const { backgroundImage = headBanner, sliderImage="", linkPage = [] } = props;
  const [imgData, setImageData] = useState([]);
  const packageDetails = useSelector(({user}) => user.packageDetails)
  // useEffect(() => {
  //   let data = [];
  //   data.push({image: backgroundImage});
  //   let sld = JSON.parse(sliderImage);
  //   for (var i = 0; i < sld.length; i++) {
  //     data.push({image: sld[i]});
  //   }

  //   setImageData(data);
  // }, [])

  return (
    <section className="package-banner">
      <div className="content">
        <div className="slider-wrapper">
          <OwlCarousel ref={refferencr} options={options} events={events}>
            {/* {slideData.map(({ image }, index) => ( */}
              <div>
                <div className="render-iamge" style={{ backgroundImage: `url('${`https://api.discovershurooq.ae/files/${backgroundImage}`}')` }}></div>
              </div>
            {/* ))} */}
          </OwlCarousel>
        </div>
        <div className="b-content">
          <div>
            <p className="name-text">{packageDetails?.destination_name}</p>
          </div>
        </div>
        <LinkPage linkPage={linkPage} />
      </div>
    </section>
  );
}
