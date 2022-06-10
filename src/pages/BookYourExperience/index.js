import { Container, Row, Col } from "reactstrap";
// import starIcon from "../../assets/images/icons/star.svg";
import mapIcon from "../../assets/images/icons/maps-and-flags.png";
import * as userAction from "../../actions/user-action-type";
import HeaderBanner from "../../components/banners/HeaderBanner";
import cx from "classnames";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-multi-lang";
import ReactPixel from "react-facebook-pixel";
import ContentLoader from "react-content-loader";
import "./style.scss";

const tempImage =
  "https://images.unsplash.com/photo-1624561500881-d97c12c521e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";

function RenderBookCard(props) {
  const { package_name, arabic_name, url_slug, price, original_price, child_price, rating, img, destination_id, destinationData, offer_tag, offer_tag_text } =
    props;
  const history = useHistory();
  const t = useTranslation();
  const [destName, setDestName] = useState('');

  useEffect(() => {
    for (var i = 0; i < destinationData?.length; i++) {
      if (destinationData[i]["id"] == destination_id) {
        setDestName(destinationData[i].name)
      }
    }
  }, [])

  const top = () => (
    <div className="top-content">
      <div>
        {destName ?
          <p className="rating">
            <img src={mapIcon} alt="rating" />
            {destName}
            {/* {rating} */}
          </p> :
          <p></p>
        }
      </div>
    </div>
  );

  const bottom = () => (
    <div className="bottom-content">
      <div>
        {localStorage.getItem("user_language") == "en" ? (
          <p className="title pr-4">{package_name}</p>
        ) : (
          <p className="title pr-4">{arabic_name}</p>
        )}
      </div>
      <div>
        <p className="price">
          {original_price == "" ? (
            <> AED {price != "" ? price : child_price} Only</>
          ) : (
            <>
              {/* <del style={{ fontSize: 11 }}> AED {original_price}</del> */}

              <span>
                {t("packages.price")} AED{price}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
  const image = "https://api.discovershurooq.ae/cdn-cgi/image/width=730,height=300,quality=100,sharpen=1/files/" + img;
  return (
    <div className="box" >
      {offer_tag == 1 ?
        <div className="ribbon ribbon-top-right"><span>{offer_tag_text}</span></div> : <div></div>
      }
      <div
        className="book-exp-card"
        onClick={() => history.push(`../p/${url_slug}`)}
      >
        <img className="render-image" src={image} alt="" />
        <div className="content">
          {top()}
          {bottom()}
        </div>
      </div>
    </div>
  );
}

function BookYourExperience(props) {
  const [loader, setLoader] = useState(true);
  const btns = [{ active: "true", name: "All" }, { active: "false", name: "Couples" }, { active: "false", name: "Friends" }, { active: "false", name: "Family" }, { active: "false", name: "Kids" }];
  const t = useTranslation();
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);
  const { url_slug } = props.match.params;

  const [tag, setTag] = useState("All");
  const [backImg, setBackImg] = useState("../../../assets/images/backgrounds/head-banner.png");
  const [destName, setDestName] = useState("");
  const [destDcp, setDestDcp] = useState("");
  const [destHoverDcp, setDestHoverDcp] = useState("");
  const {
    getdestPackages,
    getDestPackageStatus,
    homeData,
    getHomeData,
    destPackagesData,
    destinationVoucherData,
    getDestVouchers,
    destinationData,
    getDestinationData,
  } = props;
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const data = new FormData();
    data.append("action", "packages");
    data.append("slug", url_slug);
    const voucherDta = new FormData();
    voucherDta.append("action", "listVoucherByDesitnation");
    voucherDta.append("slug", url_slug);

    const home_data = new FormData();
    home_data.append("action", "HomeData");

    const formData = new FormData();
    formData.append("action", "destinations");
    getDestinationData(formData);
    getHomeData(home_data);
    getdestPackages(data);
    getDestVouchers(voucherDta);
  }, []);

  for (var i = 0; i < destinationData?.length; i++) {
    if (destinationData[i]["url_slug"] == url_slug) {
      if (destinationData[i]["name"]) {
        document.title = destinationData[i]["name"];
        let randomNum_1 = 0;
        let randomNum_2 = 0;
        let randomNum_3 = 0;
        let contentID = "";
        if (destPackagesData?.length > 0) {
          for (var j = 0; j < destPackagesData?.length; j++) {
            if (j > 0) {
              contentID += ",";
            }
            contentID += `'p-${destPackagesData[j].url_slug}'`;
          }
        }
        ReactPixel.track("ViewContent", {
          content_name: `${destinationData[i]["name"]} - Destination`,
          content_category: "page",
          content_type: "product_group",
          content_ids: `[${contentID}]`,
        });
      }
    }
  }

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);

    for (var i = 0; i < destinationData?.length; i++) {
      if (destPackagesData?.length != 0) {
        if (destinationData[i]['id'] == destPackagesData[0]['destination_id']) {
          setBackImg(`https://api.discovershurooq.ae/files/` + destinationData[i]['featured_image'])
          setDestName(destinationData[i]['name']);
          setDestDcp(destinationData[i]['description']);
          setDestHoverDcp(destinationData[i]['hover_text']);
        }
      }

    }
  }, [destPackagesData]);

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

  const renderData = (tag) => (
    <Row>
      {destPackagesData.length == 0 ? <Col><div style={{ justifyContent: 'center', display: 'flex' }}><p>No Packages Found</p></div></Col> : <div></div>}
      {destPackagesData.map((data, index) =>
        data.hide == "0" && data.enable == "1" && data.checkout.includes("DiscoverShurooq") ? (
          <Col md={6} key={"bookData" + index} className="book-exp-card-col">
            {tag != "All" && !data.tags.includes(tag) ? <div style={{ justifyContent: 'center', display: 'flex' }}></div> : <RenderBookCard {...data} destinationData={destinationData} />}
          </Col>
        ) : null
      )
      }
    </Row>
  );

  const showTagData = (tagName) => {
    setTag(tagName);
  }
  return (
    <>
      <HeaderBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Book Your Experience" }]} backgroundImage={backImg} destinationName={destName} destinationDescription={destDcp} destinationHoverDescription={destHoverDcp}
      />
      
      <section className="book-youre-experience-section">
        <Container>
          <h2 className="sec-title">Book Your Experience</h2>
          <div className="tab-box-btn">
            <div className="wrapper">
              {btns.map(({ active, name }, index) => (
                <button kye={index} className={cx({ active: active })} onClick={e => showTagData(name)}>{name}</button>
              ))}
            </div>
          </div>
          {loader ? renderLoader() : renderData(tag)}
        </Container>
      </section>
    </>
  );
}
const mapStateToProps = ({
  user: {
    homeData,
    getDestPackageStatus,
    destPackagesData,
    destinationVoucherData,
    destinationData,
  },
}) => ({
  homeData,
  getDestPackageStatus,
  destPackagesData,
  destinationVoucherData,
  destinationData,
});

const mapDispatchToProps = {
  getdestPackages: userAction.getdestPackages,
  getHomeData: userAction.getHomeData,
  getDestVouchers: userAction.getDestVouchers,
  getDestinationData: userAction.getDestinationData,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookYourExperience));
