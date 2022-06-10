import { createAction } from "redux-actions";


export const GET_HOME_DATA = "GET_HOME_DATA";
export const getHomeData = createAction(GET_HOME_DATA);

export const GET_HOME_DATA_REQUESTED = "GET_HOME_DATA_REQUESTED";
export const getHomeDataRequested = createAction(GET_HOME_DATA_REQUESTED);

export const GET_HOME_DATA_FAILED = "GET_HOME_DATA_FAILED";
export const getHomeDataFailed = createAction(GET_HOME_DATA_FAILED);

export const GET_HOME_DATA_SUCCESS = "GET_HOME_DATA_SUCCESS";
export const getHomeDataSuccess = createAction(GET_HOME_DATA_SUCCESS);


export const GET_SLIDER_DATA = "GET_SLIDER_DATA";
export const getSliderData = createAction(GET_SLIDER_DATA);

export const GET_SLIDER_DATA_REQUESTED = "GET_SLIDER_DATA_REQUESTED";
export const getSliderDataRequested = createAction(GET_SLIDER_DATA_REQUESTED);

export const GET_SLIDER_DATA_FAILED = "GET_SLIDER_DATA_FAILED";
export const getSliderDataFailed = createAction(GET_SLIDER_DATA_FAILED);

export const GET_SLIDER_DATA_SUCCESS = "GET_SLIDER_DATA_SUCCESS";
export const getSliderDataSuccess = createAction(GET_SLIDER_DATA_SUCCESS);


export const GET_RESTAURANT_DATA = "GET_RESTAURANT_DATA";
export const getRestaurantData = createAction(GET_RESTAURANT_DATA);

export const GET_RESTAURANT_DATA_REQUESTED = "GET_RESTAURANT_DATA_REQUESTED";
export const getRestaurantDataRequested = createAction(GET_RESTAURANT_DATA_REQUESTED);

export const GET_RESTAURANT_DATA_FAILED = "GET_RESTAURANT_DATA_FAILED";
export const getRestaurantDataFailed = createAction(GET_RESTAURANT_DATA_FAILED);

export const GET_RESTAURANT_DATA_SUCCESS = "GET_RESTAURANT_DATA_SUCCESS";
export const getRestaurantDataSuccess = createAction(GET_RESTAURANT_DATA_SUCCESS);


export const GET_SEARCHED_DESTINATION_DATA = "GET_SEARCHED_DESTINATION_DATA";
export const getSearchedDestinationData = createAction(GET_SEARCHED_DESTINATION_DATA);

export const GET_SEARCHED_DESTINATION_DATA_REQUESTED = "GET_SEARCHED_DESTINATION_DATA_REQUESTED";
export const getSearchedDestinationDataRequested = createAction(GET_SEARCHED_DESTINATION_DATA_REQUESTED);

export const GET_SEARCHED_DESTINATION_DATA_FAILED = "GET_SEARCHED_DESTINATION_DATA_FAILED";
export const getSearchedDestinationDataFailed = createAction(GET_SEARCHED_DESTINATION_DATA_FAILED);

export const GET_SEARCHED_DESTINATION_DATA_SUCCESS = "GET_SEARCHED_DESTINATION_DATA_SUCCESS";
export const getSearchedDestinationDataSuccess = createAction(GET_SEARCHED_DESTINATION_DATA_SUCCESS);


export const GET_DESTINATION_DATA = "GET_DESTINATION_DATA";
export const getDestinationData = createAction(GET_DESTINATION_DATA);

export const GET_DESTINATION_DATA_REQUESTED = "GET_DESTINATION_DATA_REQUESTED";
export const getDestinationDataRequested = createAction(GET_DESTINATION_DATA_REQUESTED);

export const GET_DESTINATION_DATA_FAILED = "GET_DESTINATION_DATA_FAILED";
export const getDestinationDataFailed = createAction(GET_DESTINATION_DATA_FAILED);

export const GET_DESTINATION_DATA_SUCCESS = "GET_DESTINATION_DATA_SUCCESS";
export const getDestinationDataSuccess = createAction(GET_DESTINATION_DATA_SUCCESS);


export const LOGIN = "LOGIN";
export const login = createAction(LOGIN);

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const loginRequested = createAction(LOGIN_REQUESTED);

