import { Container } from "reactstrap";
import bannerImage from "../../../assets/images/backgrounds/h-banner.png";
import bottomContentData from "./bottomContentData";
import SearchDestination from "../../SearchDestination";
import CaretRight from "../../../assets/images/icons/CaretRight.svg";
import { Link } from "react-router-dom";

function BottomContent() {
   return (
      <div className="b-bottom-content">
         {bottomContentData.map(({ icon, title, link }, index) => (
            <div key={index} className="content">
               <Link to={link}>
                  <div className="item">
                     <img src={icon} className="icon" />
                     <p className="b-title">{title}</p>
                  </div>
               </Link>
            </div>
         ))}
      </div>
   );
}

const HomeBanner = (props) => {
   const { data, homeData } = props;

   return (
      <div>
         <section
            className="h-banner"
            style={{
               backgroundImage: `url(${
                  homeData?.main_hero_bg_image == ""
                     ? bannerImage
                     : `http://api.discovershurooq.ae/files/` + homeData?.main_hero_bg_image
               })`,
            }}
         >
            <Container>
               <span className="scrollText">
                  scroll down
                  <img src={CaretRight} alt="" />
               </span>
               <div />
               <div>
                  <h1>Discover the best of Sharjah’s sights, activities, culture and more</h1>
                  <SearchDestination data={data} />
               </div>
               <BottomContent />
            </Container>
         </section>
      </div>
   );
};

export default HomeBanner;
