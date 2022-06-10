import {
  GET_HOME_DATA_REQUESTED,
  GET_HOME_DATA_FAILED,
  GET_HOME_DATA_SUCCESS,
  GET_SLIDER_DATA_REQUESTED,
  GET_SLIDER_DATA_FAILED,
  GET_SLIDER_DATA_SUCCESS,
  GET_RESTAURANT_DATA_REQUESTED,
  GET_RESTAURANT_DATA_FAILED,
  GET_RESTAURANT_DATA_SUCCESS,
  GET_SEARCHED_DESTINATION_DATA_REQUESTED,
  GET_SEARCHED_DESTINATION_DATA_FAILED,
  GET_SEARCHED_DESTINATION_DATA_SUCCESS,
  GET_DESTINATION_DATA_REQUESTED,
  GET_DESTINATION_DATA_FAILED,
  GET_DESTINATION_DATA_SUCCESS,
  GET_SETTING_DATA_REQUESTED,
  GET_SETTING_DATA_FAILED,
  GET_SETTING_DATA_SUCCESS,
  OTP_REQUESTED,
  OTP_FAILED,
  OTP_SUCCESS,
  LOGIN_REQUESTED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  UPLOAD_FILE_REQUESTED,
  UPLOAD_FILE_FAILED,
  UPLOAD_FILE_SUCCESS,
  REGISTER_REQUESTED,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  GET_VOUCHER_DETAILS_REQUESTED,
  GET_VOUCHER_DETAILS_FAILED,
  GET_VOUCHER_DETAILS_SUCCESS,
  GET_NEW_BAR_SUCCESS,
  GET_DEST_PACKAGES_REQUESTED,
  GET_DEST_PACKAGES_FAILED,
  GET_DEST_PACKAGES_SUCCESS,
  GET_PACKAGE_DETAILS_REQUESTED,
  GET_PACKAGE_DETAILS_FAILED,
  GET_PACKAGE_DETAILS_SUCCESS,
  GET_DATE_AVAILABLE_REQUESTED,
  GET_DATE_AVAILABLE_FAILED,
  GET_DATE_AVAILABLE_SUCCESS,
  GET_PACKAGE_SLOTS_REQUESTED,
  GET_PACKAGE_SLOTS_FAILED,
  GET_PACKAGE_SLOTS_SUCCESS,
  GET_RESTAURANT_DETAILS_REQUESTED,
  GET_RESTAURANT_DETAILS_FAILED,
  GET_RESTAURANT_DETAILS_SUCCESS,
  BOOK_PACKAGES_REQUESTED,
  BOOK_PACKAGES_FAILED,
  BOOK_PACKAGES_SUCCESS,
  GET_COUPON_REQUESTED,
  GET_COUPON_FAILED,
  GET_COUPON_SUCCESS,
  GET_INVOICES_REQUESTED,
  GET_INVOICES_FAILED,
  GET_INVOICES_SUCCESS,
  GET_RAFFLES_REQUESTED,
  GET_RAFFLES_FAILED,
  GET_RAFFLES_SUCCESS,
  OLD_PROMOS_REQUESTED,
  OLD_PROMOS_FAILED,
  OLD_PROMOS_SUCCESS,
  NEW_PROMOS_REQUESTED,
  NEW_PROMOS_FAILED,
  NEW_PROMOS_SUCCESS,
  GET_DEST_VOUCHERS_REQUESTED,
  GET_DEST_VOUCHERS_FAILED,
  GET_DEST_VOUCHERS_SUCCESS,
  GET_INVOICE_REQUESTED,
  GET_INVOICE_FAILED,
  GET_INVOICE_SUCCESS,
  GET_LOCATION_REQUESTED,
  GET_LOCATION_FAILED,
  GET_LOCATION_SUCCESS,
  EMPTY_LOCATION,
  GET_ORDER_HISTORY_REQUESTED,
  GET_ORDER_HISTORY_FAILED,
  GET_ORDER_HISTORY_SUCCESS,
  EDIT_PROFILE_REQUESTED,
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
  CHANGE_PASSWORD_REQUESTED,
  CHANGE_PASSWORD_FAILED,
  CHANGE_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUESTED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  GET_NOTIFICATIONS_REQUESTED,
  GET_NOTIFICATIONS_FAILED,
  GET_NOTIFICATIONS_SUCCESS,
  GET_PROFILE_DETAILS_REQUESTED,
  GET_PROFILE_DETAILS_FAILED,
  GET_PROFILE_DETAILS_SUCCESS,

  GET_RAFFLES_STATS_REQUESTED,
  GET_RAFFLES_STATS_FAILED,
  GET_RAFFLES_STATS_SUCCESS,

  GET_TAG_DATA_REQUESTED,
  GET_TAG_DATA_FAILED,
  GET_TAG_DATA_SUCCESS,

  GET_RAFFLES_INVOICES_REQUESTED,
  GET_RAFFLES_INVOICES_FAILED,
  GET_RAFFLES_INVOICES_SUCCESS,
  LOG_OUT,
  FROM_SIGN_UP,
  FROM_LOGIN,
  GET_TAG_DATA1_REQUESTED,
  GET_TAG_DATA1_FAILED,
  GET_TAG_DATA1_SUCCESS,
  GET_TAG_DATA2_REQUESTED,
  GET_TAG_DATA2_FAILED,
  GET_TAG_DATA2_SUCCESS
} from "../actions/user-action-type";

