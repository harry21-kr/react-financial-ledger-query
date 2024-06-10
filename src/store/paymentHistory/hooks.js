import { useSelector } from "react-redux";

export const usePaymentHistoryList = () => {
  return useSelector((state) => state.paymentHistory.history);
};
