import React, { useState, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import { Link } from "react-router-dom";
import { Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getLanguage, setLanguage, useTranslation } from "react-multi-lang";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { fromSignUp } from "../../../actions/user-action-type";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { Alert, Spinner } from "reactstrap";
import { validateEmail } from "../../../util";
import { scrollToTopSmooth } from "../../../util";

const UserIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
         d="M20 22H18V20C18 19.2044 17.6839 18.4413 17.1213 17.8787C16.5587 17.3161 15.7956 17 15 17H9C8.20435 17 7.44129 17.3161 6.87868 17.8787C6.31607 18.4413 6 19.2044 6 20V22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13ZM12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
         fill="#9FA0A0"
      />
   </svg>
);

const EmailIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
         d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
         fill="#9FA0A0"
      />
   </svg>
);

const RegisterForm = (props) => {
   const history = useHistory();
   const t = useTranslation();
   const [phone, setPhoneNumber] = useState("");
   const [inputs, setInputs] = useState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      optCode: "",
      phone: "+971",
   });
   const pathname = localStorage.getItem("pathname");
   const { email, password, firstName, lastName, optCode } = inputs;
   const { registerStatus, register, login, token, sendOtp, otpStatus, loginData, otpData, loginStatus } = props;
   const [phone_error, setPhoneError] = useState("");
   const [alertText, setAlertText] = useState("");
   const [isAlert, setAlert] = useState("");
   const [alertColor, setAlertColor] = useState("");
   const [isSubmit, setSubmit] = useState(false);
   const [isOtp, setotpStatus] = useState(false);
   const [opt_error, setOptError] = useState("");
   const [btnLoading, setBtnLoading] = useState(false);

   const [error, setError] = useState({ errorType: "", errorText: "" });
   const clearError = () => setError({ errorType: "", errorText: "" });
   const handleInput = (e) => {
      clearError();
      if (e.target.name == "phone" && e.target.value.length < 4) setInputs({ ...inputs, [e.target.name]: "+971" });
      else setInputs({ ...inputs, [e.target.name]: e.target.value });
   };
   const dispatch = useDispatch();
   const fromPage = () => {
      dispatch(fromSignUp());
      history.push("/login");
   };

   useEffect(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
   }, []);

   useEffect(() => {
      if (!isOtp) {
         return;
      }
      setBtnLoading(false);
      setAlertText(otpData?.message);
      if (otpStatus == "success") {
         setAlertColor("success");
         setAlert(true);
      } else if (otpStatus == "failed") {
         setAlertColor("danger");
         setAlert(true);
      }
      setTimeout(
         function () {
            setAlert(false);
            setAlertText("");
         }.bind(this),
         3000
      );
   }, [otpStatus]);

   useEffect(() => {
      //console.log("loginStatus...", loginStatus)
      setBtnLoading(false);
      if (loginStatus === "success") {
         console.log(loginData?.message);
         setAlertText(loginData?.message);
         setAlert(true);
         setAlertColor("success");
         setTimeout(
            function () {
               history.push(pathname);
               setAlert(false);
               setAlertText("");
            }.bind(this),
            2000
         );
      } else if (loginStatus === "failed") {
         setAlertText(loginData?.message);
         setAlert(true);
         setAlertColor("danger");
         setTimeout(
            function () {
               setAlert(false);
               setAlertText("");
            }.bind(this),
            2000
         );
      }
   }, [loginStatus]);

   useEffect(() => {
      if (registerStatus === "success" && token) {
         setAlertText(t("Message.register_success"));
         setAlert(true);
         setAlertColor("success");
         setSubmit(false);
         setTimeout(
            function () {
               history.push(pathname);
               setAlert(false);
               setAlertText("");
            }.bind(this),
            2000
         );
      } else if (registerStatus === "failed" && isSubmit) {
         setAlertText(t("Message.valid_warning"));
         setAlert(true);
         setAlertColor("danger");
         setSubmit(false);
         setTimeout(
            function () {
               setAlert(false);
               setAlertText("");
            }.bind(this),
            3000
         );
      } else if (registerStatus === "exist" && isSubmit) {
         setAlertText(t("Message.exist_email"));
         setAlert(true);
         setAlertColor("danger");
         setSubmit(false);
         setTimeout(
            function () {
               setAlert(false);
               setAlertText("");
            }.bind(this),
            3000
         );
      }
   }, [registerStatus]);
   const validateForm = () => {
      setPhoneError("");
      if (firstName === "") {
         setError({
            errorType: "firstName",
            errorText: t("Message.name_warning"),
         });
         return false;
      }
      if (lastName === "") {
         setError({
            errorType: "lastName",
            errorText: t("Message.name_warning"),
         });
         return false;
      }
      if (email === "") {
         setError({
            errorType: "email",
            errorText: t("Message.email_warning"),
         });
         return false;
      }
      if (!validateEmail(email)) {
         setError({
            errorType: "email",
            errorText: t("Message.email_valid_warning"),
         });
         return false;
      }
      if (phone == null || phone === "") {
         setPhoneError(t("Message.phone_warning"));
         return false;
      }
      // if (isPossiblePhoneNumber(phone) === false) {
      //   setPhoneError(t('Message.phone_valid_warning'));
      //   return false;
      // }
      // if (password === "") {
      //   setError({
      //     errorType: "password",
      //     errorText: t('Message.password_warning'),
      //   });
      //   return false;
      // }

      return true;
   };
   const handleSubmit = () => {
      if (btnLoading) return;
      if (otpStatus == "success" && isOtp == true) {
         if (optCode == "") {
            setOptError("Please Enter Valid Code");
         } else {
            setBtnLoading(true);
            const data = new FormData();
            data.append("action", "verifyLoginOTP");
            data.append("name", firstName + lastName);
            data.append("email", email);
            data.append("mobile", phone);
            data.append("otp", optCode);
            setTimeout(
               function () {
                  login(data);
               }.bind(this),
               2000
            );
         }
         return;
      }

      if (!validateForm()) {
         return null;
      } else {
         // const data = new FormData();
         // data.append("action", "register");
         // data.append("email", email);
         // data.append("name", name);
         // data.append("password", password);
         // data.append("mobile", phone);
         // register(data);
         // setSubmit(true);
         // history.push("/home");

         setBtnLoading(true);
         const data = new FormData();
         data.append("action", "sendOtp");
         data.append("name", `${firstName} ${lastName}`);
         data.append("email", email);
         data.append("mobile", phone);
         setTimeout(
            function () {
               setotpStatus(true);
               sendOtp(data);
            }.bind(this),
            2000
         );
      }
   };

   return (
      <section className="sign-up-section">
         <div className="main-form-card">
            <div className="main-form">
               <h2 className="title">Sign Up</h2>
               <div className="inp-wrapper">
                  {isAlert && <Alert color={alertColor}>{alertText}</Alert>}
                  <label>First Name</label>
                  <div className="icon-input">
                     <UserIcon />
                     <Input placeholder="First name" name="firstName" value={firstName} onChange={handleInput} />
                     <p>{error.errorType == "firstName" ? error.errorText : ""}</p>
                  </div>
               </div>
               <div className="inp-wrapper">
                  <label>Last Name</label>
                  <div className="icon-input">
                     <UserIcon />
                     <Input placeholder="Last name" name="lastName" value={lastName} onChange={handleInput} />
                     <p>{error.errorType == "lastName" ? error.errorText : ""}</p>
                  </div>
               </div>

               <div className="inp-wrapper">
                  <label>Email</label>
                  <div className="icon-input">
                     <EmailIcon />
                     <Input placeholder="Email" type="email" name="email" value={email} onChange={handleInput} />
                     <p>{error.errorType == "email" ? error.errorText : ""}</p>
                  </div>
               </div>

               <div className="inp-wrapper">
                  <label>Mobile number</label>
                  {/* <PhoneInput country={"ae"} value={phone} onChange={setPhoneNumber} /> */}
                  <PhoneInput
                     enableAreaCodes={true}
                     withCountryCallingCode={true}
                     defaultCountry="AE"
                     country={"ae"}
                     countryCallingCodeEditable={false}
                     value={phone}
                     onChange={(value) => {
                        setPhoneNumber(value);
                     }}
                  />
                  <span className="d-block form-error text-danger">{phone_error}</span>
               </div>
               {/* <Button color="primary" onClick={handleSubmit}>Send OTP</Button> */}

               {otpStatus == "success" && isOtp == true ? (
                  <div className="inp-wrapper">
                     <label>OTP Input</label>
                     <div className="position-relative">
                        <Input
                           className="otpInput"
                           type="text"
                           name="optCode"
                           value={optCode}
                           placeholder="Enter OTP Code"
                           onChange={handleInput}
                        />
                        <span className="bar" />
                     </div>
                     <span className="d-block form-error text-danger">{opt_error}</span>
                  </div>
               ) : null}

               <Button color="primary" disabled={btnLoading} onClick={handleSubmit}>
                  {otpStatus == "success" && isOtp == true ? (
                     <>
                        {btnLoading ? (
                           <>
                              <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                              Sending
                           </>
                        ) : (
                           <>Submit OTP</>
                        )}
                     </>
                  ) : (
                     <>
                        {btnLoading ? (
                           <>
                              <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                              Sending
                           </>
                        ) : (
                           <>Send OTP</>
                        )}
                     </>
                  )}
               </Button>

               <p className="already">
                  Already have a account?{" "}
                  <Link to="/login" onClick={scrollToTopSmooth}>
                     Sign in
                  </Link>
               </p>
            </div>
         </div>
      </section>
   );
};

const mapStateToProps = ({
   user: { registerStatus, token, otpStatus, verifyLoginOTP, loginStatus, otpData, loginData },
}) => ({
   registerStatus,
   token,
   otpStatus,
   verifyLoginOTP,
   loginStatus,
   otpData,
   loginData,
});

const mapDispatchToProps = {
   register: userAction.register,
   sendOtp: userAction.sendOtp,
   login: userAction.login,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));
