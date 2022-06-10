import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import aboutImage from "../../../assets/images/backgrounds/about.png";
import { Container } from "reactstrap";
import { scrollToTopSmooth } from "../../../util";
import { Button } from "reactstrap";
import { LineArrow } from "../../../components/SvgComponents";

export default function AboutUs() {
   const history = useHistory();

   return (
      <section className="about-us-sec" style={{ backgroundImage: `url(${aboutImage})` }}>
         <Container>
            <h2 className="sec-title">About Discover Shurooq</h2>
            <p>Explore all of Shurooq’s destinations, services, and special offers from one stop.</p>
            {/* <Link to="/" onClick={scrollToTopSmooth} className="btn btn-primary">
          More
        </Link> */}

            <Button color="primary" style={{ width: 80 }} className="arrow" onClick={() => history.push(`/aboutus`)}>
               <span>
                  More
                  <LineArrow />
               </span>
            </Button>
         </Container>
      </section>
   );
}
