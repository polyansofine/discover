import { useState } from "react";
import { Input, Row, Col } from "reactstrap";
import { PlusIcon, SubIcon } from "../../../../../components/SvgComponents";
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
      fill="#9FA0A0"
    />
  </svg>
);
const ChildIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 20H19V22H5V20ZM12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18ZM12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16Z"
      fill="#9FA0A0"
    />
  </svg>
);

function RenderInput(props) {
  const { name, icon } = props;

  const [stateValue, setStateValue] = useState(0);

  return (
    <div className="render-input">
      <div className="n-wrapper">
        {icon}
        <span className="name">{name}</span>
      </div>
      <div className="h-wrapper">
        <button onClick={() => setStateValue(stateValue - 1)}>
          <SubIcon />
        </button>
        <span className="value">{stateValue}</span>
        <button onClick={() => setStateValue(stateValue + 1)}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

export default function User() {
  return (
    <div className="usertab">
      <Row>
        <Col lg={6}>
          <RenderInput name="Adult (465 AED)" icon={<UserIcon />} />
        </Col>
        <Col lg={6}>
          <RenderInput name="Children (235 AED)" icon={<ChildIcon />} />
        </Col>
      </Row>
    </div>
  );
}