const initialState = {
  homeData: [],
  sliderData: [],
  destinationData: [],
  getSliderDataStatus: "",
  getDestinationDataStatus: "",
  getPackageDetailsStatus: "",
  getRestaurantDetailsStatus: "",
  getHomeDataStatus: "",
  loginStatus: "",
  token: "",
  uploadStatus: "",
  uploadData: "",
  registerStatus: "",
  voucherDetailStatus: "",
  voucherData: [],
  isNewBar: false,
  rafflesData: [],
  invoicesData: [],
  destPackagesData: [],
  getDestPackageStatus: "",
  getInvoiceStatus: "",
  getRafflesStatus: "",
  bookingPackageStatus: "",
  bookingData: [],
  oldPromosData: [],
  newPromosData: [],
  destinationVoucherData: [],
  destinationVoucherStatus: "",
  invoiceData: [],
  locationStatus: "",
  locationData: [],
  orderHistoryData: [],
  editProfileStatus: "",
  changePasswordStatus: "",
  resetPasswordStatus: "",
  resetPasswordData: "",
  notificationData: [],
  userData: [],
  raffleStatData: [],
  raffleDataByInvoice: [],
  fromSignUP: false,
  tagData: [],
  tagData1: [],
  tagData2: [],

};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_DATA_REQUESTED:
      return {
        ...state,
        getHomeDataStatus: action.payload.status,
      };
    case GET_HOME_DATA_FAILED:
      return {
        ...state,
        getHomeDataStatus: action.payload.status,
      };
    case GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        getHomeDataStatus: action.payload.status,
        homeData: action.payload.homeData.data,
        loginStatus: "",
        voucherDetailStatus: "",
        bookingPackageStatus: "",
        editProfileStatus: ''
      };

    case GET_SLIDER_DATA_REQUESTED:
      return {
        ...state,
        getSliderDataStatus: action.payload.status,
      };
    case GET_SLIDER_DATA_FAILED:
      return {
        ...state,
        getSliderDataStatus: action.payload.status,
      };
    case GET_SLIDER_DATA_SUCCESS:
      return {
        ...state,
        getSliderDataStatus: action.payload.status,
        sliderData: action.payload.sliderData.data,
      };