export const LOGIN_FAILED = "LOGIN_FAILED";
export const loginFailed = createAction(LOGIN_FAILED);

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const REGISTER = "REGISTER";
export const register = createAction(REGISTER);

export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const registerRequested = createAction(REGISTER_REQUESTED);

export const REGISTER_FAILED = "REGISTER_FAILED";
export const registerFailed = createAction(REGISTER_FAILED);

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const registerSuccess = createAction(REGISTER_SUCCESS);


export const SENDOTP = "SENDOTP";
export const sendOtp = createAction(SENDOTP);

export const OTP_REQUESTED = "OTP_REQUESTED";
export const otpRequested = createAction(OTP_REQUESTED);

export const OTP_FAILED = "OTP_FAILED";
export const otpFailed = createAction(OTP_FAILED);

export const OTP_SUCCESS = "OTP_SUCCESS";
export const otpSuccess = createAction(OTP_SUCCESS);


export const UPLOAD_FILE = "UPLOAD_FILE";
export const uploadFile = createAction(UPLOAD_FILE);

export const UPLOAD_FILE_REQUESTED = "UPLOAD_FILE_REQUESTED";
export const uploadFileRequested = createAction(UPLOAD_FILE_REQUESTED);

export const UPLOAD_FILE_FAILED = "UPLOAD_FILE_FAILED";
export const uploadFileFailed = createAction(UPLOAD_FILE_FAILED);

export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
export const uploadFileSuccess = createAction(UPLOAD_FILE_SUCCESS);


export const GET_VOUCHER_DETAILS = "GET_VOUCHER_DETAILS";
export const getVoucherDetails = createAction(GET_VOUCHER_DETAILS);

export const GET_VOUCHER_DETAILS_REQUESTED = "GET_VOUCHER_DETAILS_REQUESTED";
export const getVoucherDetailsRequested = createAction(GET_VOUCHER_DETAILS_REQUESTED);

export const GET_VOUCHER_DETAILS_FAILED = "GET_VOUCHER_DETAILS_FAILED";
export const getVoucherDetailsFailed = createAction(GET_VOUCHER_DETAILS_FAILED);

export const GET_VOUCHER_DETAILS_SUCCESS = "GET_VOUCHER_DETAILS_SUCCESS";
export const getVoucherDetailsSuccess = createAction(GET_VOUCHER_DETAILS_SUCCESS);

export const GET_NEW_BAR = "GET_NEW_BAR";
export const getNewBar = createAction(GET_NEW_BAR);

export const GET_NEW_BAR_SUCCESS = "GET_NEW_BAR_SUCCESS";
export const getNewBarSuccess = createAction(GET_NEW_BAR_SUCCESS);


export const GET_DEST_PACKAGES = "GET_DEST_PACKAGES";
export const getdestPackages = createAction(GET_DEST_PACKAGES);

export const GET_DEST_PACKAGES_REQUESTED = "GET_DEST_PACKAGES_REQUESTED";
export const getdestPackagesRequested = createAction(GET_DEST_PACKAGES_REQUESTED);

export const GET_DEST_PACKAGES_FAILED = "GET_DEST_PACKAGES_FAILED";
export const getdestPackagesFailed = createAction(GET_DEST_PACKAGES_FAILED);

export const GET_DEST_PACKAGES_SUCCESS = "GET_DEST_PACKAGES_SUCCESS";
export const getdestPackagesSuccess = createAction(GET_DEST_PACKAGES_SUCCESS);


export const GET_PACKAGE_DETAILS = "GET_PACKAGE_DETAILS";
export const getPackageDetails = createAction(GET_PACKAGE_DETAILS);

export const GET_PACKAGE_DETAILS_REQUESTED = "GET_PACKAGE_DETAILS_REQUESTED";
export const getPackageDetailsRequested = createAction(GET_PACKAGE_DETAILS_REQUESTED);

export const GET_PACKAGE_DETAILS_FAILED = "GET_PACKAGE_DETAILS_FAILED";
export const getPackageDetailsFailed = createAction(GET_PACKAGE_DETAILS_FAILED);

export const GET_PACKAGE_DETAILS_SUCCESS = "GET_PACKAGE_DETAILS_SUCCESS";
export const getPackageDetailsSuccess = createAction(GET_PACKAGE_DETAILS_SUCCESS);

