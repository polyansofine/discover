import { Row, Col } from "reactstrap";
import Content from "./Content";
import PackageOptions from "./PackageOptions";

export default function PackageCard() {
  return (
    <section className="PackageCard">
      <div className="PackageCard-card">
        <Row>
          <Col lg={6}>
            <Content />
          </Col>
          <Col lg={6}>
            <PackageOptions />
          </Col>
        </Row>
      </div>
    </section>
  );
}
