import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrandVoucherCard } from "../../components/cards";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import ContentLoader from "react-content-loader";

const Cards = (props) => {
  const t = useTranslation();
  const { voucherData } = props;
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);
  return (
    <Row className="justify-content-center">
      {voucherData?.data?.length > 0 ? (
        voucherData?.data?.map((data, index) => (
          <Col key={index} index={index} xs={12} md={6} xl={4} className="mb-3">
            <BrandVoucherCard {...data} />
          </Col>
        ))
      ) : (
        <Col className="mb-3">
          <p>{t("vouchers.not_available")}</p>
        </Col>
      )}
    </Row>
  );
};

const VouchersDestination = (props) => {
  const t = useTranslation();
  const { data, voucherData, newLocation, locations, visible, url_slug } = props;
  const history = useHistory();

  const changeLocation = (e) => {
    if (e.target.value == "-1") {
      newLocation();
      return;
    }
    let cord = {};
    cord.latitude = locations[e.target.value].lat;
    cord.longitude = locations[e.target.value].lan;
    cord.id = locations[e.target.value].id;
    let url = locations[e.target.value].url_slug;
    history.push(`${url}`);
    newLocation(JSON.stringify(cord));
  };
  if (voucherData == "") {
    let cord = {};
    if (locations) {
      cord.latitude = locations[0]?.lat;
      cord.longitude = locations[0]?.lan;
      cord.id = locations[0]?.id;
      newLocation(JSON.stringify(cord));
    }
  }
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // if (data.lenght > 0) {
    window.scrollTo({ behavior: "smooth", top: 0 });
    setTimeout(() => setLoader(false), 2000);
    // }
  }, [data]);
  const renderLoader = () => (
    <Row>
      {["", "", "", "", "", ""].map((data, index) => (
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
      ))}
    </Row>
  );

  return (
    <section className="pt-40">
      {/* <Container> */}
      <div className="d-flex">
        <div className="flex-grow-1 mb-20">
          <h2 className="sec-title">{t("vouchers.heading")}</h2>
        </div>
      </div>
      <div className="location-select">
        {visible ?? (
          <select
            class="w-100"
            name="country"
            onChange={changeLocation}
            defaultValue="Select Destination"
            placeholder="select"
          >
            <option value={-1}>{t("vouchers.select")}</option>
            {locations?.map((city, id) => {
              // return <option key={id} value={id}>{city.arabic_name}</option>

              if (city.url_slug == url_slug) {
                return (
                  <option key={id} value={id} selected={true}>
                    {localStorage.getItem("user_language") == "en" ? city.name : city.arabic_name}
                  </option>
                );
              } else {
                return (
                  <option key={id} value={id}>
                    {localStorage.getItem("user_language") == "en" ? city.name : city.arabic_name}
                  </option>
                );
              }
            })}
          </select>
        )}
        {visible ?? (
          <button onClick={() => newLocation()}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png"
              alt=""
            />
          </button>
        )}
      </div>
      {loader | (data.lenght === 0) ? (
        renderLoader()
      ) : (
        <Cards data={data} voucherData={voucherData} />
      )}

      {/* </Container> */}
    </section>
  );
};

export default VouchersDestination;