export const GET_DATE_AVAILABLE = "GET_DATE_AVAILABLE";
export const getDateAvailable = createAction(GET_DATE_AVAILABLE);

export const GET_DATE_AVAILABLE_REQUESTED = "GET_DATE_AVAILABLE_REQUESTED";
export const getDateAvailableRequested = createAction(GET_DATE_AVAILABLE_REQUESTED);

export const GET_DATE_AVAILABLE_FAILED = "GET_DATE_AVAILABLE_FAILED";
export const getDateAvailableFailed = createAction(GET_DATE_AVAILABLE_FAILED);

export const GET_DATE_AVAILABLE_SUCCESS = "GET_DATE_AVAILABLE_SUCCESS";
export const getDateAvailableSuccess = createAction(GET_DATE_AVAILABLE_SUCCESS);

export const GET_PACKAGE_SLOTS = "GET_PACKAGE_SLOTS";
export const getPackageSlots = createAction(GET_PACKAGE_SLOTS);

export const GET_PACKAGE_SLOTS_REQUESTED = "GET_PACKAGE_SLOTS_REQUESTED";
export const getPackageSlotsRequested = createAction(GET_PACKAGE_SLOTS_REQUESTED);

export const GET_PACKAGE_SLOTS_FAILED = "GET_PACKAGE_SLOTS_FAILED";
export const getPackageSlotsFailed = createAction(GET_PACKAGE_SLOTS_FAILED);

export const GET_PACKAGE_SLOTS_SUCCESS = "GET_PACKAGE_SLOTS_SUCCESS";
export const getPackageSlotsSuccess = createAction(GET_PACKAGE_SLOTS_SUCCESS);

export const GET_RESTAURANT_DETAILS = "GET_RESTAURANT_DETAILS";
export const getRestaurantDetails = createAction(GET_RESTAURANT_DETAILS);

export const GET_RESTAURANT_DETAILS_REQUESTED = "GET_RESTAURANT_DETAILS_REQUESTED";
export const getRestaurantDetailsRequested = createAction(GET_RESTAURANT_DETAILS_REQUESTED);

export const GET_RESTAURANT_DETAILS_FAILED = "GET_RESTAURANT_DETAILS_FAILED";
export const getRestaurantDetailsFailed = createAction(GET_RESTAURANT_DETAILS_FAILED);

export const GET_RESTAURANT_DETAILS_SUCCESS = "GET_RESTAURANT_DETAILS_SUCCESS";
export const getRestaurantDetailsSuccess = createAction(GET_RESTAURANT_DETAILS_SUCCESS);


export const BOOK_PACKAGES = "BOOK_PACKAGES";
export const bookPackages = createAction(BOOK_PACKAGES);

export const BOOK_PACKAGES_REQUESTED = "BOOK_PACKAGES_REQUESTED";
export const bookPackagesRequested = createAction(BOOK_PACKAGES_REQUESTED);

export const BOOK_PACKAGES_FAILED = "BOOK_PACKAGES_FAILED";
export const bookPackagesFailed = createAction(BOOK_PACKAGES_FAILED);

export const BOOK_PACKAGES_SUCCESS = "BOOK_PACKAGES_SUCCESS";
export const bookPackagesSuccess = createAction(BOOK_PACKAGES_SUCCESS);

export const GET_COUPON = "GET_COUPON";
export const couponValidity = createAction(GET_COUPON);

export const GET_COUPON_REQUESTED = "GET_COUPON_REQUESTED";
export const couponValidityRequested = createAction(GET_COUPON_REQUESTED);

export const GET_COUPON_FAILED = "GET_COUPON_FAILED";
export const couponValidityFailed = createAction(GET_COUPON_FAILED);

export const GET_COUPON_SUCCESS = "GET_COUPON_SUCCESS";
export const couponValiditySuccess = createAction(GET_COUPON_SUCCESS);


export const GET_INVOICES = "GET_INVOICES";
export const getInvoices = createAction(GET_INVOICES);

export const GET_INVOICES_REQUESTED = "GET_INVOICES_REQUESTED";
export const getInvoicesRequested = createAction(GET_INVOICES_REQUESTED);

export const GET_INVOICES_FAILED = "GET_INVOICES_FAILED";
export const getInvoicesFailed = createAction(GET_INVOICES_FAILED);

