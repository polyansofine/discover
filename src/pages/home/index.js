import { useEffect, useState } from "react";
import HomeBanner from "../../components/banners/HomeBanner";
import BestDestination from "./BestDestination";
import OffersYouMayLike from "./OffersYouMayLike";
import AboutUs from "./AboutUs";
import BestTraveling from "./BestTraveling";
import { Link, withRouter } from "react-router-dom";
import specialGift from "../../assets/images/special-gift.png";
import { scrollToTopSmooth } from "../../util";
import * as userAction from "../../actions/user-action-type";
import { connect } from "react-redux";
import Kid from "./Kid";
import Family from "./Kid/Family";
import Adventure from "./Kid/Adventure";
function Home(props) {
   // const t = useTranslation()
   const [count, setCount] = useState(0);
   document.title = "Discover Shurooq";
   localStorage.setItem("pathname", "/");
   const {
      getSliderDataStatus,
      getHomeData,
      homeData,
      sliderData,
      getDestinationDataStatus,
      destinationData,
      getSliderData,
      getDestinationData,
      settingData,
      getSettingData,
   } = props;

   useEffect(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });

      const sliderData = new FormData();
      sliderData.append("action", "slider");

      const destinationData = new FormData();
      destinationData.append("action", "destinations");
      const data = new FormData();
      data.append("action", "HomeData");

      const formData = new FormData();
      formData.append("action", "discover_shurooq_homepage_settings");
      getSettingData(formData);

      getHomeData(data);
      getSliderData(sliderData);
      getDestinationData(destinationData);
      // ReactPixel.track('ViewContent', {
      //   content_name: 'Homepage Visit',
      // })
   }, [count]);
   if (count < 1) {
      setTimeout(() => {
         setCount(count + 1);
      }, 1000);
   }
   return (
      <>
         <HomeBanner data={destinationData} homeData={settingData} />
         <BestDestination
            status={getDestinationDataStatus}
            data={destinationData}
            // homeData={homeData}
         />
         <section>
            {
               settingData?.tag1 === "" ? <div></div> :
            <Family slug={settingData?.tag1} header={settingData?.tag1_heading} tagtitle={settingData?.tag1_description }/>
            }
            {
               settingData?.tag2 === "" ? <div></div> :
            <Adventure slug={settingData?.tag2} header={settingData?.tag2_heading} tagtitle={settingData?.tag2_description }/>
            }
            {
               settingData?.tag3 === "" ? <div></div> :
            <Kid slug={settingData?.tag3} header={ settingData?.tag3_heading} tagtitle={settingData?.tag3_description }/>
            }
         </section>
         <section className="text-center">
            <Link to="/upload" onClick={scrollToTopSmooth}>
               {settingData?.spend_win_image ? (
                  <img
                     src={`https://api.discovershurooq.ae/cdn-cgi/image/fit=scale-down/files/${settingData?.spend_win_image}`}
                     style={{ maxWidth: 900 }}
                     className="w-100"
                     alt=""
                  />
               ) : (
                  <div></div>
               )}
            </Link>
         </section>
         {settingData?.display_vouchers == 1 && <OffersYouMayLike data={homeData.voucherData} />}
         {settingData?.display_about_us == 1 && <AboutUs />}
         {settingData?.display_top_experience == 1 && <BestTraveling />}
      </>
   );
}

const mapStateToProps = ({
   user: { homeData, getSliderDataStatus, getDestinationDataStatus, sliderData, destinationData, settingData },
}) => ({
   homeData,
   getSliderDataStatus,
   getDestinationDataStatus,
   sliderData,
   destinationData,
   settingData,
});

const mapDispatchToProps = {
   getSliderData: userAction.getSliderData,
   getDestinationData: userAction.getDestinationData,
   getHomeData: userAction.getHomeData,
   getProfileDetails: userAction.getProfileDetails,
   getSettingData: userAction.getSettingData,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
