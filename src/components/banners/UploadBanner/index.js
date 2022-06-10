import LinkPage from "../../LinkPage";
import headBanner from "../../../assets/images/headerImages/backGeneral.jpg";

const image =
  "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
export default function UploadBanner(props) {
  const { backgroundImage = headBanner, linkPage = [] } = props;
  return (
    <section className="upload-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <LinkPage linkPage={linkPage} />
      </div>
    </section>
  );
}
