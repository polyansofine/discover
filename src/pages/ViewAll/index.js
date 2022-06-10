import { Container, Row, Col } from "reactstrap";
// import starIcon from "../../assets/images/icons/star.svg";
import mapIcon from "../../assets/images/icons/maps-and-flags.png";
import * as userAction from "../../actions/user-action-type";
import HeaderBanner from "../../components/banners/HeaderBanner";
import cx from "classnames";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-multi-lang";
import ReactPixel from "react-facebook-pixel";
import ContentLoader from "react-content-loader";
import headBanner from "../../assets/images/headerImages/view-all-destiations-AND-Gallery.jpg";


function RenderBookCard(props) {
  const { name, img, id, url_slug,hover_text } =
    props;
  const history = useHistory();
  const t = useTranslation();

  const top = () => (
    <div className="top-content">
      <div>
        {name ?
          <p className="rating">
            <img src={mapIcon} alt="rating" />
            {name}
          </p> :
          <p></p>
        }
      </div>
    </div>
  );

  const MouseOver=(event)=>{
   
    if(event.target.querySelector(".dec"))
      event.target.querySelector(".dec").style.display = 'block';
  }
  
  const MouseOut=(event)=>{
    if(event.target.querySelector(".dec"))
      event.target.querySelector(".dec").style.display="none";
  }
  


  const bottom = () => (
    <div className="bottom-content">
      <div>
        {localStorage.getItem("user_language") == "en" ? (
          <><p className="title pr-4">{name}</p>
          <p className="dec" style={{"display":"none"}}>{hover_text}</p>
          </>
        ) : (
          <>
          <p className="title pr-4">{name}</p>
          <p className="dec">{hover_text}</p>
          </>
        )}
      </div>
    </div>
  );
  const image = "https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/" + img;
  return (
    <div
      className="book-exp-card"
      onClick={() => history.push(`../d/${url_slug}`)}
    
      onMouseEnter={MouseOver} onMouseLeave={MouseOut}  
    >
      <img className="render-image" src={image} alt="" />
      <div className="content">
        {top()}
        {bottom()}
      </div>
    </div>
  );
}

function ViewAll(props) {
  const [loader, setLoader] = useState(true);
  const t = useTranslation();
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);

  const {
    destinationData,
    getDestinationData,
  } = props;
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const formData = new FormData();
    formData.append("action", "destinations");
    getDestinationData(formData);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, [destinationData]);

  const renderLoader = () => (
    <Row>
      {["", "", "", "", "", ""].map((data, index) => (
        <Col md={6} key={"bookData" + index} className="book-exp-card-col">
          <ContentLoader
            speed={2}
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
        </Col>
      ))}
    </Row>
  );

  const renderData = () => (
    <Row>
      {destinationData.length == 0 ? <Col><div style={{ justifyContent: 'center', display: 'flex' }}><p>No Packages Found</p></div></Col> : <div></div>}
      {destinationData.map((data, index) =>
        <Col md={6} key={"bookData" + index} className="book-exp-card-col">
          <RenderBookCard {...data} />
        </Col>
      )
      }
    </Row>
  );

  return (
    <>
      <HeaderBanner backgroundImage={headBanner} />
      <section className="book-youre-experience-section">
        <Container>
          {/* <h2 className="sec-title">All Destinations</h2> */}
          {loader ? renderLoader() : renderData()}
        </Container>
      </section>
    </>
  );
}
const mapStateToProps = ({
  user: {
    destinationData,
  },
}) => ({
  destinationData,
});

const mapDispatchToProps = {
  getDestinationData: userAction.getDestinationData,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewAll));
