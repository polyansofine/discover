import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";

const config = {
  key: "primary",
  storage,
};

const reducers = persistCombineReducers(config, {
  user,
});

export default reducers;
