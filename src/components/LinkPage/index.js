import { scrollToTopSmooth } from "../../util";
import { Link } from "react-router-dom";

export default function LinkPage({ linkPage = [] }) {
  return (
    <div className="link-page">
      {linkPage.map(({ type = "text", name = "", link = "/" }, index) => (
        <div key={index} className="item">
          {type === "text" && <span style={{fontSize: 24}}>{name}</span>}
          {type === "link" && <Link to={link} onClick={scrollToTopSmooth}>{name}</Link>}
        </div>
      ))}
    </div>
  );
}
