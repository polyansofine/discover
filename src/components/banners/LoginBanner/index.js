// import headBanner from "../../../assets/images/backgrounds/register.png";
import headBanner from "../../../assets/images/headerImages/login.jpg";

export default function RegisterBanner(props) {
  const { backgroundImage = headBanner } = props;
  return (
    <section
      className="register-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></section>
  );
}
