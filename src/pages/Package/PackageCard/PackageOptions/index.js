import { useState } from "react";
import {
  UserIcon,
  UserHappyIcon,
  DurationIcon,
  CarIcon,
  CalanderIocn,
} from "../../../../components/SvgComponents";
import { Button } from "reactstrap";
import cx from "classnames";
import User from "./User";
import CalanderOption from "./CalanderOption";
import Duration from "./Duration";
import AedQuantity from "./AedQuantity";
import Car from "./Car";

export default function PackageOptions() {
  const [step, setStep] = useState(1);

  const stepsData = [
    { id: 1, icon: <UserIcon /> },
    { id: 2, icon: <CalanderIocn /> },
    { id: 3, icon: <DurationIcon /> },
    { id: 4, icon: <UserHappyIcon /> },
    { id: 5, icon: <CarIcon /> },
  ];

  const handleStep = (id) => {
    setStep(id);
  };

  const stepsTab = () => (
    <div className="stepsTab">
      <div className="wrapper">
        {stepsData.map(({ id, icon }) => (
          <div key={id} className={cx("item")}>
            <div className={cx("btnWrapper", { active: id <= step, activeFull: id === step })}>
              <button className={cx({ active: id <= step })} onClick={() => handleStep(id)}>
                {icon}
              </button>
            </div>
            <p>1635 AED</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="PackageOptionCard">
      {stepsTab()}
      <div className="render-content">
        {step === 1 && <User />}
        {step === 2 && <CalanderOption />}
        {step === 3 && <Duration />}
        {step === 4 && <AedQuantity />}
        {step === 5 && <Car />}
        <div className="text-right">
          <Button color="primary-2">Sign up</Button>
        </div>
      </div>
    </div>
  );
}
