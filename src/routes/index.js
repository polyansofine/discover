import Layout from "../components/layout";
import {
   Home,
   BookYourExperience,
   Package,
   PackageDetail,
   Register,
   Login,
   VoucherDetails,
   Upload,
   Settings,
   Editprofile,
   OrderHistory,
   Vouchers,
   NearbyVouchers,
   SearchDetail,
   AdventurousDetails,
   Invoics,
   AllRaffles,
   BookingDetails,
   AboutUs,
   ContactUs,
   ViewAll,
   Terms,
   Privacy,
   Gallery,
} from "../pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function Routes() {
   return (
      <Router>
         <Switch>
            <Layout>
               <Route exact path="/" component={Home} />
               <Route exact path="/aboutus" component={AboutUs} />
               <Route exact path="/contactus" component={ContactUs} />
               <Route exact path="/d/:url_slug" component={BookYourExperience} />
               <Route exact path="/book-your-experience" component={BookYourExperience} />
               <Route exact path="/package" component={Package} />
               <Route exact path="/p/:package_slug" component={PackageDetail} />
               <Route exact path="/v/:voucher_slug" component={VoucherDetails} />
               <Route exact path="/settings" component={Settings} />
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/voucher-details" component={VoucherDetails} />
               <Route exact path="/upload" component={Upload} />
               <Route exact path="/edit-profile" component={Editprofile} />
               <Route exact path="/order-history" component={OrderHistory} />
               <Route exact path="/booking-details/:order_number" component={BookingDetails} />
               <Route exact path="/vouchers" component={Vouchers} />
               <Route exact path="/vouchers/:url_slug" component={NearbyVouchers} />
               <Route exact path="/s/:t/:d" component={SearchDetail} />
               <Route exact path="/t/:slug" component={AdventurousDetails} />
               <Route exact path="/invoics" component={Invoics} />
               <Route exact path="/all-raffles" component={AllRaffles} />
               <Route exact path="/view-all-destination" component={ViewAll} />
               <Route exact path="/terms" component={Terms} />
               <Route exact path="/privacy" component={Privacy} />
               <Route exact path="/gallery" component={Gallery} />
            </Layout>
         </Switch>
      </Router>
   );
}

export default Routes;
