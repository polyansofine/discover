import cx from "classnames";
import timerIcon from "../../../../assets/images/icons/timer.svg";

export default function Content() {
  const btns = [
    { name: "About", active: "true" },
    { name: "Amenities" },
    { name: "Location" },
    { name: "Terms" },
    { name: "Additional Info" },
    { name: "Itinerary" },
  ];
  return (
    <div className="package-content">
      <div className="tab-package-btn">
        <div className="wrapper">
          {btns.map(({ name, active = false }) => (
            <button className={cx({ active: active })}>{name}</button>
          ))}
        </div>
      </div>
      <div className="content">
        <h2>Adventure Package - Exclusive</h2>
        <p>
          Get ready for an exciting off-road experience as you discover the most spectacular vistas
          Mleiha has to offer. Your journey will last approximately 6 hours as you take in views
          from two different peaks, visit ancient sites, stop for picture-perfect photos of the
          stunning landscape and conclude your adventure in the relaxing setting of our Sunset
          Lounge.
        </p>
        <p className="duration">
          <img src={timerIcon} alt="" />
          Duration: <b>6 hours</b> Must be booked 48 hours in advance; subject to availability
        </p>
      </div>
    </div>
  );
}
