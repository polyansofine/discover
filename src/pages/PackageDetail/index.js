import PackageBanner from "../../components/banners/PackageBanner";
import PackageCard from "./PackageCard";
import { useEffect } from 'react';
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";

const Package = (props) => {
  const { packageDetails, getPackageDetails } = props;
  const { package_slug } = props.match.params;

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    const data = new FormData();
    data.append("action", "packagesDetails");
    data.append("slug", package_slug);
    getPackageDetails(data);

  }, []);

  return (
    <>
      <PackageBanner
        // linkPage={[
        //   { name: packageDetails?.package_name },
        // ]}
        backgroundImage={packageDetails?.img}
        sliderImage={packageDetails?.mega_slider_images}
      />
      <PackageCard />
    </>
  );
}


const mapStateToProps = ({
  user: {
    packageDetails,
  },
}) => ({
  packageDetails,
});

const mapDispatchToProps = {
  getPackageDetails: userAction.getPackageDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Package));