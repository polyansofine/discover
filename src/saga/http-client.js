import { call, select, delay, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import Idx from "idx";
import axiosInstance from "../util/axios-instance";
import { push } from 'react-router-redux';
import Cookies from 'universal-cookie';

function* HttpClient(payload, isLoader = true, authorization = true) {
  // 
  if (!navigator.onLine) {
    return {
      error: true,
      result: null,
    };
  }
  
  if (isLoader) {
    yield delay(250);
  }
  const data = { ...payload };
  if (authorization) {
    const authToken = yield select(({ user: { token } }) => token);
    if (authToken || authToken === '') {
      data.headers = { "Authorization": `Bearer ${authToken}` };
    } else {
      // return {
        // yield put(NavigationActions.navigate({ routeName: '/' }));


      // };
    }
  }


  // eslint-disable-next-line no-console

  try {
    const {
      data: result,
      headers: { authorization: authentication = "" },
    } = yield call(axiosInstance, data);



    // eslint-disable-next-line no-console

    return {
      error: null,
      result,
    };
  } catch (error) {
    
    // eslint-disable-next-line no-console

    if (Idx(error, (_) => _.code)) {
      if (error.code === "ECONNABORTED") {
        const message = "Please try later our servers are not responding.";

        toast.error(message);
      } else if (error.code === 401) {
        localStorage.setItem("loggedIn", "");
        yield delay(250);
        toast.error(error.message);
      } else if (error.code === 402) {
        // show nothing
      } else if (error.code === 400) {
        toast.error(error.message);
      } else {
        toast.error(error.message);
      }
    } else {
      toast.error(error.message);
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;