export const GET_INVOICES_SUCCESS = "GET_INVOICES_SUCCESS";
export const getInvoicesSuccess = createAction(GET_INVOICES_SUCCESS);


export const GET_RAFFLES = "GET_RAFFLES";
export const getRaffles = createAction(GET_RAFFLES);

export const GET_RAFFLES_REQUESTED = "GET_RAFFLES_REQUESTED";
export const getRafflesRequested = createAction(GET_RAFFLES_REQUESTED);

export const GET_RAFFLES_FAILED = "GET_RAFFLES_FAILED";
export const getRafflesFailed = createAction(GET_RAFFLES_FAILED);

export const GET_RAFFLES_SUCCESS = "GET_RAFFLES_SUCCESS";
export const getRafflesSuccess = createAction(GET_RAFFLES_SUCCESS);


export const OLD_PROMOS = "OLD_PROMOS";
export const getOldPromo = createAction(OLD_PROMOS);

export const OLD_PROMOS_REQUESTED = "OLD_PROMOS_REQUESTED";
export const getOldPromoRequested = createAction(OLD_PROMOS_REQUESTED);

export const OLD_PROMOS_FAILED = "OLD_PROMOS_FAILED";
export const getOldPromoFailed = createAction(OLD_PROMOS_FAILED);

export const OLD_PROMOS_SUCCESS = "OLD_PROMOS_SUCCESS";
export const getOldPromoSuccess = createAction(OLD_PROMOS_SUCCESS);


export const NEW_PROMOS = "NEW_PROMOS";
export const getNewPromo = createAction(NEW_PROMOS);

export const NEW_PROMOS_REQUESTED = "NEW_PROMOS_REQUESTED";
export const getNewPromoRequested = createAction(NEW_PROMOS_REQUESTED);

export const NEW_PROMOS_FAILED = "NEW_PROMOS_FAILED";
export const getNewPromoFailed = createAction(NEW_PROMOS_FAILED);

export const NEW_PROMOS_SUCCESS = "NEW_PROMOS_SUCCESS";
export const getNewPromoSuccess = createAction(NEW_PROMOS_SUCCESS);


export const GET_DEST_VOUCHERS = "GET_DEST_VOUCHERS";
export const getDestVouchers = createAction(GET_DEST_VOUCHERS);

export const GET_DEST_VOUCHERS_REQUESTED = "GET_DEST_VOUCHERS_REQUESTED";
export const getDestVouchersRequested = createAction(GET_DEST_VOUCHERS_REQUESTED);

export const GET_DEST_VOUCHERS_FAILED = "GET_DEST_VOUCHERS_FAILED";
export const getDestVouchersFailed = createAction(GET_DEST_VOUCHERS_FAILED);

export const GET_DEST_VOUCHERS_SUCCESS = "GET_DEST_VOUCHERS_SUCCESS";
export const getDestVouchersSuccess = createAction(GET_DEST_VOUCHERS_SUCCESS);

export const GET_LOCATION = "GET_LOCATION";
export const getLocation = createAction(GET_LOCATION);

export const EMPTY_LOCATION = "EMPTY_LOCATION";
export const emptyLocation = createAction(EMPTY_LOCATION);

export const GET_LOCATION_REQUESTED = "GET_LOCATION_REQUESTED";
export const getLocationRequested = createAction(GET_LOCATION_REQUESTED);

export const GET_LOCATION_FAILED = "GET_LOCATION_FAILED";
export const getLocationFailed = createAction(GET_LOCATION_FAILED);

export const GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS";
export const getLocationSuccess = createAction(GET_LOCATION_SUCCESS);

export const GET_INVOICE = "GET_INVOICE";
export const getInvoice = createAction(GET_INVOICE);

export const GET_INVOICE_REQUESTED = "GET_INVOICE_REQUESTED";
export const getInvoiceRequested = createAction(GET_INVOICE_REQUESTED);

export const GET_INVOICE_FAILED = "GET_INVOICE_FAILED";
export const getInvoiceFailed = createAction(GET_INVOICE_FAILED);

export const GET_INVOICE_SUCCESS = "GET_INVOICE_SUCCESS";
export const getInvoiceSuccess = createAction(GET_INVOICE_SUCCESS);