// ------------------------------------------------------------------
    case GET_TAG_DATA_REQUESTED:
      return {
        ...state,
        getTagDataStatus: action.payload.status,
      };
    case GET_TAG_DATA_FAILED:
      return {
        ...state,
        getTagDataStatus: action.payload.status,
      };
    case GET_TAG_DATA_SUCCESS:
      return {
        ...state,
        getTagDataStatus: action.payload.status,
        tagData: action.payload.tagData,
      };
    
    case GET_TAG_DATA1_REQUESTED:
      return {
        ...state,
        getTagData1Status: action.payload.status,
      };
    case GET_TAG_DATA1_FAILED:
      return {
        ...state,
        getTagData1Status: action.payload.status,
      };
    case GET_TAG_DATA1_SUCCESS:
       return {
        ...state,
        getTagDataStatus: action.payload.status,
        tagData1: action.payload.tagData,
      };
    
    case GET_TAG_DATA2_REQUESTED:
      return {
        ...state,
        getTagData1Status: action.payload.status,
      };
    case GET_TAG_DATA2_FAILED:
      return {
        ...state,
        getTagData1Status: action.payload.status,
      };
    case GET_TAG_DATA2_SUCCESS:
       return {
        ...state,
        getTagDataStatus: action.payload.status,
        tagData2: action.payload.tagData,
      };
    // ----------------------------------------------------------------------
      case GET_SETTING_DATA_REQUESTED:
      return {
        ...state,
        getSettingDataStatus: action.payload.status,
      };
    case GET_SETTING_DATA_FAILED:
      return {
        ...state,
        getSettingDataStatus: action.payload.status,
      };
    case GET_SETTING_DATA_SUCCESS:
      return {
        ...state,
        getSettingDataStatus: action.payload.status,
        settingData: action.payload.settingData,
      };

    case GET_RESTAURANT_DATA_REQUESTED:
      return {
        ...state,
        getRestaurantDataStatus: action.payload.status,
      };
    case GET_RESTAURANT_DATA_FAILED:
      return {
        ...state,
        getRestaurantDataStatus: action.payload.status,
      };
    case GET_RESTAURANT_DATA_SUCCESS:
      return {
        ...state,
        getRestaurantDataStatus: action.payload.status,
        restaurantData: action.payload.restaurantData,
      };
    case GET_DESTINATION_DATA_REQUESTED:
      return {
        ...state,
        getDestinationDataStatus: action.payload.status,
      };
    case GET_DESTINATION_DATA_FAILED:
      return {
        ...state,
        getDestinationDataStatus: action.payload.status,
      };
    case GET_DESTINATION_DATA_SUCCESS:
      return {
        ...state,
        getDestinationDataStatus: action.payload.status,
        destinationData: action.payload.destinationData.data,
      };

    case GET_SEARCHED_DESTINATION_DATA_REQUESTED:
      return {
        ...state,
        getSearchedDestinationDataStatus: action.payload.status,
      };
    case GET_SEARCHED_DESTINATION_DATA_FAILED:
      return {
        ...state,
        getSearchedDestinationDataStatus: action.payload.status,
      };
    case GET_SEARCHED_DESTINATION_DATA_SUCCESS:
      return {
        ...state,
        getSearchedDestinationDataStatus: action.payload.status,
        searchedDestinationData: action.payload.searchedDestinationData.data,
      };

    case LOGIN_REQUESTED:
      return {
        ...state,
        loginStatus: action.payload.status,
        registerStatus: "",
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginData: action.payload.loginData,
        loginStatus: action.payload.status,
        registerStatus: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload.loginData,
        loginStatus: action.payload.status,
        token: action.payload.token,
        registerStatus: "",
        changePasswordStatus: ""
      };
    case OTP_REQUESTED:
      return {
        ...state,
        otpStatus: action.payload.status,
      };
    case OTP_FAILED:
      return {
        ...state,
        otpStatus: action.payload.status,
        otpData: action.payload.otpData,
      };
    case OTP_SUCCESS:
      return {
        ...state,
        otpStatus: action.payload.status,
        otpData: action.payload.otpData,
      };
    case REGISTER_REQUESTED:
      return {
        ...state,
        registerStatus: action.payload.status,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        registerStatus: action.payload.status,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerStatus: action.payload.status,
        token: action.payload.token,
      };

    case UPLOAD_FILE_REQUESTED:
      return {
        ...state,
        uploadStatus: action.payload.status,
      };
    case UPLOAD_FILE_FAILED:
      return {
        ...state,
        uploadStatus: action.payload.status,
      };
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        uploadStatus: action.payload.status,
        uploadData: action.payload.uploadData,
      };

    case GET_VOUCHER_DETAILS_REQUESTED:
      return {
        ...state,
        voucherDetailStatus: action.payload.status,
      };
    case GET_VOUCHER_DETAILS_FAILED:
      return {
        ...state,
        voucherDetailStatus: action.payload.status,
      };
    case GET_VOUCHER_DETAILS_SUCCESS:
      return {
        ...state,
        voucherDetailStatus: action.payload.status,
        voucherData: action.payload.voucherData,
      };

    case GET_NEW_BAR_SUCCESS:
      return {
        ...state,
        isNewBar: action.payload.isNewBar,
      };

    case GET_DEST_PACKAGES_REQUESTED:
      return {
        ...state,
        getDestinationDataStatus: action.payload.status,
      };
    case GET_DEST_PACKAGES_FAILED:
      return {
        ...state,
        getDestinationDataStatus: action.payload.status,
      };
    case GET_DEST_PACKAGES_SUCCESS:
      return {
        ...state,
        getDestinationDataStatus: action.payload.status,
        destPackagesData: action.payload.destPackagesData,
      };

    case GET_PACKAGE_DETAILS_REQUESTED:
      return {
        ...state,
        getPackageDetailsStatus: action.payload.status,
      };
    case GET_PACKAGE_DETAILS_FAILED:
      return {
        ...state,
        getPackageDetailsStatus: action.payload.status,
      };
    case GET_PACKAGE_DETAILS_SUCCESS:
      return {
        ...state,
        getPackageDetailsStatus: action.payload.status,
        packageDetails: action.payload.packageDetails,
      };
    case GET_DATE_AVAILABLE_REQUESTED:
      return {
        ...state,
        getDateAvailableStatus: action.payload.status,
      };
    case GET_DATE_AVAILABLE_FAILED:
      return {
        ...state,
        getDateAvailableStatus: action.payload.status,
      };
    case GET_DATE_AVAILABLE_SUCCESS:
      return {
        ...state,
        getDateAvailableStatus: action.payload.status,
        dateAvailability: action.payload.dateAvailability,
      };
    case GET_PACKAGE_SLOTS_REQUESTED:
      return {
        ...state,
        getPackageSlotsStatus: action.payload.status,
      };
    case GET_PACKAGE_SLOTS_FAILED:
      return {
        ...state,
        getPackageSlotsStatus: action.payload.status,
      };
    case GET_PACKAGE_SLOTS_SUCCESS:
      return {
        ...state,
        getPackageSlotsStatus: action.payload.status,
        packageSlots: action.payload.packageSlots,
      };
    case GET_RESTAURANT_DETAILS_REQUESTED:
      return {
        ...state,
        getRestaurantDetailsStatus: action.payload.status,
      };
    case GET_RESTAURANT_DETAILS_FAILED:
      return {
        ...state,
        getRestaurantDetailsStatus: action.payload.status,
      };
    case GET_RESTAURANT_DETAILS_SUCCESS:
      return {
        ...state,
        getRestaurantDetailsStatus: action.payload.status,
        restaurantDetails: action.payload.restaurantDetails,
      };
    case BOOK_PACKAGES_REQUESTED:
      return {
        ...state,
        bookingPackageStatus: action.payload.status,
      };
    case BOOK_PACKAGES_FAILED:
      return {
        ...state,
        bookingPackageStatus: action.payload.status,
      };
    case BOOK_PACKAGES_SUCCESS:
      return {
        ...state,
        bookingPackageStatus: action.payload.status,
        bookingData: action.payload.bookingData,
      };

    case GET_COUPON_REQUESTED:
      return {
        ...state,
        couponValidityStatus: action.payload.status,
      };
    case GET_COUPON_FAILED:
      return {
        ...state,
        couponValidityStatus: action.payload.status,
      };
    case GET_COUPON_SUCCESS:
      return {
        ...state,
        couponValidityStatus: action.payload.status,
        couponValidityData: action.payload.couponValidityData,
      };

    case GET_INVOICES_REQUESTED:
      return {
        ...state,
        getInvoiceStatus: action.payload.status,
      };
    case GET_INVOICES_FAILED:
      return {
        ...state,
        getInvoiceStatus: action.payload.status,
      };
    case GET_INVOICES_SUCCESS:
      return {
        ...state,
        getInvoiceStatus: action.payload.status,
        invoicesData: action.payload.invoicesData,
      };

    case GET_RAFFLES_REQUESTED:
      return {
        ...state,
        getRafflesStatus: action.payload.status,
      };
    case GET_RAFFLES_FAILED:
      return {
        ...state,
        getRafflesStatus: action.payload.status,
      };
    case GET_RAFFLES_SUCCESS:
      return {
        ...state,
        getRafflesStatus: action.payload.status,
        rafflesData: action.payload.rafflesData,
      };

    case OLD_PROMOS_REQUESTED:
      return {
        ...state,
      };
    case OLD_PROMOS_FAILED:
      return {
        ...state,
      };
    case OLD_PROMOS_SUCCESS:
      return {
        ...state,
        oldPromosData: action.payload.oldPromosData,
      };

    case NEW_PROMOS_REQUESTED:
      return {
        ...state,
      };
    case NEW_PROMOS_FAILED:
      return {
        ...state,
      };
    case NEW_PROMOS_SUCCESS:
      return {
        ...state,
        newPromosData: action.payload.newPromosData,
      };

    case GET_DEST_VOUCHERS_REQUESTED:
      return {
        ...state,
        destinationVoucherStatus: action.payload.status,
      };
    case GET_DEST_VOUCHERS_FAILED:
      return {
        ...state,
        destinationVoucherStatus: action.payload.status,
      };
    case GET_DEST_VOUCHERS_SUCCESS:
      return {
        ...state,
        destinationVoucherStatus: action.payload.status,
        destinationVoucherData: action.payload.destinationVoucherData,
      };
    case GET_INVOICE_REQUESTED:
      return {
        ...state,
      };
    case GET_INVOICE_FAILED:
      return {
        ...state,
      };
    case GET_INVOICE_SUCCESS:
      return {
        ...state,
        invoiceData: action.payload.invoiceData,
      };

    case GET_LOCATION_REQUESTED:
      return {
        ...state,
        locationStatus: action.payload.status,
      };
    case GET_LOCATION_FAILED:
      return {
        ...state,
        locationStatus: action.payload.status,
      };
    case EMPTY_LOCATION:
      return {
        ...state,
        locationData: []
      }
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        locationStatus: action.payload.status,
        locationData: action.payload.locationData,
      };

    case GET_ORDER_HISTORY_REQUESTED:
      return {
        ...state,
      };
    case GET_ORDER_HISTORY_FAILED:
      return {
        ...state,
      };
    case GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        orderHistoryData: action.payload.orderHistoryData,
      };
    case EDIT_PROFILE_REQUESTED:
      return {
        ...state,
        editProfileStatus: action.payload.status,
      };
    case EDIT_PROFILE_FAILED:
      return {
        ...state,
        editProfileStatus: action.payload.status,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfileStatus: action.payload.status,
        // destinationVoucherData: action.payload.destinationVoucherData,
      };

    case CHANGE_PASSWORD_REQUESTED:
      return {
        ...state,
        changePasswordStatus: action.payload.status,
      };
    case CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        changePasswordStatus: action.payload.status,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordStatus: action.payload.status,
      };

    case RESET_PASSWORD_REQUESTED:
      return {
        ...state,
        resetPasswordStatus: action.payload.status,
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordStatus: action.payload.status,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordStatus: action.payload.status,
        resetPasswordData: action.payload.resetPasswordData,
      };

    case GET_NOTIFICATIONS_REQUESTED:
      return {
        ...state,
        // getN: action.payload.status,
      };
    case GET_NOTIFICATIONS_FAILED:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
      };
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
        notificationData: action.payload.notificationData,
      };

    case GET_PROFILE_DETAILS_REQUESTED:
      return {
        ...state,
        // getN: action.payload.status,
      };
    case GET_PROFILE_DETAILS_FAILED:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
      };
    case GET_PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
        userData: action.payload.userData,
      };

    case GET_RAFFLES_STATS_REQUESTED:
      return {
        ...state,
        // getN: action.payload.status,
      };
    case GET_RAFFLES_STATS_FAILED:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
      };
    case GET_RAFFLES_STATS_SUCCESS:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
        raffleStatData: action.payload.raffleStatData,
      };


    case GET_RAFFLES_INVOICES_REQUESTED:
      return {
        ...state,
        // getN: action.payload.status,
      };
    case GET_RAFFLES_INVOICES_FAILED:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
      };
    case GET_RAFFLES_INVOICES_SUCCESS:
      return {
        ...state,
        // destinationVoucherStatus: action.payload.status,
        raffleDataByInvoice: action.payload.raffleDataByInvoice,
      };
    case LOG_OUT:
      return {
        ...state,
        token: "",
        loginStatus: ""
      };
    case FROM_SIGN_UP:
      return {
        ...state,
        fromSignUP: true
      };
    case FROM_LOGIN:
      return {
        ...state,
        fromSignUP: false
      }

    //   case GET_RAFFLES_INVOICES_REQUESTED:
    //    return {
    //      ...state,
    //      // getN: action.payload.status,
    //    };
    //  case GET_RAFFLES_INVOICES_FAILED:
    //     return {
    //       ...state,
    //       // destinationVoucherStatus: action.payload.status,
    //    };
    //  case GET_RAFFLES_INVOICES_SUCCESS:
    //    return {
    //      ...state,
    //       // destinationVoucherStatus: action.payload.status,
    //      raffleDataByInvoice: action.payload.raffleDataByInvoice,
    //     };
    //    case LOG_OUT:
    //      return {
    //      ...state,
    //       token: "",
    //      loginStatus: ""
    //    }


    default:
      return state;
  }
};

export default user;
