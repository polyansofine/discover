import React, { useEffect, useState } from "react";
import InvoiceBanner from "../../components/banners/InvoiceBanner";
import { useHistory } from "react-router";
import { connect, useSelector } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import VouchersDestination from "../VouchersDestination";
import { Link } from "react-router-dom";
import { LineArrow } from "../../components/SvgComponents";
import OrderRow from "../../components/orderRow";
import { Container, Row, Col } from "reactstrap";

const Invoics = (props) => {
  document.title = "Invoics - DiscoverShurooq";
  const t = useTranslation()
  const {
    getInvoice,
    invoiceData,
    raffleStatData,
    getRaffleStats,
    token,
  } = props;
  const storeData = useSelector(store => store)
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname)
  document.title = "Invoices - DiscoverShurooq";
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    
    const data = new FormData();
    data.append("action", "listInvocies");
    getInvoice(data);

    const raffleData = new FormData();
    raffleData.append("action", "getRaffleStats");
    getRaffleStats(raffleData);
  }, []);

  return (
    <div>
      <InvoiceBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Invoices Shurooq" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          {token ? (
            <Row>
              {invoiceData?.length == 0
                ?
                <p style={{ marginTop: 250 }}>{t('invoices.warning_message')}</p>
                :
                invoiceData?.map((data, index) => (
                  <Col md={6} key={"bookData" + index} className="book-exp-card-col">
                    <OrderRow
                      key={index}
                      data={data}
                      name="Joe Doe"
                      tickets="2"
                      address="43 Street, San Francisco, California, United States"
                      currency="AED"
                      amount="900"
                      dot_color="green"
                      date="Apr 9, 2020"
                    />
                  </Col>
                ))
              }
            </Row>
          ) : (
            <div style={{ display: "flex", marginTop: 80, justifyContent: "center" }}>
              <div className="d-table mx-auto">
                <Link style={{ width: 220 }} className="btn btn-primary arrow" to="/login">
                  <span>
                    <LineArrow />
                    Login to show Invoices
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ user: { invoiceData, raffleStatData, token } }) => ({
  invoiceData,
  raffleStatData,
  token,
});

const mapDispatchToProps = {
  getInvoice: userAction.getInvoice,
  getRaffleStats: userAction.getRaffleStats,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Invoics));
