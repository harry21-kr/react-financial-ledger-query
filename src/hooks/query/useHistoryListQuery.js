import { useQuery } from "@tanstack/react-query";
import paymentHistoryApi from "../../api/PaymentHistory/paymentHistory.api";

const useHistoryListQuery = (initialHistoryList, userId) => {
  const { data: historyList } = useQuery({
    queryKey: ["history"],
    queryFn: () => paymentHistoryApi.getPaymentHistoryById(userId),
    initialData: initialHistoryList,
  });

  return historyList;
};

export default useHistoryListQuery;
