import { Container, Row, Col } from "reactstrap";
import * as userAction from "../../actions/user-action-type";
import HeaderBanner from "../../components/banners/HeaderBanner";
import cx from "classnames";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-multi-lang";
import ReactPixel from "react-facebook-pixel";
import ContentLoader from "react-content-loader";
import mapIcon from "../../assets/images/icons/maps-and-flags.png";

function RenderBookCard(props) {
  const { package_name, arabic_name, url_slug, price, original_price, child_price, rating, img, destination_name } =
    props;
  const history = useHistory();
  const t = useTranslation();
  const top = () => (
    <div className="top-content">
      <div>
        {destination_name ?
          <p className="rating">
            <img src={mapIcon} alt="rating" />
            {destination_name}
            {/* {rating} */}
          </p> :
          <p></p>
        }
      </div>
    </div>
  );

  const bottom = () => (
    <div className="bottom-content">
      {localStorage.getItem("user_language") == "en" ? (
        <h3 className="title pr-4">{package_name}</h3>
      ) : (
        <h3 className="title pr-4">{arabic_name}</h3>
      )}

      {/* <p className="price">
        {original_price == "" ? (
          <> AED {price != "" ? price : child_price} Only</>
        ) : (
          <>
            <del style={{ fontSize: 11 }}> AED {original_price}</del>

            <span>
              {t("packages.price")} AED{price}
            </span>
          </>
        )}
      </p> */}
      {bottomBtn()}
    </div>
  );

  const bottomBtn = () => (
    <div className="bottom-content-btn">
      <p className="price">
        {original_price == "" ? (
          <> AED {price != "" ? price : child_price} Only</>
        ) : (
          <>
            <del style={{ fontSize: 11 }}> AED {original_price}</del>

            <span>
              {t("packages.price")} AED{price}
            </span>
          </>
        )}
      </p>
    </div>
  );
  const image = "https://api.discovershurooq.ae/files/" + img;
  return (
    <div
      className="book-exp-card"
      onClick={() => history.push({ pathname: `/p/${url_slug}` })}
    // style={{ backgroundImage: `url(${image})` }}
    >
      <img className="render-image" src={image} alt="" />
      <div className="content">
        {top()}
        {bottom()}

      </div>
    </div>
  );
}

function SearchDetail(props) {
  const btns = [{ active: "true" }, {}, {}, {}];
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  localStorage.setItem("pathname", history.location.pathname);
  const { d, t } = props.match.params;

  const {
    searchedDestinationData,
    getSearchedDestinationData,
  } = props;
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const formData = new FormData();
    formData.append("action", "search");
    formData.append("search_term", t);
    if (d != -1)
      formData.append("destination_id", d);

    getSearchedDestinationData(formData);

  }, []);

  const renderLoader = () => (
    <Row>
      {["", "", "", "", "", ""].map((data, index) => (
        <Col md={6} key={"bookData" + index} className="book-exp-card-col">
          <ContentLoader
            speed={2}
            // width={638}
            // height={420}
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
      {searchedDestinationData.length == 0 ? <Col><div style={{ justifyContent: 'center', display: 'flex' }}><p>No Packages Found</p></div></Col> : <div></div>}
      {searchedDestinationData.map((data, index) =>
        data.hide == "0" && data.enable == "1" && data.checkout.includes("DiscoverShurooq") ? (
          <Col md={6} key={"bookData" + index} className="book-exp-card-col">
            <RenderBookCard {...data} />
          </Col>
        ) : null
      )}
    </Row>
  );

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, [searchedDestinationData]);

  return (
    <>
      <HeaderBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Book Your Experience" }]}
      />
      <section className="book-youre-experience-section">
        <Container>
          <h2 className="sec-title">Search Discover Shurooq</h2>
          {/* <div className="tab-box-btn">
            <div className="wrapper">
              {btns.map(({ active = false }) => (
                <button className={cx({ active: active })}>Tag text</button>
              ))}
            </div>
          </div> */}
          {loader ? renderLoader() : renderData()}

          {/* <div>
            {searchedDestinationData.map((data, index) => (
              <img className="render-image" src={"https://api.discovershurooq.ae/files/" + data.img} alt="" />
            ))}
          </div> */}
        </Container>
      </section>
    </>
  );
}
const mapStateToProps = ({
  user: {
    searchedDestinationData,
  },
}) => ({
  searchedDestinationData,
});

const mapDispatchToProps = {
  getSearchedDestinationData: userAction.getSearchedDestinationData,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchDetail));
