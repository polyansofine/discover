import React, { useEffect, useState } from "react";
import UploadBanner from "../../components/banners/UploadBanner";
import { Row, Col, Alert } from "reactstrap";
import cx from "classnames";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import Platform from "react-platform-js";
import { useTranslation } from "react-multi-lang";
import VouchersDestination from "../VouchersDestination";
import VoucherBanner from "../../components/banners/VoucherBanner";

const NearbyVouchers = (props) => {
  document.title = "Vouchers - DiscoverShurooq";
  const { url_slug } = props.match.params;
  const t = useTranslation();
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);
  const [alerttext, setAlerttext] = useState("");
  const [isCurrentLocation, setCurrentLocation] = useState(false);
  const {
    getdestPackages,
    getDestPackageStatus,
    destPackagesData,
    locationData,
    destinationVoucherData,
    getDestVouchers,
    getLocation,
    homeData,
    destinationData,
    emptyLocation,
    getDestinationData,
  } = props;
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    
    if (props.location.state != undefined) {
      const data = new FormData();
      data.append("action", "packages");
      data.append("id", props.location.state.destination_id);
      const voucherDta = new FormData();
      voucherDta.append("action", "listVoucherByDesitnation");
      voucherDta.append("destination_id", props.location.state.destination_id);
      getdestPackages(data);
      getDestVouchers(voucherDta);
    }
  }, []);

  const getCurrentLocation = () => {
    setCurrentLocation(true);
    const destinationData = new FormData();
    destinationData.append("action", "destinations");
    getDestinationData(destinationData);
    const locationdata = new FormData();
    if (Platform.OS == "iOS") {
      navigator.geolocation.getCurrentPosition(function (position) {
        setAlerttext("");
        locationdata.append("action", "listVourchers");
        locationdata.append("lat", position.coords.latitude);
        locationdata.append("lang", position.coords.longitude);
        getLocation(locationdata);
        localStorage.setItem(
          "location",
          JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      });
    } else {
      navigator.permissions.query({ name: "geolocation" }).then(function (permissionStatus) {
        if (permissionStatus.state === "granted") {
          navigator.geolocation.getCurrentPosition(function (position) {
            locationdata.append("action", "listVourchers");
            locationdata.append("lat", position.coords.latitude);
            locationdata.append("lang", position.coords.longitude);
            getLocation(locationdata);
            localStorage.setItem(
              "location",
              JSON.stringify({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              })
            );
          });
        } else if (permissionStatus.state === "prompt") {
          emptyLocation();
          navigator.geolocation.getCurrentPosition(function (position) {});
        } else if (permissionStatus.state === "denied") {
          setAlerttext(t("vouchers.permission_error"));
          emptyLocation();
        }
        permissionStatus.onchange = function () {
          if (this.state === "granted") {
            navigator.geolocation.getCurrentPosition(function (position) {
              locationdata.append("action", "listVourchers");
              locationdata.append("lat", position.coords.latitude);
              locationdata.append("lang", position.coords.longitude);
              getLocation(locationdata);
              localStorage.setItem("location", {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });
          } else if (this.state === "denied") {
            setAlerttext(t("vouchers.permission_error"));
            emptyLocation();
          }
        };
      });
    }
  };
  useEffect(() => {
    let cord = {};
    if (destinationData?.length != 0 && url_slug != "location") {
      for (var i = 0; i < destinationData?.length; i++) {
        if (destinationData[i]["url_slug"] == url_slug) {
          cord.latitude = destinationData[i].lat;
          cord.longitude = destinationData[i].lan;
          cord.id = destinationData[i].id;
          locationChange(JSON.stringify(cord));
        }
      }
    }
    if (url_slug == "location") {
      getCurrentLocation();
    }
  }, []);

  const locationChange = (coordinates) => {
    const locationdata = new FormData();
    setCurrentLocation(false);
    if (coordinates) {
      const newCoordinates = JSON.parse(coordinates);
      locationdata.append("action", "listVoucherByDesitnation");
      locationdata.append("destination_id", newCoordinates.id);
      getLocation(locationdata);
      localStorage.setItem("location", JSON.stringify(coordinates));
    } else {
      let url = "location";
      history.push(`${url}`);
      getCurrentLocation();
    }
  };

  return (
    <div>
      <VoucherBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Select Voucher" }]}
      />
      <section className="uploadSection">
        <div className="UploadCard" style={{ background: "#f9f9fa" }}>
          <div>
            {alerttext != "" && <Alert color="danger">{alerttext}</Alert>}
            <VouchersDestination
              data={homeData}
              voucherData={
                props.location.state != undefined ? destinationVoucherData : locationData
              }
              locations={destinationData}
              newLocation={locationChange}
              url_slug={url_slug}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({
  user: {
    getDestPackageStatus,
    destPackagesData,
    destinationVoucherData,
    locationData,
    homeData,
    destinationData,
  },
}) => ({
  getDestPackageStatus,
  destPackagesData,
  destinationVoucherData,
  homeData,
  destinationData,
  locationData,
});

const mapDispatchToProps = {
  getdestPackages: userAction.getdestPackages,
  getDestVouchers: userAction.getDestVouchers,
  getLocation: userAction.getLocation,
  getDestinationData: userAction.getDestinationData,
  emptyLocation: userAction.emptyLocation,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NearbyVouchers));
