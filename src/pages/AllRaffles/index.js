import React, { useEffect, useState } from "react";
import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Container } from "reactstrap";
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

const AllRaffles = (props) => {
  const t = useTranslation()

  const { getRaffleByInvoice, raffleDataByInvoice } = props;
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    const raffleData = new FormData();
    raffleData.append("action", "listRafflesByInvoice");
    raffleData.append("action", "getRaffleTickets");
    getRaffleByInvoice(raffleData);
  }, []);

  return (
    <div>
      <UploadBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "AllRaffles Shurooq" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div>
            <Container fluid>
              <h2 className="s-title mb-4">
                <Link to="/" onClick={scrollToTopSmooth}>
                  <img className="mr-20" src={leftLineArrow} alt="back" />
                  {t('raffles.all_raffles')}
                </Link>
              </h2>
              <Row className="justify-content-between">
                {
                  raffleDataByInvoice.length > 0 ?
                    raffleDataByInvoice.map((data, index) => (
                      <Col key={index} md={6} className="mb-20">
                        <RaffleTicketCard data={data} />
                      </Col>
                    )) :
                    <div style={{ textAlign: 'center', width: '100%', marginTop: '100px' }}>
                      <p className="mb-0">{t('raffles.warning_message')}</p>
                    </div>
                }
              </Row>
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
)(withRouter(AllRaffles));
