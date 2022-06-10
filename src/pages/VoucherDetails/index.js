import VoucherBanner from "../../components/banners/VoucherBanner";
import DetailView from "./DetailView";

export default function VoucherDetails() {
  return (
    <div>
      <VoucherBanner
        linkPage={[{ type: "link", name: "Home", link: "/" }, { name: "Voucher Details" }]}
      />
      <DetailView />
    </div>
  );
}
