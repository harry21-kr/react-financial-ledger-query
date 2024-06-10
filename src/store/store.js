import { configureStore } from "@reduxjs/toolkit";
import paymentHistorySlice from "./paymentHistory/paymentHistorySlice";

const store = configureStore({
  reducer: {
    paymentHistory: paymentHistorySlice,
  },
});

export default store;
