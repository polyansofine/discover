import { all, call, put, takeLatest } from "redux-saga/effects";
import Cookies from 'universal-cookie';

import {
  GET_HOME_DATA,
  getHomeDataRequested,
  getHomeDataFailed,
  getHomeDataSuccess,
  GET_SLIDER_DATA,
  GET_RESTAURANT_DATA,
  getSliderDataRequested,
  getSliderDataFailed,
  getSliderDataSuccess,
  getRestaurantDataRequested,
  getRestaurantDataFailed,
  getRestaurantDataSuccess,
  GET_DESTINATION_DATA,
  getDestinationDataRequested,
  getDestinationDataFailed,
  getDestinationDataSuccess,
  GET_SEARCHED_DESTINATION_DATA,
  getSearchedDestinationDataRequested,
  getSearchedDestinationDataFailed,
  getSearchedDestinationDataSuccess,
  LOGIN,
  loginRequested,
  loginFailed,
  loginSuccess,
  SENDOTP,
  otpRequested,
  otpFailed,
  otpSuccess,
  UPLOAD_FILE,
  uploadFileRequested,
  uploadFileFailed,
  uploadFileSuccess,
  REGISTER,
  registerRequested,
  registerFailed,
  registerSuccess,
  GET_VOUCHER_DETAILS,
  getVoucherDetailsRequested,
  getVoucherDetailsFailed,
  getVoucherDetailsSuccess,
  GET_NEW_BAR,
  getNewBarSuccess,
  GET_DEST_PACKAGES,
  GET_PACKAGE_DETAILS,

  GET_DATE_AVAILABLE,
  getDateAvailableRequested,
  getDateAvailableFailed,
  getDateAvailableSuccess,

  GET_TAG_DATA,
  getTagDataRequested,
  getTagDataFailed,
  getTagDataSuccess,

  GET_TAG_DATA1,
  getTagData1Requested,
  getTagData1Failed,
  getTagData1Success,

  GET_TAG_DATA2,
  getTagData2Requested,
  getTagData2Failed,
  getTagData2Success,

  GET_SETTING_DATA,
  getSettingDataRequested,
  getSettingDataFailed,
  getSettingDataSuccess,

  GET_PACKAGE_SLOTS,
  getPackageSlotsRequested,
  getPackageSlotsFailed,
  getPackageSlotsSuccess,

  GET_RESTAURANT_DETAILS,
  getdestPackagesRequested,
  getdestPackagesFailed,
  getdestPackagesSuccess,
  getPackageDetailsRequested,
  getPackageDetailsFailed,
  getPackageDetailsSuccess,
  getRestaurantDetailsRequested,
  getRestaurantDetailsFailed,
  getRestaurantDetailsSuccess,
  BOOK_PACKAGES,
  bookPackagesRequested,
  bookPackagesFailed,
  bookPackagesSuccess,
  GET_INVOICES,
  getInvoicesRequested,
  getInvoicesFailed,
  getInvoicesSuccess,
  GET_RAFFLES,
  getRafflesRequested,
  getRafflesFailed,
  getRafflesSuccess,

  GET_COUPON,
  couponValidityRequested,
  couponValidityFailed,
  couponValiditySuccess,

  OLD_PROMOS,
  getOldPromoRequested,
  getOldPromoFailed,
  getOldPromoSuccess,

  NEW_PROMOS,
  getNewPromoRequested,
  getNewPromoFailed,
  getNewPromoSuccess,

  GET_DEST_VOUCHERS,
  getDestVouchersRequested,
  getDestVouchersFailed,
  getDestVouchersSuccess,

  GET_INVOICE,
  getInvoiceRequested,
  getInvoiceFailed,
  getInvoiceSuccess,

  EDIT_PROFILE,
  editProfileRequested,
  editProfileFailed,
  editProfileSuccess,

  CHANGE_PASSWORD,
  changePasswordRequested,
  changePasswordFailed,
  changePasswordSuccess,

  RESET_PASSWORD,
  resetPasswordRequested,
  resetPasswordFailed,
  resetPasswordSuccess,

  GET_NOTIFICATIONS,
  getNotificationsRequested,
  getNotificationsFailed,
  getNotificationsSuccess,

  GET_PROFILE_DETAILS,
  getProfileDetailsRequested,
  getProfileDetailsFailed,
  getProfileDetailsSuccess,

  GET_RAFFLES_STATS,
  getRaffleStatsRequested,
  getRaffleStatsFailed,
  getRaffleStatsSuccess,

  GET_RAFFLES_INVOICES,
  getRaffleByInvoiceRequested,
  getRaffleByInvoiceFailed,
  getRaffleByInvoiceSuccess,
  GET_ORDER_HISTORY,
  getOrderHistoryDataRequested,
  getOrderHistoryDataSuccess,

  GET_LOCATION,
  getLocationRequested,
  getLocationFailed,
  getLocationSuccess
} from "../actions/user-action-type";
import httpClient from "./http-client";


