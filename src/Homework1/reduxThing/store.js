import { configureStore } from "@reduxjs/toolkit";
// import AccountReducer from "./account-slice";
import accessTokenSlice from "./acssTokenSlice";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice
  }
  // devTools: true
});
