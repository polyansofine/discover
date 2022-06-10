import React from "react";
import ReactDOM from "react-dom";
import "react-calendar/dist/Calendar.css";
import "react-phone-input-2/lib/style.css";
import "react-owl-carousel2/lib/styles.css";
import "./assets/style/main.scss";
import App from "./App";
import en from "./translations/en.json";
import ar from "./translations/ar.json";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./config/configure-store";
import { setDefaultLanguage, setDefaultTranslations } from "react-multi-lang";

const store = configureStore();
setDefaultTranslations({ ar, en });
setDefaultLanguage("en");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
