import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Input, Button } from "reactstrap";
import cx from "classnames";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import { Component, useState } from "react";
import { Link } from "react-router-dom";
import { LineArrow } from "../../components/SvgComponents";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const About = () => (
  <div className="text-content">
    <p>
      Get ready for an exciting off-road experience as you discover the most spectacular vistas
      Mleiha has to offer. Your journey will last approximately 6 hours as you take in views from
      two different peaks, visit ancient sites, stop for picture-perfect photos of the stunning
      landscape and conclude your adventure in the relaxing setting of our Sunset Lounge.
    </p>
  </div>
);

const Terms = () => (
  <div className="text-content">
    <p>
      Get ready for an exciting off-road experience as you discover the most spectacular vistas
      Mleiha has to offer.
    </p>
  </div>
);

const Faq = () => (
  <div className="text-content">
    <p>
      Get ready for an exciting off-road experience as you discover the most spectacular vistas
      Mleiha has to offer. Your journey will last approximately 6 hours as you take in views from
      two different peaks, visit ancient sites, stop for picture-perfect photos of the stunning
      landscape and conclude your adventure in the relaxing setting of our Sunset Lounge.
      Get ready for an exciting off-road experience as you discover the most spectacular vistas
      Mleiha has to offer. Your journey will last approximately 6 hours as you take in views from
      two different peaks, visit ancient sites, stop for picture-perfect photos of the stunning
      landscape and conclude your adventure in the relaxing setting of our Sunset Lounge.
    </p>
  </div>
);

function UploadContent() {
  const btns = [{ name: "About", id: 1 }, { name: "Terms", id: 2 }, { name: "Faq", id: 3 }];
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="UploadContent">
      {/* <div className="tab-package-btn w-100">
        <div className="wrapper">
          {btns.map(({ name, active = false }) => (
            <button className={cx({ active: active })}>{name}</button>
          ))}
        </div>
      </div>
      <p>
        Get ready for an exciting off-road experience as you discover the most spectacular vistas
        Mleiha has to offer. Your journey will last approximately 6 hours as you take in views from
        two different peaks, visit ancient sites, stop for picture-perfect photos of the stunning
        landscape and conclude your adventure in the relaxing setting of our Sunset Lounge.
      </p> */}

      <div className="tab-package-btn">
        <div className="" style={{ overflowX: "auto", display: "flex", paddingTop: 25, paddingBottom: 25, paddingLeft: 15, paddingRight: 15 }}>
          {btns.map(({ id, name }) => (
            <button key={id} className={cx("btn", { active: id === activeTab })} onClick={() => setActiveTab(id)} >{name}</button>
          ))}
        </div>
      </div>
      <div className="content">
        {activeTab === 1 && <About />}
        {activeTab === 2 && <Terms />}
        {activeTab === 3 && <Faq />}
      </div>
    </div>
  );
}
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDoneButton: false,
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [],
    };
  }

  handleOnUpdate(name) {
  }
  componentDidMount() {
    const { token, history } = this.props;
    localStorage.setItem("pathname", history.location.pathname);
  }

  fileUploadToServer = () => {
    const { files } = this.state;
    const { uploadFile } = this.props;
    const data = new FormData();
    data.append("action", "uploadInvoice");
    data.append("filepond", files);
    uploadFile(data);
  };

  onFileUpload = (fileItems) => {
    this.setState(
      {
        files: fileItems.map((fileItem) => fileItem.file),
      },
      () => {
        this.fileUploadToServer();
      }
    );
  };
  handleInit() {
    this.setState({
      showDoneButton: true,
    });
  }

  render() {
    const { token, history } = this.props;
    const { showDoneButton } = this.state;

    return (
      <div>
        <UploadBanner
          linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Upload File" }]}
        />
        <section className="uploadSection">
          <div className="UploadCard">
            <Row>

              <Col md={6}>
                <div className="UploadFile">

                  {this.props.token ? (
                    <div>
                      <FilePond
                        ref={(ref) => (this.pond = ref)}
                        files={this.state.files}
                        allowMultiple={true}
                        server={`https://api.discovershurooq.ae/api/?token=${token}&action=uploadInvoice`}
                        // oninit={() => this.handleInit()}
                        onload={() => this.handleOnUpdate()}
                        forceRevert={true}
                        onprocessfiles={() => this.handleInit()}
                        onupdatefiles={(fileItems) => {
                          // Set currently active file objects to this.state
                          this.setState({
                            files: fileItems.map((fileItem) => fileItem.file),
                          });
                        }}
                        labelIdle='Select Images to Upload Your Invoices - <span class="filepond--label-action">Browse</span>'
                      ></FilePond>
                      <div className="links" style={{ textAlign: 'center' }}>
                        <a className="btn btn-primary w-25" style={{ margin: '10px' }}>Invoices</a>
                        <a className="btn btn-primary w-25">Raffles</a>
                      </div>
                    </div>
                  ) : (
                    <div className="fake-uploadBox">
                      {/* {this.props.t("Upload.select_image")} -{" "}
                      <span className="filepond--label-action">
                        {this.props.t("Upload.browse")}
                      </span> */}
                    </div>
                  )}

                  <div className="d-flex justify-content-center  uploadFloatButton">
                    {showDoneButton && (
                      <Button
                        className="w-50"
                        color="voucher-blue"
                        onClick={() => history.push("invoics")}
                      >
                        {this.props.t("Upload.done")}
                      </Button>
                    )}
                  </div>
                  {!this.props.token && (
                    <div style={{ display: "flex", marginTop: 80, justifyContent: "center" }}>
                      <div className="d-table mx-auto">
                        <Link style={{ width: 220 }} className="btn btn-primary arrow" to="/login">
                          <span>
                            <LineArrow />
                            Login to Upload Invoice
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </Col>
              <Col md={6}>
                <UploadContent />
              </Col>
            </Row>

            <Row>
              <img className="upload-banner-image" src="https://i.postimg.cc/vmhwCsm8/image.png" style={{ margin: 'auto' }} />
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

function App(props) {
  const t = useTranslation();
  return <Upload t={t} {...props} />;
}
const mapStateToProps = ({ user: { loginData, loginStatus, token } }) => ({
  loginData,
  loginStatus,
  token,
});

const mapDispatchToProps = {
  uploadFile: userAction.uploadFile,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
