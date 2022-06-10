import React, { useEffect, useState } from "react";
import AboutBanner from "../../components/banners/AboutBanner";
import { Row, Col, Container } from "reactstrap";
import { connect, useSelector } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-multi-lang";

const AboutUs = (props) => {
  const t = useTranslation()

  return (
    <div>
      <AboutBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "About Us" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div>
            <Container fluid>
            <h2 class="pb-3">Welcome to Discover Shurooq Website.</h2>
                <p>Discover Shurooq is your one stop site to discover the latest and greatest events, services and special offers from Shurooq’s full range of destinations. 
Learn about what’s happening in the city, book tickets to events and enter competitions all from here.</p>

              <h5>Newsletter:</h5>
               <p>Sign up to get the latest offers and events right to your inbox!</p> 
             <a href="/register" className="btn btn-primary">Signup</a>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ user: { raffleDataByInvoice } }) => ({
  raffleDataByInvoice,
});

const mapDispatchToProps = {
  getRaffleByInvoice: userAction.getRaffleByInvoice,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AboutUs));
