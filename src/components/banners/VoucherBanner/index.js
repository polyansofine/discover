import LinkPage from "../../LinkPage";
import headBanner from "../../../assets/images/headerImages/vourchers-offers.jpg";

const image =
  "https://images.unsplash.com/photo-1469440317162-d9798b137445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80";
export default function VoucherBanner(props) {
  const { backgroundImage = headBanner, linkPage = [] } = props;
  return (
    <section className="voucher-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <LinkPage linkPage={linkPage} />
      </div>
    </section>
  );
}
