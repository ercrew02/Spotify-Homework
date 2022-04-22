import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./acssTokenSlice";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice
  }
});