function* getHomeDataHandler({ payload: data }) {
  yield put(
    getHomeDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getHomeDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getHomeDataSuccess({
        status: "success",
        homeData: result,
      })
    );
  }
}


function* getSliderDataHandler({ payload: data }) {
  yield put(
    getSliderDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getSliderDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getSliderDataSuccess({
        status: "success",
        sliderData: result,
      })
    );
  }
}

function* getRestaurantDataHandler({ payload: data }) {
  yield put(
    getRestaurantDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getRestaurantDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getRestaurantDataSuccess({
        status: "success",
        restaurantData: result.data,
      })
    );
  }
}

function* getDestinationDataHandler({ payload: data }) {
  yield put(
    getDestinationDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getDestinationDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getDestinationDataSuccess({
        status: "success",
        destinationData: result,
      })
    );
  }
}

function* getSearchedDestinationDataHandler({ payload: data }) {
  yield put(
    getSearchedDestinationDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getSearchedDestinationDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getSearchedDestinationDataSuccess({
        status: "success",
        searchedDestinationData: result,
      })
    );
  }
}


function* loginHandler({ payload: data }) {
  yield put(
    loginRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.success !== 1) {
    yield put(
      loginFailed({
        loginData: result,
        status: "failed",
      })
    );
  } else {
    yield put(
      loginSuccess({
        status: "success",
        loginData: result,
        token: result.token,
      })
    );
  }
}

function* sendOTPHandler({ payload: data }) {
  yield put(
    otpRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.success !== 1) {
    yield put(
      otpFailed({
        status: "failed",
        otpData: result
      })
    );
  } else {
    yield put(
      otpSuccess({
        status: "success",
        otpData: result
      })
    );
  }
}

function* uploadDataHandler({ payload: data }) {
  yield put(
    uploadFileRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      uploadFileSuccess({
        status: "success",
        uploadData: result,
      })
    );
  }
}

function* registerHandler({ payload: data }) {
  yield put(
    registerRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  // ivan code - p.w dev
  if (result.success == 0) {
    yield put(
      registerFailed({
        status: "exist"
      })
    )
    // old code
    // if (result.login_required === 1) {
    //  var currentLocation = window.location.origin;
    //   window.location.href = currentLocation + '/login'

  } else {
    yield put(
      registerSuccess({
        status: "success",
        token: result.token,
      })
    );
  }
}

function* getVoucherDetailsHandler({ payload: data }) {
  yield put(
    getVoucherDetailsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getVoucherDetailsSuccess({
        status: "success",
        voucherData: result
      })
    );
  }
}

function* getNewBarHandler({ payload: data }) {

  yield put(
    getNewBarSuccess({
      status: "success",
      isNewBar: data
    })
  );
}




function* getDestPackagesHandler({ payload: data }) {
  yield put(
    getdestPackagesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  console.log('data=', payload)

  const { result } = yield call(httpClient, payload, true, false);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      getdestPackagesSuccess({
        status: "success",
        destPackagesData: result.data
      })
    );
  }
}

function* getPackageDetailsHandler({ payload: data }) {
  yield put(
    getPackageDetailsRequested({
      status: "requested",
    })
  );
  if (data == undefined) {
    yield put(
      getPackageDetailsSuccess({
        status: "success",
        packageDetails: {}
      })
    );
  } else {
    const payload = {
      data: data,
      method: "post",
      url: 'api/',
      // url: 'client/v1/client/filter'
    };

    const { result } = yield call(httpClient, payload, true, false);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        getPackageDetailsSuccess({
          status: "success",
          packageDetails: result.data
        })
      );
    }
  }
}

function* getDateAvailableHandler({ payload: data }) {
  yield put(
    getDateAvailableRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      getDateAvailableSuccess({
        status: "success",
        dateAvailability: result
      })
    );
  }
}

function* getPackageSlotsHandler({ payload: data }) {
  yield put(
    getPackageSlotsRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      getPackageSlotsSuccess({
        status: "success",
        packageSlots: result.timeslots
      })
    );
  }
}

