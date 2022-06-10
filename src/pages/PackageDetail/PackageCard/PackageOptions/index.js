import React, { useEffect, useState } from "react";
import {
  UserIcon,
  UserHappyIcon,
  DurationIcon,
  CarIcon,
  CalanderIocn,
} from "../../../../components/SvgComponents";
import cx from "classnames";
import User from "./User";
import CalanderOption from "./CalanderOption";
import Duration from "./Duration";
import AedQuantity from "./AedQuantity";
import Car from "./Car";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import ReactPixel from "react-facebook-pixel";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { Button, Spinner, Alert } from "reactstrap";
import Moment from "moment";
import { useCookies } from "react-cookie";
import ProductDetailSteps from "../../../../components/productDetail/productDetailSteps";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// const UserIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//     <path
//       d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
//       fill="#9FA0A0"
//     />
//   </svg>
// );

const PackageOptions = (props) => {
  const [step, setStep] = useState(1);
  const { setCouponValue, couponValue, isShowCoupon, showCoupon } = props

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
        {stepsData.map(({ id, icon }, index) => (
          <div key={index} className={cx("item")}>
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

  let isMeal = false,
    isSub = false,
    isTime = false,
    isDate = false,
    isTransport = false;
  // isAddress = false;
  const history = useHistory();
  localStorage.setItem("pathname", history.location.pathname);
  const t = useTranslation();
  const [addPerson, setAddPerson] = useState(0);
  const [addChild, setAddChild] = useState(0);
  const { package_slug } = props.match.params;
  const [showTimeSlot, setShowTimeSlot] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [realDate, setRealDate] = useState("");
  const [adultPrice, setAdultPrice] = useState("");
  const [childPrice, setChildPrice] = useState("");
  // const [collectAddress, setCollectAdrr] = useState("");
  const [adultLimitMax, setAdultLimitMax] = useState(99);
  const [adultLimitMin, setAdultLimitMin] = useState(1);
  const [childLimitMax, setChildLimitMax] = useState(99);
  const [childLimitMin, setChildLimitMin] = useState(0);
  const [subPackages, setSubPackages] = useState([]);
  const [meals, setMeals] = useState([]);
  // const [collect_address, setCollectAddress] = useState(0);
  const [transports, setTransports] = useState([]);
  const [isOneWay, setOneWay] = useState(true);
  const [transport_id, setTransportID] = useState(0);
  const [transport_name, setTransportName] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(-1);
  const [timeSlotValue, setTimeSlotValue] = useState("");
  const [time_slot, setTimeSlot] = useState("");
  const [btnPackageName, setPackageName] = useState("SELECT PACKAGE");
  const [btnMealName, setMealName] = useState("SELECT MEALS");
  const [packagePrice, setPackagePrice] = useState(0);
  const [subpackages_adult_qty, setSubAdultQty] = useState(0);
  const [subpackages_child_qty, setSubChildQty] = useState(0);
  const [mealPrice, setMealPrice] = useState(0);
  const [transportPrice, setTransportPrice] = useState(0);
  const [isBooking, showBooking] = useState(false);
  const [isDateSelector, showDateSelector] = useState(false);
  const [isTimeSlotSelector, showTimeSlotSelector] = useState(false);
  const [isSubPackageSelector, showSubPackageSelector] = useState(false);
  const [isMealSelector, showMealSelector] = useState(false);
  // const [isAddressSelector, showAddressSelector] = useState(false);
  const [isTransportSelector, showTransportSelector] = useState(false);
  const [progressCount, setProgressCount] = useState(1);
  const [progressValue, setProgressValue] = useState(100);
  const [isLoading, setLoading] = useState(false);
  const [total_adult_tickets, setTotalAdultTickets] = useState(0);
  const [total_adult_time, setTotalAdultTime] = useState(0);
  const [total_child_tickets, setTotalChildTickets] = useState(0);
  const [total_child_time, setTotalChildTime] = useState(0);
  const [isAlert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [showDetails, isShowDetails] = useState(false);
  // const [showCoupon, isShowCoupon] = useState(false);
  const [wobble, setWobble] = useState(0);
  // const [couponValue, setCouponValue] = useState("");
  const [coupon_id, setCouponID] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["hubspotutk"]);
  const [enable_date_picker, setEnableDatePicker] = useState(false);
  const [enable_time_picker, setEnableTimePicker] = useState(false);
  const [enable_meal, setEnableMeal] = useState(false);
  const [enable_sub_packages, setEnableSubPackages] = useState(false);
  const [enable_transport, setEnableTransport] = useState(false);
  const [offValue, setOffValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [offType, setOffType] = useState("");
  const [couponBuy, setCouponBuy] = useState("");
  const [couponBuyQty, setCouponBuyQty] = useState(0);
  const [couponGet, setCouponGet] = useState("");
  const [couponGetQty, setCouponGetQty] = useState(0);
  const [isCoupon, setCoupon] = useState(false);
  const [realCoupon, setRealCoupon] = useState("");
  const [disabled_dates, setDisabledDates] = useState("");
  const [disabled_weeks, setDisabledWeeks] = useState([]);
  const [isSubTitle, showSubTitle] = useState([]);
  const [isMealTitle, showMealTitle] = useState([]);
  const [adult_overall_limit, setAdultOverAllLimit] = useState("");
  const [child_overall_limit, setChildOverAllLimit] = useState("");
  const [adult_booked_times, setAdultBookedTimes] = useState("");
  const [child_booked_times, setChildBookedTimes] = useState("");
  const [isLoad, setLoad] = useState(0);

  const {
    bookPackages,
    bookingPackageStatus,
    token,
    bookingData,
    getPackageDetails,
    packageDetails,
    dateAvailability,
    getDateAvailable,
    getDateAvailableStatus,
    packageSlots,
    getPackageSlots,
    getPackageSlotsStatus,
    couponValidity,
    couponValidityStatus,
    couponValidityData,
  } = props;

  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }
  let date = new Date();
  let minDate = new Date(packageDetails?.start_date);
  date = new Date();
  date.setMonth(date.getMonth() + 3);
  let maxDate = new Date(packageDetails?.end_date);

  useEffect(() => {
    getPackageDetails(null);
    const data = new FormData();
    data.append("action", "packagesDetails");
    data.append("slug", package_slug);
    getPackageDetails(data);
    setLoad(1);
    window.scroll({
      top: 0,
    });
  }, [package_slug]);

  setTimeout(
    function () {
      if (isLoad == 1)
        if (packageDetails?.redirect == 1) {
          window.location.href = packageDetails?.redirect_url;
        }
    }.bind(this),
    1000
  );

  if (packageDetails?.package_name) {
    ReactPixel.track("ViewContent", {
      content_ids: `['p-${packageDetails?.url_slug}']`,
      content_name: `${packageDetails?.package_name} - Package`,
      content_category: "product",
      content_type: "product_group",
    });
  }
  const bookYourPackage = () => {
    setLoading(true);
    let subpackage_id = [];
    let subpackage_adult = [];
    let subpackage_child = [];
    for (let i = 0; i < subPackages?.length; i++) {
      if (subPackages[i].adult_person == 0 && subPackages[i].child_person == 0) {
        continue;
      }
      subpackage_id.push(subPackages[i].id);
      subpackage_adult.push(subPackages[i].adult_person);
      subpackage_child.push(subPackages[i].child_person);
    }
    let meal_id = [];
    let meal_qty = [];
    for (let i = 0; i < meals?.length; i++) {
      if (meals[i].person == 0) {
        continue;
      }
      meal_id.push(meals[i].id);
      meal_qty.push(meals[i].person);
    }

    const bookData = new FormData();
    bookData.append("action", "createOrder");
    bookData.append("package_id", packageDetails?.id);
    bookData.append("adult_qty", addPerson);
    bookData.append("child_qty", addChild);
    // bookData.append("address", collectAddress);
    bookData.append("site", "discovershurooq.ae");
    if (subpackage_id.length > 0) {
      bookData.append("subpackages_id", subpackage_id);
      bookData.append("subpackages_adult_qty", subpackage_adult);
      bookData.append("subpackages_child_qty", subpackage_child);
    }
    if (timeSlots) {
      bookData.append("time_slot_id", timeSlots[selectedTimeSlot]?.id);
    }
    if (packageDetails?.enable_date_picker) {
      bookData.append("date", Moment(selectedDate).format("YYYY-DD-MM"));
    }
    if (meal_id.length > 0) {
      bookData.append("meals_id", meal_id);
    }
    if (meal_qty.length > 0) {
      bookData.append("meals_qty", meal_qty);
    }
    if (transports.length > 0) {
      if (transport_id != 0) {
        bookData.append("transport_id", transport_id);
        bookData.append("transport_type", isOneWay);
      }
    }
    if (coupon_id && coupon_id != "") {
      bookData.append("coupon_id", coupon_id);
    }
    if (cookies.name) {
      bookData.append("referral", cookies.name);
    }
    bookPackages(bookData);
  };
  useEffect(() => {
    let flag = false;
    for (var i = 0; i < subPackages.length; i++) {
      if (subPackages[i].adult_person > 0 || subPackages[i].child_person > 0) {
        flag = true;
        showSubTitle(true);
      }
    }
    if (flag == false) {
      showSubTitle(false);
    }
  }, [subPackages]);
  useEffect(() => {
    let flag = false;
    for (var i = 0; i < meals.length; i++) {
      if (meals[i].person > 0) {
        flag = true;
        showMealTitle(true);
      }
    }
    if (flag == false) {
      showMealTitle(false);
    }
  }, [meals]);
  useEffect(() => {
    if (bookingPackageStatus === "success") {
      let payment_url = bookingData?.payment_url;
      setTimeout(
        function () {
          // window.open(payment_url, _self);
          // history.push(`booking-details/${order_number}`);
          if (packageDetails?.package_name) {
            ReactPixel.track("InitiateCheckout", {
              content_name: `${packageDetails?.package_name} - Package`,
              content_category: "product",
              content_ids: [`p-${packageDetails?.url_slug}`],
              content_type: "product",
              value: `${addPerson * packageDetails?.price + addChild * packageDetails?.child_price
                }`,
              currency: "AED",
            });
            window.location.href = payment_url;
            setLoading(false);
            bookPackages("");
          }
        }.bind(this),
        500
      );
    }
  }, [bookingPackageStatus]);
  useEffect(() => {
    if (packageDetails?.price) {
      setAdultPrice(packageDetails?.price);
    }
    if (packageDetails?.child_price) {
      setChildPrice(packageDetails?.child_price);
    }
    setTotal(packageDetails?.price);
    if (
      packageDetails?.enable_date_picker != "1" &&
      packageDetails?.enable_meal != "1" &&
      packageDetails?.enable_sub_packages != "1" &&
      packageDetails?.enable_time_picker != "1" &&
      packageDetails?.enable_transport != "1"
    ) {
      showBooking(true);
    }
    setDisabledDates(packageDetails?.disabled_dates);
    if (packageDetails?.disabled_weeks) {
      let weeks = (packageDetails?.disabled_weeks).split(",");
      for (var i = 0; i < weeks.length; i++) {
        if (weeks[i] == "monday") {
          setDisabledWeeks((weeks) => [...weeks, 1]);
        } else if (weeks[i] == "tuesday") {
          setDisabledWeeks((weeks) => [...weeks, 2]);
        } else if (weeks[i] == "wednesday") {
          setDisabledWeeks((weeks) => [...weeks, 3]);
        } else if (weeks[i] == "thursday") {
          setDisabledWeeks((weeks) => [...weeks, 4]);
        } else if (weeks[i] == "friday") {
          setDisabledWeeks((weeks) => [...weeks, 5]);
        } else if (weeks[i] == "saturday") {
          setDisabledWeeks((weeks) => [...weeks, 6]);
        } else if (weeks[i] == "sunday") {
          setDisabledWeeks((weeks) => [...weeks, 0]);
        }
      }
    }
    if (packageDetails?.id) {
      const dateCheck = new FormData();
      dateCheck.append("action", "dateAvailabilityCheck");
      dateCheck.append("id", packageDetails?.id);
      dateCheck.append("date", Moment(new Date()).format("MM/DD/YYYY"));
      getDateAvailable(dateCheck);
      const slotsData = new FormData();
      slotsData.append("action", "packageSlots");
      slotsData.append("id", packageDetails?.id);
      slotsData.append("date", Moment(new Date()).format("MM/DD/YYYY"));
      getPackageSlots(slotsData);
    }
    let count = 6;
    let flag = false;
    if (packageDetails?.enable_date_picker == "1") {
      flag = true;
    }
    if (!flag) {
      setEnableDatePicker(false);
      count--;
    } else {
      setEnableDatePicker(true);
      flag = false;
    }

    setSubPackages([]);
    if (packageDetails?.enable_sub_packages == "1") {
      for (let i = 0; i < packageDetails?.sub_packages.length; i++) {
        if (
          packageDetails?.sub_packages[i].enable == "1" &&
          packageDetails?.sub_packages[i].package_name &&
          packageDetails?.sub_packages[i].package_name.length > 2 &&
          packageDetails?.sub_packages[i].adult_price
        ) {
          flag = true;
          setSubPackages((subPackages) => [
            ...subPackages,
            {
              value: `${packageDetails?.sub_packages[i]?.package_name}`,
              label: `${packageDetails?.sub_packages[i]?.package_name}`,
              adult_price: `${packageDetails?.sub_packages[i]?.adult_price}`,
              child_price: `${packageDetails?.sub_packages[i]?.child_price}`,
              adult_person: 0,
              id: `${packageDetails?.sub_packages[i]?.id}`,
              child_person: 0,
            },
          ]);
        }
      }
    }
    if (!flag) {
      setEnableSubPackages(false);
      count--;
    } else {
      setEnableSubPackages(true);
      flag = false;
    }
    setMeals([]);
    if (packageDetails?.enable_meal == "1") {
      for (let i = 0; i < packageDetails?.meals.length; i++) {
        if (
          packageDetails?.meals[i].enable == "1" &&
          packageDetails?.meals[i].meal_name &&
          packageDetails?.meals[i].meal_name.length > 1 &&
          packageDetails?.meals[i].price
        ) {
          flag = true;
          setMeals((meals) => [
            ...meals,
            {
              value: `${packageDetails?.meals[i]?.meal_name}`,
              label: `${packageDetails?.meals[i]?.meal_name}`,
              price: `${packageDetails?.meals[i]?.price}`,
              person: 0,
              description: `${packageDetails?.meals[i]?.description}`,
              id: `${packageDetails?.meals[i]?.id}`,
            },
          ]);
        }
      }
    }
    if (!flag) {
      setEnableMeal(false);
      count--;
    } else {
      setEnableMeal(true);
      flag = false;
    }
    setTransports([]);
    if (packageDetails?.enable_transport == "1") {
      for (let i = 0; i < packageDetails?.transport.length; i++) {
        if (
          packageDetails?.transport[i].enable == "1" &&
          packageDetails?.transport[i].name.length > 1 &&
          packageDetails?.transport[i].one_way.length > 0
        ) {
          flag = true;
          setTransports((transport) => [
            ...transport,
            {
              value: `${packageDetails?.transport[i]?.name}`,
              label: `${packageDetails?.transport[i]?.name}`,
              one_way: `${packageDetails?.transport[i]?.one_way}`,
              two_way: `${packageDetails?.transport[i]?.two_way}`,
              id: `${packageDetails?.transport[i]?.id}`,
            },
          ]);
        }
      }
    }
    if (!flag) {
      setEnableTransport(false);
      count--;
    } else {
      setEnableTransport(true);
      flag = false;
    }
    // setTimeSlots([]);
    // if (packageDetails?.time_slots) {
    // 	for (let i = 0; i < packageDetails?.time_slots.length; i++) {
    // 		if (packageDetails?.time_slots[i].enable == "1" && packageDetails?.time_slots[i].time_slot && packageDetails?.time_slots[i].time_slot.length > 2) {
    // 			flag = true;
    // 			setTimeSlots(timeSlots => [...timeSlots, {
    // 				value: `${packageDetails?.time_slots[i]?.time_slot}`, label: `${packageDetails?.time_slots[i]?.time_slot}`, adult_limit: `${packageDetails?.time_slots[i]?.adult_limit}`, child_limit: `${packageDetails?.time_slots[i]?.child_limit}`, id: `${packageDetails?.time_slots[i]?.id}`
    // 			}])
    // 		}
    // 	}
    // }
    if (packageDetails?.enable_time_picker == "1") {
      flag = true;
    }
    if (!flag) {
      setEnableTimePicker(false);
      count--;
    } else {
      setEnableTimePicker(true);
      flag = false;
    }
    setProgressCount(count);
    if (count > 1) {
      setProgressCount(count);
      setProgressValue(100 / count);
      showBooking(false);
    } else {
      setProgressValue(100);
    }
    if (timeSlots[0]?.value) {
      setTimeSlotValue(timeSlots[0].value.slice(0, 7));
    }
    if (packageDetails?.adult_booked_times) {
      setAdultBookedTimes(packageDetails?.adult_booked_times);
    }
    if (packageDetails?.adult_overall_limit) {
      setAdultOverAllLimit(packageDetails?.adult_overall_limit);
    }
    if (packageDetails?.child_booked_times) {
      setChildBookedTimes(packageDetails?.child_booked_times);
    }
    if (packageDetails?.child_overall_limit) {
      setChildOverAllLimit(packageDetails?.child_overall_limit);
    }

    // if (packageDetails?.collect_address == "1") {
    //   flag = true;
    // }
    // if (!flag) {
    //   setCollectAddress(false);
    // } else {
    //   setCollectAddress(true);
    // }
  }, [packageDetails]);
  useEffect(() => {
    let totalAmount =
      addPerson * packageDetails?.price +
      addChild * packageDetails?.child_price +
      packagePrice +
      mealPrice +
      // transportPrice * (addChild + addPerson);
      transportPrice;
    console.log(addPerson, addChild, packagePrice, mealPrice, transportPrice, totalAmount)
    if (offType == "aed") {
      if (totalAmount - offValue > 0) {
        setTotal(totalAmount - offValue);
      } else {
        setTotal(0);
      }
    } else if (offType == "percentage") {
      if (totalAmount - (totalAmount * offValue) / 100 > 0) {
        setTotal((totalAmount - (totalAmount * offValue) / 100).toFixed(2));
      } else {
        setTotal(0);
      }
    }
    else if (offType == "buy_x_get_y") {
      // if (couponBuy == "adult" && addPerson >= couponBuyQty) {
      //   if (couponGet == "child") {
      //     if (addChild > couponGetQty) {
      //       setTotal(totalAmount - packageDetails?.child_price * couponGetQty);
      //     }
      //     else {
      //       setTotal(totalAmount - packageDetails?.child_price * addChild);
      //     }
      //   }
      //   else if (couponGet == "adult") {
      //     if (addPerson > couponGetQty) {
      //       setTotal(totalAmount - packageDetails?.adult_price * couponGetQty);
      //     }
      //     else {
      //       setTotal(totalAmount - packageDetails?.adult_price * addPerson);
      //     }
      //   }
      // }
      // else if (couponBuy == "child" && addChild >= couponBuyQty) {
      //   if (couponGet == "child") {
      //     if (addChild > couponGetQty) {
      //       setTotal(totalAmount - packageDetails?.child_price * couponGetQty);
      //     }
      //     else {
      //       setTotal(totalAmount - packageDetails?.child_price * addChild);
      //     }
      //   }
      //   else if (couponGet == "adult") {
      //     if (addPerson > couponGetQty) {
      //       setTotal(totalAmount - packageDetails?.adult_price * couponGetQty);
      //     }
      //     else {
      //       setTotal(totalAmount - packageDetails?.adult_price * addPerson);
      //     }
      //   }
      // }
      // else {
      //   toast.error("Minimum " + couponGetQty + " " + couponBuy + " required")
      //   setTotal(totalAmount);
      // }

      let buyQty = couponBuyQty;
      let freeQty = couponGetQty;

      let tempChildQty = addChild;
      let tempChildQtyt = addChild;
      let tempAdultQty = addPerson;
      let tempAdultQtyt = addPerson;

      let buyType = couponBuy;
      let freeType = couponGet;

      if (buyType == "adult") {
        for (var i = 1; i <= tempAdultQtyt; i++) {
          if (i % buyQty == 0) {
            if (freeType == "child") {
              for (var j = 1; j <= freeQty; j++) {
                if (tempChildQty > 0)
                  tempChildQty = tempChildQty - 1;
              }
            }
            else if (freeType == "adult") {

              for (var j = 1; j <= freeQty; j++) {
                if (tempAdultQty > i)
                  tempAdultQty = tempAdultQty - 1;
              }
            }
          }
        }
      }
      else if (buyType == "child") {
        for (var i = 1; i <= tempChildQtyt; i++) {
          if (i % buyQty == 0) {
            if (freeType == "child") {
              for (var j = 1; j <= freeQty; j++) {
                if (tempChildQty > i)
                  tempChildQty = tempChildQty - 1;
              }
            }
            else if (freeType == "adult") {
              for (var j = 1; j <= freeQty; j++) {
                if (tempAdultQty > 0)
                  tempAdultQty = tempAdultQty - 1;
              }
            }
          }
        }
      }
      var total_amount = (tempChildQty * packageDetails?.child_price) + (tempAdultQty * packageDetails?.price);
      var couponVal = addPerson * adultPrice + addChild * childPrice - total_amount;
      setTotal(totalAmount - couponVal)
    }
    else {
      setTotal(totalAmount);
    }
  }, [addPerson, addChild, packagePrice, mealPrice, transportPrice]);
  useEffect(() => {
    setLoading(false);
    if (dateAvailability) {
      setTotalAdultTickets(dateAvailability?.adult_tickets);
      setTotalChildTickets(dateAvailability?.child_tickets);
    }
  }, [dateAvailability]);
  useEffect(() => {
    setTimeSlots([]);
    for (let i = 0; i < packageSlots?.length; i++) {
      if (
        (packageSlots[i].adult_limit >= addPerson || packageSlots[i].adult_limit == "") &&
        (packageSlots[i].child_limit >= addChild || packageSlots[i].child_limit == "") &&
        packageSlots[i].time_slot != ""
      ) {
        setTimeSlots((timeSlots) => [
          ...timeSlots,
          {
            value: `${packageSlots[i]?.time_slot}`,
            label: `${packageSlots[i]?.time_slot}`,
            adult_limit: `${packageSlots[i].adult_limit == "" ? 1000 : packageSlots[i].adult_limit
              }`,
            child_limit: `${packageSlots[i]?.child_limit == "" ? 1000 : packageSlots[i]?.child_limit
              }`,
            id: `${packageSlots[i]?.id}`,
          },
        ]);
      }
    }
  }, [packageSlots, addPerson, addChild]);
  const changeTimeSlot = (event) => {
    let index = parseInt(event.target.value);
    setTimeSlot(timeSlots[index].value.slice(0, 7));
    setSelectedTimeSlot(index);
    setTimeSlotValue(timeSlots[index].value.slice(0, 7));
    // if (packageSlots && timeSlots) {
    // 	let slots = packageSlots.find(code => code.id == timeSlots[index]?.id);
    // 	setTotalAdultTime(slots?.adult_limit);
    // 	setTotalChildTime(slots?.child_limit);
    // }
  };
  function checkTransport(item, flag) {
    if (item == null && flag == false) {
      setTransportID(0);
      setTransportPrice(0);
      return;
    }
    setTransportName(item.value);
    setOneWay(flag);
    setTransportID(item.id);
    if (flag) {
      setTransportPrice(parseInt(item.one_way));
    } else {
      setTransportPrice(parseInt(item.two_way));
    }
  }
  const handleDateChange = (date) => {
    setLoading(true);
    setSelectedDate(date);
    setRealDate(Moment(date).format("DD/MM"));
    setTimeSlot("");
    setSelectedTimeSlot(-1);
    const dateCheck = new FormData();
    dateCheck.append("action", "dateAvailabilityCheck");
    dateCheck.append("id", packageDetails?.id);
    dateCheck.append("date", Moment(date).format("MM/DD/YYYY"));
    getDateAvailable(dateCheck);
    if (packageDetails?.enable_time_picker == "1") {
      const slotsData = new FormData();
      slotsData.append("action", "packageSlots");
      slotsData.append("id", packageDetails?.id);
      slotsData.append("date", Moment(date).format("MM/DD/YYYY"));
      getPackageSlots(slotsData);
    }
  };
  function addSubAdult(id, state, item) {
    if (state) {
      if (item.adult_person == 0 || item.adult_price == "" || parseInt(item.adult_price) == 0) {
        return;
      }
      subPackages[id].adult_person = item.adult_person - 1;
    } else {
      if (item.adult_price == "" || parseInt(item.adult_price) == 0) {
        return;
      }
      subPackages[id].adult_person = item.adult_person + 1;
    }
    setSubPackages((subPackages) => [...subPackages]);
    calulatePackages();
  }

  // function setCollectAdr(event) {
  //   setCollectAdrr(event.target.value);
  // }

  function addSubChild(id, state, item) {
    if (state) {
      if (item.child_person == 0 || item.child_price == "" || parseInt(item.child_price) == 0) {
        return;
      }
      subPackages[id].child_person = item.child_person - 1;
    } else {
      if (item.child_price == "" || parseInt(item.child_price) == 0) {
        return;
      }
      subPackages[id].child_person = item.child_person + 1;
    }
    setSubPackages((subPackages) => [...subPackages]);
    calulatePackages();
  }
  function addMealPerson(id, state, item) {
    if (state) {
      if (item.person == 0) {
        return;
      }
      meals[id].person = item.person - 1;
    } else {
      meals[id].person = item.person + 1;
    }
    setMeals((meals) => [...meals]);
    calulateMeals();
  }

  function calulatePackages() {
    let sum_person = 0;
    let sum_adult = 0;
    let sum_child = 0;
    let sum_price = 0;
    for (let i = 0; i < subPackages?.length; i++) {
      sum_adult += parseInt(subPackages[i]?.adult_person);
      sum_price += parseInt(subPackages[i]?.adult_price) * parseInt(subPackages[i]?.adult_person);
      sum_child += parseInt(subPackages[i]?.child_person);
      if (subPackages[i]?.child_price != "" && subPackages[i]?.child_price != null) {
        sum_price += parseInt(subPackages[i]?.child_price) * parseInt(subPackages[i]?.child_person);
      }
    }
    setSubAdultQty(sum_adult);
    setSubChildQty(sum_child);
    setPackagePrice(sum_price);
    if (sum_adult + sum_child == 0) {
      setPackageName("SELECT PACKAGE");
    } else {
      setPackageName(sum_adult + sum_child + " items, " + sum_price + " AED");
    }
  }
  function calulateMeals() {
    let sum_person = 0;
    let sum_price = 0;
    for (let i = 0; i < meals?.length; i++) {
      sum_person += parseInt(meals[i]?.person);
      sum_price += parseInt(meals[i]?.price) * parseInt(meals[i]?.person);
    }
    setMealPrice(sum_price);
    if (sum_person == 0) {
      setMealName("SELECT MEALS");
    } else {
      setMealName(sum_person + " items, " + sum_price + " AED");
    }
  }

  const nextCheckPackage = () => {
    let temp = 100 / progressCount;
    // if (!isAddress) {
    //   isAddress = true;
    //   if (parseInt(progressValue + temp) == 100) {
    //     showBooking(true);
    //   }
    //   if (!enable_date_picker) {
    //     showAddressSelector(true);
    //     nextPage();
    //   }
    // } else 
    if (!isDate) {
      isDate = true;
      if (parseInt(progressValue + temp) == 100) {
        showBooking(true);
      }
      if (!enable_date_picker) {
        showTimeSlotSelector(true);
        nextPage();
      }
    } else if (!isTime) {
      isTime = true;
      if (parseInt(progressValue + temp) == 100) {
        showBooking(true);
      }
      if (!enable_time_picker) {
        showSubPackageSelector(true);
        nextPage();
      }
    } else if (!isSub) {
      isSub = true;
      if (parseInt(progressValue + temp) == 100) {
        showBooking(true);
      }
      if (!enable_sub_packages) {
        showMealSelector(true);
        nextPage();
      }
    } else if (!isTransport) {
      isTransport = true;
      if (parseInt(progressValue + temp) == 100) {
        showBooking(true);
      }
      if (!enable_transport) {
        showTransportSelector(true);
        nextPage();
      }
    } else if (!isMeal) {
      isMeal = true;
      if (parseInt(progressValue + temp) == 100) {
        showBooking(true);
      }
      if (!enable_meal) {
        showBooking(true);
        nextPage();
      }
    }
  };
  function nextPage() {
    if (addPerson == 0 && addChild == 0) {
      alert("Select Passengers - Minimum 1");
      return false;
    }
    if (isDateSelector && enable_date_picker && !isTimeSlotSelector) {
      if (realDate == "") {
        alert("Please Select a Date");
        return false;
      }
      if (total_adult_tickets >= addPerson && total_child_tickets >= addChild) {
        let temp = 100 / progressCount;
        setProgressValue(progressValue + temp);
        if (isTransportSelector) {
          showMealSelector(true);
          nextCheckPackage();
        } else if (isSubPackageSelector) {
          showTransportSelector(true);
          nextCheckPackage();
        } else if (isTimeSlotSelector) {
          showSubPackageSelector(true);
          nextCheckPackage();
        } else if (isDateSelector) {
          showTimeSlotSelector(true);
          nextCheckPackage();
          // } else if (isAddressSelector) {
          //   showAddressSelector(true);
          //   nextCheckPackage();
        } else {
          showDateSelector(true);
          nextCheckPackage();
        }
        return true;
      } else {
        alert("Selected Date is Fully Booked");
        return false;
      }
    }
    if (isTimeSlotSelector && enable_time_picker && !isSubPackageSelector) {
      if (time_slot == "") {
        alert("Please Select a Time");
        return false;
      }
      if (timeSlots?.length < 0) {
        alert("Selected Time is Fully Booked");
        return false;
      }
    }
    // if (collectAddress == "") {
    //   alert("please input address");
    //   return false;
    // }
    if (isLoading) {
      return false;
    }
    let temp = 100 / progressCount;
    setProgressValue(progressValue + temp);
    if (isMealSelector) {
      showMealSelector(false);
      showSubPackageSelector(false);
      showTimeSlotSelector(false);
      showDateSelector(false);
      showTransportSelector(false);
      // showAddressSelector(false);
    } else if (isTransportSelector) {
      showMealSelector(true);
      nextCheckPackage();
    } else if (isSubPackageSelector) {
      showTransportSelector(true);
      nextCheckPackage();
    } else if (isTimeSlotSelector) {
      showSubPackageSelector(true);
      nextCheckPackage();
    } else if (isDateSelector) {
      showTimeSlotSelector(true);
      nextCheckPackage();
      // } else if (isAddressSelector) {
      //   showAddressSelector(true);
      //   nextCheckPackage();
    } else {
      showDateSelector(true);
      nextCheckPackage();
    }
    return true;
  }

  function getProgressValue(slide_name) {
    let value = 100;
    let count = 2;
    switch (slide_name) {
      case "user":
        setProgressValue(100 / progressCount);
        if (100 / progressCount == 100) {
          showBooking(true);
        } else {
          showBooking(false);
        }
        break;
      // case "collect_address":
      //   setProgressValue((count * 100) / progressCount);
      //   if ((count * 100) / progressCount == 100) {
      //     showBooking(true);
      //   } else {
      //     showBooking(false);
      //   }
      //   break;
      case "date":
        setProgressValue((count * 100) / progressCount);
        if ((count * 100) / progressCount == 100) {
          showBooking(true);
        } else {
          showBooking(false);
        }
        break;
      case "time":
        if (enable_date_picker) {
          count++;
        }
        setProgressValue((count * 100) / progressCount);
        if ((count * 100) / progressCount == 100) {
          showBooking(true);
        } else {
          showBooking(false);
        }
        break;
      case "sub_packages":
        if (enable_date_picker) {
          count++;
        }
        if (enable_time_picker) {
          count++;
        }
        setProgressValue((count * 100) / progressCount);
        if ((count * 100) / progressCount == 100) {
          showBooking(true);
        } else {
          showBooking(false);
        }
        break;
      case "transports":
        if (enable_date_picker) {
          count++;
        }
        if (enable_time_picker) {
          count++;
        }
        if (enable_sub_packages) {
          count++;
        }
        setProgressValue((count * 100) / progressCount);
        if ((count * 100) / progressCount == 100) {
          showBooking(true);
        } else {
          showBooking(false);
        }
        break;
      case "meals":
        if (enable_sub_packages) {
          count++;
        }
        if (enable_time_picker) {
          count++;
        }
        if (enable_date_picker) {
          count++;
        }
        if (enable_transport) {
          count++;
        }
        setProgressValue((count * 100) / progressCount);
        if ((count * 100) / progressCount == 100) {
          showBooking(true);
        } else {
          showBooking(false);
        }
        break;
      default:
        break;
    }
  }
  function gotoSlide(slide_name) {
    if (addPerson == 0 && addChild == 0) {
      alert("Select Passengers - Minimum 1");
      return false;
    }
    switch (slide_name) {
      case "user":
        // isAddress = false;
        isDate = false;
        isTime = false;
        isTransport = false;
        isSub = false;
        isMeal = false;
        getProgressValue(slide_name);
        showMealSelector(false);
        showSubPackageSelector(false);
        showTimeSlotSelector(false);
        showDateSelector(false);
        showTransportSelector(false);
        // showAddressSelector(false);
        return true;
      // case "collect_address":
      //   isAddress = true;
      //   isDate = false;
      //   isTime = false;
      //   isTransport = false;
      //   isSub = false;
      //   isMeal = false;
      //   getProgressValue(slide_name);
      //   showMealSelector(false);
      //   showSubPackageSelector(false);
      //   showTimeSlotSelector(false);
      //   showTransportSelector(false);
      //   showDateSelector(false);
      //   showAddressSelector(true);
      //   return true;
      case "date":
        // isAddress = true;
        isDate = true;
        isTime = false;
        isTransport = false;
        isSub = false;
        isMeal = false;
        getProgressValue(slide_name);
        showMealSelector(false);
        showSubPackageSelector(false);
        showTimeSlotSelector(false);
        showTransportSelector(false);
        showDateSelector(true);
        // showAddressSelector(true);
        return true;
      case "time":
        if (realDate == "" && enable_date_picker) {
          alert("Please Select a Date");
          return false;
        }
        if (total_adult_tickets < addPerson || total_child_tickets < addChild) {
          alert("Selected Date is Fully Booked");
          return false;
        }
        // isAddress = true;
        isDate = true;
        isTime = true;
        isTransport = false;
        isSub = false;
        isMeal = false;
        getProgressValue(slide_name);
        showMealSelector(false);
        showSubPackageSelector(false);
        showTimeSlotSelector(true);
        showTransportSelector(false);
        showDateSelector(true);
        // showAddressSelector(true);
        return true;
      case "sub_packages":
        if (realDate == "" && enable_date_picker) {
          alert("Please Select a Date");
          return false;
        }
        if (total_adult_tickets < addPerson || total_child_tickets < addChild) {
          alert("Selected Time is Fully Booked");
          return false;
        }
        if (time_slot == "" && enable_time_picker) {
          return false;
        }

        // isAddress = true;
        isDate = true;
        isTime = true;
        isSub = true;
        isTransport = false;
        isMeal = false;
        getProgressValue(slide_name);
        showTransportSelector(false);
        showMealSelector(false);
        showSubPackageSelector(true);
        showTimeSlotSelector(true);
        showDateSelector(true);
        // showAddressSelector(true);
        return true;
      case "transports":
        if (realDate == "" && enable_date_picker) {
          alert("Please Select a Date");
          return false;
        }
        if (total_adult_tickets < addPerson || total_child_tickets < addChild) {
          alert("Selected Date is Fully Booked");
          return false;
        }
        if (time_slot == "" && enable_time_picker) {
          return false;
        }

        // isAddress = true;
        isDate = true;
        isTime = true;
        isSub = true;
        isTransport = true;
        isMeal = false;
        getProgressValue(slide_name);
        showMealSelector(false);
        showSubPackageSelector(true);
        showTimeSlotSelector(true);
        showTransportSelector(true);
        showDateSelector(true);
        // showAddressSelector(true);
        return true;
      case "meals":
        if (realDate == "" && enable_date_picker) {
          alert("Please Select a Date");
          return false;
        }
        if (total_adult_tickets < addPerson || total_child_tickets < addChild) {
          alert("Selected Date is Fully Booked");
          return false;
        }
        if (time_slot == "" && enable_time_picker) {
          return false;
        }

        // isAddress = true;
        isDate = true;
        isTime = true;
        isSub = true;
        isTransport = true;
        isMeal = true;
        getProgressValue(slide_name);
        showMealSelector(true);
        showSubPackageSelector(true);
        showTimeSlotSelector(true);
        showTransportSelector(true);
        showDateSelector(true);
        // showAddressSelector(true);
        return true;
    }
  }

  const setNumPerson = (adult, child) => {
    setAddPerson(adult);
    setAddChild(child);
  };
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  const DetailView = () => (
    <div
      className="package-detail-banner"
      style={{
        backgroundImage: `url('${`https://api.discovershurooq.ae/files/${packageDetails?.img}`}')`,
      }}
    >
      <div className="w-100">
        <p className="location-name">
          <span>{packageDetails?.destination_name}</span>
        </p>
        <h2 className="location-title">{packageDetails?.package_name}</h2>
        {/* <LocationDetailBar adultPrice={adultPrice} childPrice={childPrice} /> */}
        <div className="scroll_container" onClick={handleScroll}>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    </div>
  );
  const coupon = () => {
    const data = new FormData();
    data.append("action", "couponValidity");
    data.append("package", packageDetails?.id);
    data.append("coupon", couponValue);
    couponValidity(data);
  };
  useEffect(() => {
    let totalAmount =
      addPerson * packageDetails?.price +
      addChild * packageDetails?.child_price +
      packagePrice +
      mealPrice +
      // transportPrice * (addChild + addPerson);
      transportPrice;

    if (couponValidityStatus == 0) {
      setCoupon(false);
      setCouponID("");
      setCouponValue("");
      setRealCoupon("");
      setOffType("");
      setCouponBuy("");
      setCouponBuyQty(0);
      setCouponGet("");
      setCouponGetQty(0);
      setOffValue(0);
      setAlert(true);
      setTotal(totalAmount);
      setTimeout(
        function () {
          setAlert(false);
        }.bind(this),
        2000
      );
    } else if (couponValidityStatus == 1) {
      setCoupon(true);
      setCouponID(couponValidityData?.id);
      setOffType(couponValidityData?.type);
      setCouponBuy(couponValidityData?.buy);
      setCouponBuyQty(couponValidityData?.buy_qty);
      setCouponGet(couponValidityData?.free);
      setCouponGetQty(couponValidityData?.free_qty);
      setOffValue(parseInt(couponValidityData?.off));
      setRealCoupon(couponValue);
      if (couponValidityData?.type == "aed") {
        if (totalAmount - parseInt(couponValidityData?.off) > 0) {
          setTotal(totalAmount - parseInt(couponValidityData?.off));
        } else {
          setTotal(0);
        }
      } else if (couponValidityData?.type == "percentage") {
        if (totalAmount - (totalAmount * parseInt(couponValidityData?.off)) / 100 > 0) {
          setTotal(
            (totalAmount - (totalAmount * parseInt(couponValidityData?.off)) / 100).toFixed(2)
          );
        } else {
          setTotal(0);
        }
      }
      else if (couponValidityData?.type == "buy_x_get_y") {
        // if (couponValidityData?.buy == "adult" && addPerson >= couponValidityData?.buy_qty) {
        //   if (couponValidityData?.free == "child") {
        //     if (addChild > couponValidityData?.free_qty) {
        //       setTotal(totalAmount - packageDetails?.child_price * couponValidityData?.free_qty);
        //     }
        //     else {
        //       setTotal(totalAmount - packageDetails?.child_price * addChild);
        //     }
        //   }
        //   else if (couponValidityData?.free == "adult") {
        //     if (addPerson > couponValidityData?.free_qty) {
        //       setTotal(totalAmount - packageDetails?.adult_price * couponValidityData?.free_qty);
        //     }
        //     else {
        //       setTotal(totalAmount - packageDetails?.adult_price * addPerson);
        //     }
        //   }
        // }
        // else if (couponValidityData?.buy == "child" && addChild >= couponValidityData?.buy_qty) {
        //   if (couponValidityData?.free == "child") {
        //     if (addChild > couponValidityData?.free_qty) {
        //       setTotal(totalAmount - packageDetails?.child_price * couponValidityData?.free_qty);
        //     }
        //     else {
        //       setTotal(totalAmount - packageDetails?.child_price * addChild);
        //     }
        //   }
        //   else if (couponValidityData?.free == "adult") {
        //     if (addPerson > couponValidityData?.free_qty) {
        //       setTotal(totalAmount - packageDetails?.adult_price * couponValidityData?.free_qty);
        //     }
        //     else {
        //       setTotal(totalAmount - packageDetails?.adult_price * addPerson);
        //     }
        //   }
        // }
        let buyQty = couponValidityData?.buy_qty;
        let freeQty = couponValidityData?.free_qty;

        let tempChildQty = addChild;
        let tempChildQtyt = addChild;
        let tempAdultQty = addPerson;
        let tempAdultQtyt = addPerson;

        let buyType = couponValidityData?.buy;
        let freeType = couponValidityData?.free;

        if (buyType == "adult") {
          for (var i = 1; i <= tempAdultQtyt; i++) {
            if (i % buyQty == 0) {
              if (freeType == "child") {
                for (var j = 1; j <= freeQty; j++) {
                  if (tempChildQty > 0)
                    tempChildQty = tempChildQty - 1;
                }
              }
              else if (freeType == "adult") {

                for (var j = 1; j <= freeQty; j++) {
                  if (tempAdultQty > i)
                    tempAdultQty = tempAdultQty - 1;
                }
              }
            }
          }
        }
        else if (buyType == "child") {
          for (var i = 1; i <= tempChildQtyt; i++) {
            if (i % buyQty == 0) {
              if (freeType == "child") {
                for (var j = 1; j <= freeQty; j++) {
                  if (tempChildQty > i)
                    tempChildQty = tempChildQty - 1;
                }
              }
              else if (freeType == "adult") {
                for (var j = 1; j <= freeQty; j++) {
                  if (tempAdultQty > 0)
                    tempAdultQty = tempAdultQty - 1;
                }
              }
            }
          }
        }
        var total_amount = (tempChildQty * packageDetails?.child_price) + (tempAdultQty * packageDetails?.price);
        var couponVal = addPerson * adultPrice + addChild * childPrice - total_amount;
        setTotal(totalAmount - couponVal)
        // else {
        //   toast.error("Minimum " + couponValidityData?.buy_qty + " " + couponValidityData?.buy + " required")
        //   setTotal(totalAmount);
        // }
      }
      else {
        setTotal(totalAmount);
      }
      setWobble(1);
      setCouponValue("");
      couponValidity("");
    }
  }, [couponValidityStatus]);

  return (
    <>
      {/* <div className="package-detail"> */}
      <div className="PackageOptionCard">
        {/* <div className="action row"> */}
        {packageDetails?.id && (
          <ProductDetailSteps
            timeSlots={timeSlots}
            time_slot={time_slot}
            timeSlotValue={timeSlotValue}
            setShowTimeSlot={setShowTimeSlot}
            showTimeSlot={showTimeSlot}
            packageDetails={packageDetails}
            setNumPerson={setNumPerson}
            nextPage={nextPage}
            handleDateChange={handleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            selectedDate={selectedDate}
            isBooking={isBooking}
            bookYourPackage={bookYourPackage}
            gotoSlide={gotoSlide}
            ticketsValue={addPerson * adultPrice + addChild * childPrice}
            realDate={realDate}
            packagePrice={packagePrice}
            mealPrice={mealPrice}
            addPerson={addPerson}
            addChild={addChild}
            selectedTimeSlot={selectedTimeSlot}
            changeTimeSlot={changeTimeSlot}
            subPackages={subPackages}
            addSubAdult={addSubAdult}
            addSubChild={addSubChild}
            // setCollectAdr={setCollectAdr}
            meals={meals}
            addMealPerson={addMealPerson}
            isLoading={isLoading}
            transports={transports}
            transportPrice={transportPrice}
            isShowDetails={isShowDetails}
            enable_date_picker={enable_date_picker}
            enable_time_picker={enable_time_picker}
            enable_transport={enable_transport}
            enable_meal={enable_meal}
            enable_sub_packages={enable_sub_packages}
            // collect_address={collect_address}
            transport_id={transport_id}
            isOneWay={isOneWay}
            checkTransport={checkTransport}
            setTransportID={setTransportID}
            isShowCoupon={isShowCoupon}
            realCoupon={realCoupon}
            total={total}
            disabled_dates={disabled_dates}
            disabled_weeks={disabled_weeks}
          // collectAddress={collectAddress}
          />
        )}
        {/* </div> */}
      </div>
      {/* <div className="PackageOptionCard">
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
    </div> */}

      <SwipeableBottomSheet
        overflowHeight={0}
        open={showDetails}
        onChange={() => {
          isShowDetails(false);
        }}
      >
        <div className="booking-data">
          <div
            className="action row"
            style={{ marginRight: 0, marginLeft: 0, textAlign: "center" }}
          >
            <div id="mdiv" style={{ marginLeft: 'auto' }} >
              <div class="mdiv" onClick={() => isShowDetails(false)}>
                <div class="md"></div>
              </div>
            </div>
            <div className="counter col-md-12 col-12 ">
              <h4 className="package_name">{packageDetails?.package_name}</h4>
              <h4 className="pending">Payment Pending</h4>
            </div>
            <div className="row counter total">
              <div className="col-md-12 col-12 coupon_title">
                <p>AED {total == "" ? 0 : total}</p>
              </div>
              {realCoupon && (
                <div className="col-md-12 col-12 coupon_content">
                  <p>
                    Discount Code: {realCoupon} [AED{" "}
                    {(
                      addPerson * adultPrice +
                      addChild * childPrice +
                      mealPrice +
                      packagePrice +
                      transportPrice -
                      // transportPrice * (addPerson + addChild) -
                      total
                    ).toFixed(2)}
                    ]
                  </p>
                </div>
              )}
            </div>
            {packageDetails?.enable_date_picker == "1" && (
              <div className="row counter">
                <div className="col-md-6 col-6 align-left">
                  <p>
                    <b>Date</b>
                  </p>
                </div>
                <div className="col-md-6 col-6 align-right">
                  <p>
                    <b>{Moment(selectedDate).format("DD MMM, YYYY")}</b>
                  </p>
                  <p>{timeSlots[selectedTimeSlot]?.value}</p>
                </div>
                <hr></hr>
              </div>
            )}

            <div className="row counter">
              {(addPerson > 0 || addChild > 0) && (
                <>
                  <div className="col-md-6 col-6 align-left package_title">
                    <p>
                      <b>Tickets:</b>
                    </p>
                  </div>
                  <div className="col-md-6 col-6 align-right package_title">
                    <p>
                      <b>AED {addPerson * adultPrice + addChild * childPrice}</b>
                    </p>
                  </div>
                  <div className="col-md-6 col-6 align-left">
                    <p>Adult: {addPerson}</p>
                  </div>
                  <div className="col-md-6 col-6 align-right">
                    <p>Child: {addChild}</p>
                  </div>
                  <hr></hr>
                </>
              )}
            </div>
            {/* <div className="row counter">
              {collectAddress && (
                <>
                  <div className="col-md-6 col-6 align-left package_title">
                    <p>
                      <b>Address:</b>
                    </p>
                  </div>

                  <div className="col-md-6 col-6 align-right">
                    <p>{collectAddress}</p>
                  </div>
                  <hr></hr>
                </>
              )}
            </div> */}
            <div className="row counter">
              {isSubTitle && (
                <>
                  <div className="col-md-6 col-6 align-left package_title">
                    <p>
                      <b>SubPackages:</b>
                    </p>
                  </div>
                  <div className="col-md-6 col-6 align-right package_title">
                    <p>
                      <b>AED {packagePrice}</b>
                    </p>
                  </div>
                </>
              )}
              {subPackages.map((item, id) => {
                return (
                  <>
                    {(item.adult_person > 0 || item.child_person > 0) && (
                      <>
                        <div key={id} className="col-md-6 col-6 align-left">
                          <p>{item.value}</p>
                        </div>
                        <div className="col-md-6 col-6 align-right">
                          <p>
                            AED{" "}
                            {item.adult_price * item.adult_person +
                              item.child_person * item.child_price}
                          </p>
                        </div>
                        <div className="col-md-6 col-6 align-left">
                          <p>Adult: {item.adult_person}</p>
                        </div>
                        <div className="col-md-6 col-6 align-right">
                          <p>Child: {item.child_person}</p>
                        </div>
                        <hr></hr>
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="row counter">
              {transport_id > 0 && (
                <>
                  <div className="col-md-6 col-6 align-left package_title">
                    <p>
                      <b>People for Transport:</b>
                    </p>
                  </div>
                  <div className="col-md-6 col-6 align-right package_title">
                    <p>
                      <b>{addPerson + addChild}</b>
                    </p>
                  </div>
                  <div className="col-md-6 col-6 align-left">
                    <p>{transport_name}</p>
                  </div>
                  <div className="col-md-6 col-6 align-right">
                    <p>AED {transportPrice}</p>
                  </div>
                  <hr></hr>
                </>
              )}
            </div>
            <div className="row counter">
              {isMealTitle && (
                <>
                  <div className="col-md-6 col-6 align-left package_title">
                    <p>
                      <b>Meals:</b>
                    </p>
                  </div>
                  <div className="col-md-6 col-6 align-right package_title">
                    <p>
                      <b>AED {mealPrice}</b>
                    </p>
                  </div>
                </>
              )}
              {meals.map((item, id) => {
                return (
                  <>
                    {item.person > 0 && (
                      <>
                        <div key={id} className="col-md-6 col-6 align-left">
                          <p>{item.value}</p>
                        </div>
                        <div className="col-md-6 col-6 align-right">
                          <p>AED {item?.price * item.person}</p>
                        </div>
                        <hr></hr>
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="col-md-6 col-6" style={{ marginTop: 2 }}>
              {isLoading ? (
                <Button className="next-btn" color="success">
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  Book Now
                </Button>
              ) : (
                <>
                  {(adult_overall_limit == "" ||
                    parseInt(adult_overall_limit) >= parseInt(adult_booked_times) + addPerson) &&
                    (child_overall_limit == "" ||
                      parseInt(child_overall_limit) >= parseInt(child_booked_times) + addChild) ? (
                    <button
                      className="next-btn btn btn-primary"
                      onClick={() => {
                        bookYourPackage();
                      }}
                    >
                      Book Now
                    </button>
                  ) : (
                    <button className="next-btn btn btn-primary" onClick={() => { }}>
                      Package Slots are Fully Booked
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </SwipeableBottomSheet>
      <SwipeableBottomSheet
        overflowHeight={0}
        open={showCoupon}
        style={{ marginBottom: 80, maxWidth: 450, width: "100%", margin: "auto" }}
        onChange={() => {
          isShowCoupon(false);
          setWobble(0);
          setCouponValue("");
        }}
      >
        <div className={isAlert ? "coupon-detail coupon-alert" : "coupon-detail"}>
          <div
            className="action row"
            style={{
              marginRight: 0,
              marginLeft: 0,
              textAlign: "center",
              backgroundColor: "#e4e4e4",
            }}
          >
            <div className="counter col-md-12 col-12">
              <div className="coupon row">
                <div className="col-md-12 col-12">
                  <input
                    placeholder="Promo Code"
                    value={couponValue}
                    onChange={(e) => setCouponValue(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row" style={{ justifyContent: "center" }}>
                {isAlert && (
                  <Alert color="danger" style={{ marginBottom: 0 }}>
                    Coupon not Valid or Expired
                  </Alert>
                )}
              </div>
              {token ?
                <div
                  className="apply row"
                  onClick={() => coupon()}
                  wobble={wobble}
                  onAnimationEnd={() => {
                    setWobble(0);
                    isShowCoupon(false);
                  }}
                >
                  <p color="success">Apply</p>
                </div> :
                <div
                  className="apply row"
                  onClick={() => history.push("/login")}
                  wobble={wobble}
                  onAnimationEnd={() => {
                    setWobble(0);
                    isShowCoupon(false);
                  }}
                >
                  <p color="success">Signup to Apply Coupon</p>
                </div>
              }
            </div>
          </div>
        </div>
      </SwipeableBottomSheet>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = ({
  user: {
    bookingPackageStatus,
    token,
    bookingData,
    packageDetails,
    dateAvailability,
    packageSlots,
    couponValidityStatus,
    couponValidityData,
  },
}) => ({
  bookingPackageStatus,
  token,
  bookingData,
  packageDetails,
  dateAvailability,
  packageSlots,
  couponValidityStatus,
  couponValidityData,
});

const mapDispatchToProps = {
  bookPackages: userAction.bookPackages,
  getPackageDetails: userAction.getPackageDetails,
  getDateAvailable: userAction.getDateAvailable,
  getPackageSlots: userAction.getPackageSlots,
  couponValidity: userAction.couponValidity,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PackageOptions));