export const GET_ORDER_HISTORY = "GET_ORDER_HISTORY";
export const getOrderHistoryData = createAction(GET_ORDER_HISTORY);

export const GET_ORDER_HISTORY_REQUESTED = "GET_ORDER_HISTORY_REQUESTED";
export const getOrderHistoryDataRequested = createAction(GET_ORDER_HISTORY_REQUESTED);

export const GET_ORDER_HISTORY_FAILED = "GET_ORDER_HISTORY_FAILED";
export const getOrderHistoryDataFailed = createAction(GET_ORDER_HISTORY_FAILED);

export const GET_ORDER_HISTORY_SUCCESS = "GET_ORDER_HISTORY_SUCCESS";
export const getOrderHistoryDataSuccess = createAction(GET_ORDER_HISTORY_SUCCESS);


export const EDIT_PROFILE = "EDIT_PROFILE";
export const editProfile = createAction(EDIT_PROFILE);

export const EDIT_PROFILE_REQUESTED = "EDIT_PROFILE_REQUESTED";
export const editProfileRequested = createAction(EDIT_PROFILE_REQUESTED);

export const EDIT_PROFILE_FAILED = "EDIT_PROFILE_FAILED";
export const editProfileFailed = createAction(EDIT_PROFILE_FAILED);

export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const editProfileSuccess = createAction(EDIT_PROFILE_SUCCESS);


export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const changePassword = createAction(CHANGE_PASSWORD);

export const CHANGE_PASSWORD_REQUESTED = "CHANGE_PASSWORD_REQUESTED";
export const changePasswordRequested = createAction(CHANGE_PASSWORD_REQUESTED);

export const CHANGE_PASSWORD_FAILED = "CHANGE_PASSWORD_FAILED";
export const changePasswordFailed = createAction(CHANGE_PASSWORD_FAILED);

export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);

export const RESET_PASSWORD = "RESET_PASSWORD";
export const resetPassword = createAction(RESET_PASSWORD);

export const RESET_PASSWORD_REQUESTED = "RESET_PASSWORD_REQUESTED";
export const resetPasswordRequested = createAction(RESET_PASSWORD_REQUESTED);

export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const resetPasswordFailed = createAction(RESET_PASSWORD_FAILED);

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const resetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);


export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const getNotifications = createAction(GET_NOTIFICATIONS);

export const GET_NOTIFICATIONS_REQUESTED = "GET_NOTIFICATIONS_REQUESTED";
export const getNotificationsRequested = createAction(GET_NOTIFICATIONS_REQUESTED);

export const GET_NOTIFICATIONS_FAILED = "GET_NOTIFICATIONS_FAILED";
export const getNotificationsFailed = createAction(GET_NOTIFICATIONS_FAILED);

export const GET_NOTIFICATIONS_SUCCESS = "GET_NOTIFICATIONS_SUCCESS";
export const getNotificationsSuccess = createAction(GET_NOTIFICATIONS_SUCCESS);


export const GET_PROFILE_DETAILS = "GET_PROFILE_DETAILS";
export const getProfileDetails = createAction(GET_PROFILE_DETAILS);

export const GET_PROFILE_DETAILS_REQUESTED = "GET_PROFILE_DETAILS_REQUESTED";
export const getProfileDetailsRequested = createAction(GET_PROFILE_DETAILS_REQUESTED);

export const GET_PROFILE_DETAILS_FAILED = "GET_PROFILE_DETAILS_FAILED";
export const getProfileDetailsFailed = createAction(GET_PROFILE_DETAILS_FAILED);

export const GET_PROFILE_DETAILS_SUCCESS = "GET_PROFILE_DETAILS_SUCCESS";
export const getProfileDetailsSuccess = createAction(GET_PROFILE_DETAILS_SUCCESS);


export const GET_RAFFLES_STATS = "GET_RAFFLES_STATS";
export const getRaffleStats = createAction(GET_RAFFLES_STATS);

export const GET_RAFFLES_STATS_REQUESTED = "GET_RAFFLES_STATS_REQUESTED";
export const getRaffleStatsRequested = createAction(GET_RAFFLES_STATS_REQUESTED);

export const GET_RAFFLES_STATS_FAILED = "GET_RAFFLES_STATS_FAILED";
export const getRaffleStatsFailed = createAction(GET_RAFFLES_STATS_FAILED);

