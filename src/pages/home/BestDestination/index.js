import { useEffect, useRef, useState } from "react";
import { Button, Container } from "reactstrap";
import OwlCarousel from "react-owl-carousel2";
import slideData from "./slideData";
import SlideCard from "../../../components/SlideCard";
import ContentLoader from "react-content-loader";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";

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
      767: {
         items: 3,
      },
      991: {
         items: 3,
      },
      1200: {
         items: 4,
      },
      // 1600: {
      //   items: 5,
      // },
   },
};

const events = {
   onDragged: function (event) {},
   onChanged: function (event) {},
};

export default function BestDestination(props) {
   const [loader, setLoader] = useState(true);
   const history = useHistory();
   const { data } = props;
   const refferencr = useRef(null);

   useEffect(() => {
      // if (data.lenght > 0) {

      setTimeout(() => setLoader(false), 2000);
      // }
   }, [data]);

   const renderLoader = () => (
      <OwlCarousel ref={refferencr} options={options} events={events}>
         {["", "", "", "", "", "", "", "", ""].map((data, index) => (
            <div key={index} className="book-SlideCard-wrapper">
               <ContentLoader
                  speed={2}
                  // width={638}
                  // height={420}
                  viewBox="0 0 638 520"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  {...props}
               >
                  <rect x="1" y="0" rx="3" ry="3" width="638" height="380" />
                  <rect x="19" y="396" rx="3" ry="3" width="128" height="15" />
                  <rect x="21" y="433" rx="3" ry="3" width="410" height="6" />
                  <rect x="28" y="449" rx="3" ry="3" width="380" height="6" />
                  <rect x="430" y="482" rx="3" ry="3" width="178" fill="red" height="37" />
               </ContentLoader>
            </div>
         ))}
      </OwlCarousel>
   );

   const renderSlides = () => (
      <OwlCarousel ref={refferencr} options={options} events={events}>
         {data.slice(0, 7).map((data, index) => (
            <div key={index} className="book-SlideCard-wrapper">
               <SlideCard {...data} />
            </div>
         ))}
      </OwlCarousel>
   );

   return (
      <section className="BestDestination-section">
         <Container>
            <p className="sec-title-heading">Explore</p>
            <Grid container direction="row" justifyContent="space-between" alignItems="center"> 
               <h2 className="sec-title">Our Destinations</h2>
               <Button color="primary" style={{cursor: 'pointer',zIndex: 1000}} onClick = {() => history.push("/view-all-destination")} className="read-more-btn" >SEE ALL</Button>
            </Grid>
         </Container>
         <div className="book-slider-wrapper">
            <div className="book-slider">
               {/* <OwlCarousel ref={refferencr} options={options} events={events}>
            {slideData.map((data, index) => (
              <div key={index} className="book-SlideCard-wrapper">
                <SlideCard {...data} />
              </div>
            ))}
          </OwlCarousel> */}
               {loader | (data.lenght === 0) ? renderLoader() : renderSlides()}
            </div>
         </div>
      </section>
   );
}
