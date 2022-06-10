import headBanner from "../../../assets/images/backgrounds/head-banner.png";
import LinkPage from "../../LinkPage";
import { Container } from "reactstrap";

export default function HeaderBanner(props) {
  const { backgroundImage = headBanner, linkPage = [], destinationName = "", destinationDescription = "" ,destinationHoverDescription=""} = props;
  return (
    <div>
      {!backgroundImage.includes("null") ? <section className="head-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Container>
          <div />
          <div>
            <h1 >{destinationName}</h1>
            <p className="main-dec mobile-only" >
                {destinationDescription}
              </p>
              <p className="main-dec  desktop-only" >
              {destinationHoverDescription}
             </p>
          </div>
        </Container>
      </section>
        :
        <section className="head-banner" style={{ backgroundImage: `url(${headBanner})` }}>
          <Container>
            <div />
            <div>
              <h1 >{destinationName}</h1>
              <p className="main-dec mobile-only">
                {destinationDescription}
              </p>
              <p className="main-dec  desktop-only">
              {destinationHoverDescription}
             </p>
            </div>
          </Container>
        </section>
      }
    </div>
  );
}