export const GET_RAFFLES_STATS_SUCCESS = "GET_RAFFLES_STATS_SUCCESS";
export const getRaffleStatsSuccess = createAction(GET_RAFFLES_STATS_SUCCESS);


export const GET_RAFFLES_INVOICES = "GET_RAFFLES_INVOICES";
export const getRaffleByInvoice = createAction(GET_RAFFLES_INVOICES);

export const GET_RAFFLES_INVOICES_REQUESTED = "GET_RAFFLES_INVOICES_REQUESTED";
export const getRaffleByInvoiceRequested = createAction(GET_RAFFLES_INVOICES_REQUESTED);

export const GET_RAFFLES_INVOICES_FAILED = "GET_RAFFLES_INVOICES_FAILED";
export const getRaffleByInvoiceFailed = createAction(GET_RAFFLES_INVOICES_FAILED);

export const GET_RAFFLES_INVOICES_SUCCESS = "GET_RAFFLES_INVOICES_SUCCESS";
export const getRaffleByInvoiceSuccess = createAction(GET_RAFFLES_INVOICES_SUCCESS);

export const LOG_OUT = "LOG_OUT";
export const logOut = createAction(LOG_OUT);

export const FROM_SIGN_UP = "FROM_SIGN_UP";
export const fromSignUp = createAction(FROM_SIGN_UP);

export const FROM_LOGIN = "FROM_LOGIN";
export const fromLogin = createAction(FROM_LOGIN);


export const GET_TAG_DATA = "GET_TAG_DATA";
export const getTagData = createAction(GET_TAG_DATA);
export const GET_TAG_DATA1 = "GET_TAG_DATA1";
export const getTagData1 = createAction(GET_TAG_DATA1);
export const GET_TAG_DATA2 = "GET_TAG_DATA2";
export const getTagData2 = createAction(GET_TAG_DATA2);

export const GET_TAG_DATA_REQUESTED = "GET_TAG_DATA_REQUESTED";
export const getTagDataRequested = createAction(GET_TAG_DATA_REQUESTED);

export const GET_TAG_DATA1_REQUESTED = "GET_TAG_DATA1_REQUESTED";
export const getTagData1Requested = createAction(GET_TAG_DATA1_REQUESTED);

export const GET_TAG_DATA2_REQUESTED = "GET_TAG_DATA2_REQUESTED";
export const getTagData2Requested = createAction(GET_TAG_DATA2_REQUESTED);



export const GET_TAG_DATA_FAILED = "GET_TAG_DATA_FAILED";
export const getTagDataFailed = createAction(GET_TAG_DATA_FAILED);

export const GET_TAG_DATA1_FAILED = "GET_TAG_DATA1_FAILED";
export const getTagData1Failed = createAction(GET_TAG_DATA1_FAILED);

export const GET_TAG_DATA2_FAILED = "GET_TAG_DATA2_FAILED";
export const getTagData2Failed = createAction(GET_TAG_DATA2_FAILED);

export const GET_TAG_DATA_SUCCESS = "GET_TAG_DATA_SUCCESS";
export const getTagDataSuccess = createAction(GET_TAG_DATA_SUCCESS);

export const GET_TAG_DATA1_SUCCESS = "GET_TAG_DATA1_SUCCESS";
export const getTagData1Success = createAction(GET_TAG_DATA1_SUCCESS);

export const GET_TAG_DATA2_SUCCESS = "GET_TAG_DATA2_SUCCESS";
export const getTagData2Success = createAction(GET_TAG_DATA2_SUCCESS);


export const GET_SETTING_DATA = "GET_SETTING_DATA";
export const getSettingData = createAction(GET_SETTING_DATA);

export const GET_SETTING_DATA_REQUESTED = "GET_SETTING_DATA_REQUESTED";
export const getSettingDataRequested = createAction(GET_SETTING_DATA_REQUESTED);

export const GET_SETTING_DATA_FAILED = "GET_SETTING_DATA_FAILED";
export const getSettingDataFailed = createAction(GET_SETTING_DATA_FAILED);

export const GET_SETTING_DATA_SUCCESS = "GET_SETTING_DATA_SUCCESS";
export const getSettingDataSuccess = createAction(GET_SETTING_DATA_SUCCESS);