function* getRestaurantDetailsHandler({ payload: data }) {
  yield put(
    getRestaurantDetailsRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      getRestaurantDetailsSuccess({
        status: "success",
        restaurantDetails: result.data
      })
    );
  }
}


function* bookPackageHandler({ payload: data }) {
  yield put(
    bookPackagesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  if (data == "") {
    yield put(
      bookPackagesSuccess({
        status: "warning",
        bookingData: []
      })
    );
  } else {
    const { result } = yield call(httpClient, payload, true, true);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        bookPackagesSuccess({
          status: "success",
          bookingData: result.data
        })
      );
    }
  }
}

function* couponHandler({ payload: data }) {
  yield put(
    couponValidityRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  if (data == "") {
    yield put(
      couponValiditySuccess({
        status: "warning",
      })
    );
  } else {
    const { result } = yield call(httpClient, payload, true, false);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        couponValiditySuccess({
          status: result.success,
          couponValidityData: result.data,
        })
      );
    }
  }
}

function* getInvoicesHandler({ payload: data }) {
  yield put(
    getInvoicesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      getInvoicesSuccess({
        status: "success",
        invoicesData: result
      })
    );
  }
}


function* getRafflesHandler({ payload: data }) {
  yield put(
    getRafflesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getRafflesFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getRafflesSuccess({
        status: "success",
        rafflesData: result
      })
    );
  }
}

function* oldPromoHandler({ payload: data }) {
  yield put(
    getOldPromoRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
  };
  const { result } = yield call(httpClient, payload, true, true);
  if (result.login_required === 1) {
    // var currentLocation = window.location.origin;
    // window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getOldPromoSuccess({
        status: "success",
        oldPromosData: result
      })
    );
  }
}

function* newPromoHandler({ payload: data }) {
  yield put(
    getNewPromoRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    // var currentLocation = window.location.origin;
    // window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getNewPromoSuccess({
        status: "success",
        newPromosData: result
      })
    );
  }
}


function* destVoucherHandler({ payload: data }) {
  yield put(
    getDestVouchersRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getDestVouchersSuccess({
        status: "success",
        destinationVoucherData: result
      })
    );
  }
}

function* locationHandler({ payload: data }) {
  yield put(
    getLocationRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getLocationSuccess({
        status: "success",
        locationData: result
      })
    );
  }
}

function* invoiceHandler({ payload: data }) {
  yield put(
    getInvoiceRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  // if (result.login_required === 1) {
  //   var currentLocation = window.location.origin;
  //   window.location.href = currentLocation + '/login'

  // } else {
  yield put(
    getInvoiceSuccess({
      status: "success",
      invoiceData: result.data
    })
  );
  // }
}

function* orderHistoryHandler({ payload: data }) {
  yield put(
    getOrderHistoryDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getOrderHistoryDataSuccess({
        status: "success",
        orderHistoryData: result.data
      })
    );
  }
}

function* editProfileHandler({ payload: data }) {
  yield put(
    editProfileRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      editProfileSuccess({
        status: "success",
        // destinationVoucherData: result
      })
    );
  }
}



function* changePasswordHandler({ payload: data }) {
  yield put(
    changePasswordRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      changePasswordSuccess({
        status: "success",
        // destinationVoucherData: result
      })
    );
  }
}

function* resetPasswordHandler({ payload: data }) {
  yield put(
    resetPasswordRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      resetPasswordSuccess({
        status: "success",
        resetPasswordData: result
      })
    );
  }
}


function* getNotificationHandler({ payload: data }) {
  yield put(
    getNotificationsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getNotificationsSuccess({
        status: "success",
        notificationData: result
      })
    );
  }
}

function* profileDetailHandler({ payload: data }) {
  yield put(
    getProfileDetailsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getProfileDetailsSuccess({
        status: "success",
        userData: result.data
      })
    );
  }
}

function* getTagDataHandler({ payload: data }) {
  yield put(
    getTagDataRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  if (data == "") {
    yield put(
      getTagDataSuccess({
        tagData: [],
      })
    );
  } else {
    const { result } = yield call(httpClient, payload, true, false);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        getTagDataSuccess({
          status: "success",
          tagData: result.data
        })
      );
    }
  }
}
function* getTagData1Handler({ payload: data }) {
  yield put(
    getTagData1Requested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  if (data == "") {
    yield put(
      getTagData1Success({
        tagData: [],
      })
    );
  } else {
    const { result } = yield call(httpClient, payload, true, false);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        getTagData1Success({
          status: "success",
          tagData: result.data
        })
      );
    }
  }
}
function* getTagData2Handler({ payload: data }) {
  yield put(
    getTagData2Requested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  if (data == "") {
    yield put(
      getTagData2Success({
        tagData: [],
      })
    );
  } else {
    const { result } = yield call(httpClient, payload, true, false);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        getTagData2Success({
          status: "success",
          tagData: result.data
        })
      );
    }
  }
}

