import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { LineArrow } from "../SvgComponents";
import { Link } from "react-router-dom";

export default function SlideCard(props) {
   const {
      title = "",
      dec = "",
      image = "",
      //  price = 0
   } = props;
   const history = useHistory();

   const { img, name, location, id, url_slug, arabic_name, description, hover_text } = props;
   return (
      <div className="book-SlideCard">
         <div className="wrapper">
            {/* <Link to={`https://api.discovershurooq.ae/files/${img}`}> */}
            <img className="render-image" src={`https://api.discovershurooq.ae/cdn-cgi/image/width=380,height=500,quality=100,sharpen=1/files/${img}`} alt={name} />
            <span className="dark-layer" />
            <div className="content">
               <div>
                  {/* <h3 className="title">{title}</h3> */}
                  {localStorage.getItem("user_language") == "en" ? (
                     <h3 className="title">{name}</h3>
                  ) : (
                     <h3 className="title">{arabic_name}</h3>
                  )}
                  <p className="dec">{description}</p>
               </div>
               <div className="buy">
                  <span />
                  {/* <p className="price">{price}$</p> */}
                  <Button color="primary" className="arrow" onClick={() => history.push(`d/${url_slug}`)}>
                     <span>
                        See Packages
                        <LineArrow />
                     </span>
                  </Button>
               </div>
            </div>
            {/* </Link> */}
         </div>
      </div>
   );
}
