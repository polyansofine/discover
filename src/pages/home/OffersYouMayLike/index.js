import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { Container, Row, Col } from "reactstrap";
import offerData from "./offerData";
import RenderCard from "./RenderCard";

export default function OffersYouMayLike(pros) {
  const [loader, setLoader] = useState(true);
  const { data = [] } = pros;

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, [data]);
  const renderLoader = () =>
    ["", "", "", "", "", ""].map((data, index) => (
      <Col className="offer-card-col" sm={6} lg={4} key={"offerData" + index}>
        <ContentLoader
          speed={2}
          // width={400}
          // height={120}
          viewBox="0 0 400 120"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          // {...props}
        >
          <rect x="21" y="17" rx="6" ry="6" width="107" height="91" />
          <rect x="144" y="22" rx="3" ry="3" width="148" height="14" />
          <rect x="145" y="40" rx="3" ry="3" width="83" height="10" />
          <rect x="143" y="62" rx="3" ry="3" width="201" height="8" />
          <rect x="282" y="92" rx="3" ry="3" width="101" height="12" />
        </ContentLoader>
      </Col>
    ));

  const renderCards = () =>
    data.map((data, index) => (
      <Col className="offer-card-col" sm={6} lg={4} key={"offerData" + index}>
        <RenderCard {...data} />
      </Col>
    ));

  return (
    <section className="OffersYouMayLike-section">
      <Container>
        <h2 className="sec-title">Top Offers</h2>
        {/* <Row>
          {offerData.map((data, index) => (
            <Col className="offer-card-col" sm={6} lg={4} key={"offerData" + index}>
              <RenderCard {...data} />
            </Col>
          ))}
        </Row> */}
        <Row>
          {/* {data?.slice(0, 4).map((data, index) => ( */}
          {/* {renderLoader()} */}
          {loader | (data.lenght === 0) ? renderLoader() : renderCards()}
        </Row>
      </Container>
    </section>
  );
}
