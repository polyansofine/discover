import React, { useEffect, useState } from "react";
import ContactBanner from "../../components/banners/ContactBanner";
import { Container } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { connect, useSelector } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import { Link } from "react-router-dom";
import leftLineArrow from "../../assets/images/icons/line-arrow-left.svg";
import { RaffleTicketCard } from "../../components/cards";
import { scrollToTopSmooth } from "../../util";
import { Grid, Typography } from "@material-ui/core";

const ContactUs = (props) => {
  const t = useTranslation()

  return (
    <div>
      <ContactBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Contact Us" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div>
            <Container fluid>
              <Grid direction="column" container alignItems="center">
                <Grid item md={6} sm={12}>

                  <p>
                    To raise your concerns please contact our 24x7 Help Support
                    Currently, the helpline is available in English and Arabic.
                    In case you need any further assistance, you can register your issue with us. We will try to solve your concern at the earliest.
                  </p>
                </Grid>
                    <div className="f-icons" style={{fontSize: '350%'}} >
                        <i className="far fa-envelope fa-lg envelop px-2"></i>
                        <i className="fab fa-youtube fa-lg you px-2" ></i>
                        <i className="fab fa-facebook fa-lg face px-2" ></i>
                        <i className="fab fa-instagram fa-lg insta px-2" ></i>
                     </div>
              </Grid>
            
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
)(withRouter(ContactUs));
