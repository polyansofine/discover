import React, { useState, Fragment, useEffect } from "react";
import cx from "classnames";
import {
  UserIcon,
  CalanderIocn,
  FluentFoodIcon,
  TickSquareIcon,
  SubPackageIcon,
  DurationIcon,
  CarIcon,
} from "../../SvgComponents";
import Users from "./users";
import Calendar from "./calendar";
import FluentFood from "./fluentFood";
import Transport from "./transport";
import TickSquare from "./tickSquare";
import SubPackages from "./subPackages";
// import CollectAddress from "./collectAddress";
import TimeSlot from "./timeSlot";
import { Button, Spinner, Col } from "reactstrap";
import arrow from "../../../assets/images/icons/Arrow-Right.svg";
import packageDetail from "../../../pages/PackageDetail";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ProductDetailSteps(props) {
  const [step, setStep] = useState(1);
  const [sub_name, setSubName] = useState("user");
  const {
    setNumPerson,
    packageDetails,
    nextPage,
    timeSlots,
    setShowTimeSlot,
    showTimeSlot,
    timeSlotValue,
    handleDateChange,
    minDate,
    maxDate,
    selectedDate,
    isBooking,
    bookYourPackage,
    gotoSlide,
    ticketsValue,
    realDate,
    packagePrice,
    mealPrice,
    addChild,
    addPerson,
    time_slot,
    selectedTimeSlot,
    changeTimeSlot,
    addSubChild,
    addSubAdult,
    // setCollectAdr,
    subPackages,
    addMealPerson,
    meals,
    isLoading,
    transports,
    transportPrice,
    isShowDetails,
    enable_date_picker,
    enable_time_picker,
    enable_transport,
    enable_meal,
    enable_sub_packages,
    // collect_address,
    transport_id,
    isOneWay,
    checkTransport,
    setTransportID,
    isShowCoupon,
    realCoupon,
    total,
    disabled_dates,
    disabled_weeks,
    // collectAddress,
  } = props;
  console.log("props=", props);
  const storeData = useSelector((store) => store);
  const [stepList, setStepList] = useState([]);
  const [isSticky, showSticky] = useState(false);
  const [clientHeight, setClientHeight] = useState(
    document.documentElement.clientHeight
  );
  const history = useHistory();
  const [isCouponCode, setCouponCode] = useState(true);
  useEffect(() => {
    if (window.location.href.indexOf("experience") > -1) {
      setCouponCode(false);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        currentScrollY + clientHeight >
        document.documentElement.scrollHeight * 0.85
      ) {
        showSticky(true);
      } else {
        showSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [clientHeight]);

  useEffect(() => {
    setClientHeight(document.documentElement.clientHeight);
    let index = 2;
    setStepList([]);
    let temp = [];
    temp.push({
      id: 1,
      value: "user",
      icon: <i class="far fa-user booking-flow-icon"></i>,
      detail: ticketsValue,
    });
    // if (collect_address) {
    //   temp.push({
    //     id: index,
    //     value: "collect_address",
    //     icon: <TickSquareIcon />,
    //     detail: collect_address,
    //   });
    //   index++;
    // }
    if (enable_date_picker) {
      temp.push({
        id: index,
        value: "date",
        icon: <i class="far fa-calendar-alt booking-flow-icon"></i>,
        detail: realDate,
      });
      index++;
    }
    if (enable_time_picker) {
      temp.push({
        id: index,
        value: "time",
        icon: <i class="far fa-clock  booking-flow-icon"></i>,
        detail: time_slot,
      });
      index++;
    }
    if (enable_sub_packages) {
      temp.push({
        id: index,
        value: "sub_packages",
        icon: <i class="far fa-plus-square   booking-flow-icon"></i>,
        detail: packagePrice,
      });
      index++;
    }
    if (enable_transport) {
      temp.push({
        id: index,
        value: "transports",
        icon: <i class="fas fa-car booking-flow-icon"></i>,
        // detail: transportPrice * (addPerson + addChild),
        detail: transportPrice ,
      });
      index++;
    }
    if (enable_meal) {
      temp.push({
        id: index,
        value: "meals",
        icon: <i class="fas fa-utensils booking-flow-icon"></i>,
        detail: mealPrice,
      });
    }
    setStepList(temp);
    console.log("setstep=", stepList);
  }, [
    enable_date_picker,
    enable_time_picker,
    packageDetails,
    ticketsValue,
    realDate,
    packagePrice,
    mealPrice,
    time_slot,
    timeSlotValue,
    transportPrice,
    enable_sub_packages,
    enable_meal,
    enable_transport,
  ]);

  const handleStep = () => {
    let result = nextPage();
    console.log("result=", result);
    if (result == false) {
      return;
    }
    setStep((previous) => (previous === 6 ? 1 : previous + 1));
    console.log("step=", step);
    setSubName(stepList[step].value);
  };

  function goNextStep(index, value) {
    let result = gotoSlide(value);
    if (result == false) {
      return;
    }
    setStep(index + 1);
    setSubName(value);
  }

  return (
    <>
      <div className="stepsTab">
        <div className="wrapper">
          {stepList?.map(({ id, icon, value, detail }, index) => (
            <div key={id} className={cx("item", "item-" + stepList.length)}>
              <div
                className={cx("btnWrapper", {
                  active: id <= step,
                  activeFull: id === step,
                })}
              >
                <button
                  className={
                    cx({ active: id <= step }) +
                    (storeData.user.token ? "" : "disable-button")
                  }
                  onClick={() => goNextStep(index, value)}
                >
                  {icon}
                </button>
              </div>
              {value == "time" || value == "date" ? (
                <p>{detail}</p>
              ) : (
                <p>
                  {detail} <small>AED</small>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="package-step-card">
        <div className="step-process-content"> */}
      <div className="render-content">
        {sub_name == "user" && (
          <Users
            addChild={addChild}
            addPerson={addPerson}
            adult_price={packageDetails?.price}
            child_price={packageDetails?.child_price}
            setNumPerson={setNumPerson}
          />
        )}
        {sub_name == "date" && (
          <Calendar
            handleDateChange={handleDateChange}
            disabled_dates={disabled_dates}
            minDate={minDate}
            maxDate={maxDate}
            selectedDate={selectedDate}
            disabled_weeks={disabled_weeks}
          />
        )}
        {sub_name == "time" && (
          <TimeSlot
            showTimeSlot={showTimeSlot}
            timeSlots={timeSlots}
            setShowTimeSlot={setShowTimeSlot}
            timeSlotValue={timeSlotValue}
            changeTimeSlot={changeTimeSlot}
            selectedTimeSlot={selectedTimeSlot}
          />
        )}
        {sub_name == "sub_packages" && (
          <SubPackages
            addSubAdult={addSubAdult}
            addSubChild={addSubChild}
            subPackages={subPackages}
          />
        )}
        {/* {sub_name == "collect_address" && (
          <CollectAddress setCollectAdr={setCollectAdr} collectAddress={collectAddress} />
        )} */}
        {sub_name == "meals" && (
          <FluentFood meals={meals} addMealPerson={addMealPerson} />
        )}
        {sub_name == "transports" && (
          <Transport
            transports={transports}
            transport_id={transport_id}
            checkTransport={checkTransport}
            isOneWay={isOneWay}
            setTransportID={setTransportID}
          />
        )}
        {storeData.user.token ? (
          <>
            {isBooking ? (
              <div className={isSticky ? "book sticky row" : "book row"}>
                {realCoupon && (
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      fontSize: 14,
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="col-6">Coupon: {realCoupon}</div>
                    <div className="col-6">
                      Discount:{" "}
                      {(
                        ticketsValue +
                        mealPrice +
                        packagePrice +
                        transportPrice -
                        // transportPrice * (addPerson + addChild) -
                        total
                      ).toFixed(2)}
                    </div>
                  </div>
                )}

                <div className="total">
                  <p>
                    Total: {total} <small>AED</small>
                  </p>
                  {isCouponCode && (
                    <Button
                      className="btn-coupon"
                      onClick={() => {
                        isShowCoupon(true);
                      }}
                    >
                      Enter Promo Code
                    </Button>
                  )}
                </div>
                {/* <Col>
                  <div style={{ float: 'right' }}> */}
                {isLoading ? (
                  <button className="btn next-btn btn-primary">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn next-btn btn-primary"
                    onClick={() => {
                      if (nextPage()) isShowDetails(true);
                    }}
                  >
                    Submit
                  </button>
                )}
                {/* </div> */}
                {/* </Col> */}
              </div>
            ) : (
              <div className={isSticky ? "book sticky row" : "book row"}>
                {realCoupon && (
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      fontSize: 14,
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="col-6">Coupon: {realCoupon}</div>
                    <div className="col-6">
                      Discount:{" "}
                      {(
                        ticketsValue +
                        mealPrice +
                        packagePrice +
                        transportPrice -
                        // transportPrice * (addPerson + addChild) -
                        total
                      ).toFixed(2)}
                    </div>
                  </div>
                )}
                <div className="total">
                  <p>
                    Total: {total} <small>AED</small>
                  </p>
                  {isCouponCode && (
                    <Button
                      className="btn-coupon"
                      onClick={() => {
                        isShowCoupon(true);
                      }}
                    >
                      Enter Promo Code
                    </Button>
                  )}
                </div>
                {/* <Col> */}
                {/* <div style={{ float: 'right' }}> */}
                {isLoading ? (
                  <button className="btn next-btn btn-primary">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Next
                    <img src={arrow} />
                  </button>
                ) : (
                  <button
                    className="btn next-btn btn-primary"
                    onClick={() => {
                      handleStep();
                    }}
                  >
                    Next
                    <img src={arrow} />
                  </button>
                )}
                {/* </div> */}
                {/* </Col> */}
              </div>
            )}
          </>
        ) : (
          <div className={isSticky ? "book sticky row mx-0" : "book row mx-0"}>
            <div className="total"></div>
            <div className="text-right w-100">
              <button
                className="btn btn-primary"
                onClick={() => {
                  history.push("/login");
                }}
              >
                SignUp
              </button>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  );
}

export default ProductDetailSteps;