function* getSettingDataHandler({ payload: data }) {
  yield put(
    getSettingDataRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };
  if (data == "") {
    yield put(
      getSettingDataSuccess({
        settingData: [],
      })
    );
  } else {
    const { result } = yield call(httpClient, payload, true, false);
    if (result.login_required === 1) {
      var currentLocation = window.location.origin;
      window.location.href = currentLocation + '/login'
    } else {
      yield put(
        getSettingDataSuccess({
          status: "success",
          settingData: result.data
        })
      );
    }
  }
}

function* getRaffleStatHandler({ payload: data }) {
  yield put(
    getRaffleStatsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  // if (result.login_required === 1) {
  //   var currentLocation = window.location.origin;
  //   window.location.href = currentLocation + '/login'

  // } else {
  yield put(
    getRaffleStatsSuccess({
      status: "success",
      raffleStatData: result
    })
  );
  // }
}

function* getRaffleInvoiceHandler({ payload: data }) {
  yield put(
    getRaffleByInvoiceRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getRaffleByInvoiceSuccess({
        status: "success",
        raffleDataByInvoice: result.data
      })
    );
  }
}
function* User() {

  yield all([
    takeLatest(GET_HOME_DATA, getHomeDataHandler),
    takeLatest(GET_SLIDER_DATA, getSliderDataHandler),
    takeLatest(GET_RESTAURANT_DATA, getRestaurantDataHandler),
    takeLatest(GET_DESTINATION_DATA, getDestinationDataHandler),
    takeLatest(GET_SEARCHED_DESTINATION_DATA, getSearchedDestinationDataHandler),
    takeLatest(LOGIN, loginHandler),
    takeLatest(SENDOTP, sendOTPHandler),
    takeLatest(UPLOAD_FILE, uploadDataHandler),
    takeLatest(REGISTER, registerHandler),
    takeLatest(GET_VOUCHER_DETAILS, getVoucherDetailsHandler),
    takeLatest(GET_NEW_BAR, getNewBarHandler),
    takeLatest(GET_DEST_PACKAGES, getDestPackagesHandler),
    takeLatest(GET_PACKAGE_DETAILS, getPackageDetailsHandler),
    takeLatest(GET_DATE_AVAILABLE, getDateAvailableHandler),
    takeLatest(GET_PACKAGE_SLOTS, getPackageSlotsHandler),
    takeLatest(GET_RESTAURANT_DETAILS, getRestaurantDetailsHandler),
    takeLatest(BOOK_PACKAGES, bookPackageHandler),
    takeLatest(GET_COUPON, couponHandler),
    takeLatest(GET_INVOICES, getInvoicesHandler),
    takeLatest(GET_RAFFLES, getRafflesHandler),
    takeLatest(OLD_PROMOS, oldPromoHandler),
    takeLatest(NEW_PROMOS, newPromoHandler),
    takeLatest(GET_DEST_VOUCHERS, destVoucherHandler),
    takeLatest(GET_LOCATION, locationHandler),
    takeLatest(GET_TAG_DATA, getTagDataHandler),
    takeLatest(GET_TAG_DATA1, getTagData1Handler),
    takeLatest(GET_TAG_DATA2, getTagData2Handler),
    takeLatest(GET_SETTING_DATA, getSettingDataHandler),
    takeLatest(GET_INVOICE, invoiceHandler),
    takeLatest(GET_ORDER_HISTORY, orderHistoryHandler),
    takeLatest(EDIT_PROFILE, editProfileHandler),
    takeLatest(CHANGE_PASSWORD, changePasswordHandler),
    takeLatest(RESET_PASSWORD, resetPasswordHandler),
    takeLatest(GET_NOTIFICATIONS, getNotificationHandler),
    takeLatest(GET_PROFILE_DETAILS, profileDetailHandler),
    takeLatest(GET_RAFFLES_STATS, getRaffleStatHandler),
    takeLatest(GET_RAFFLES_INVOICES, getRaffleInvoiceHandler),


  ]);
}

export default User;
