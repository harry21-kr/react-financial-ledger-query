import { createSlice } from "@reduxjs/toolkit";

const savedPaymentHistory = localStorage.getItem("paymentHistory");

const initialState = savedPaymentHistory
  ? { history: JSON.parse(savedPaymentHistory) }
  : { history: [] };

const paymentHistorySlice = createSlice({
  name: "paymentHistory",
  initialState,
  reducers: {
    addHistoryItem: (state, action) => {
      const newHistory = [...state.history, action.payload];
      state.history = newHistory;
      localStorage.setItem("paymentHistory", JSON.stringify(newHistory));
    },
    deleteHistoryItem: (state, action) => {
      const newHistory = state.history.filter(
        (item) => item.id !== action.payload
      );
      state.history = newHistory;
      localStorage.setItem("paymentHistory", JSON.stringify(newHistory));
    },
    editHistoryItem: (state, action) => {
      const newHistory = state.history.map((prevItem) =>
        prevItem.id === action.payload.id ? action.payload : prevItem
      );
      state.history = newHistory;
      localStorage.setItem("paymentHistory", JSON.stringify(newHistory));
    },
  },
});

export const { addHistoryItem, deleteHistoryItem, editHistoryItem } =
  paymentHistorySlice.actions;

export default paymentHistorySlice.reducer;
