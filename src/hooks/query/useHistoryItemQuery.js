import { useQuery } from "@tanstack/react-query";
import paymentHistoryApi from "../../api/PaymentHistory/paymentHistory.api";

const useHistoryItemQuery = (initialHistoryItem, itemId) => {
  const { data: historyItem } = useQuery({
    queryKey: ["historyItem"],
    queryFn: () => paymentHistoryApi.getPaymentHistoryByItemId(itemId),
    initialData: initialHistoryItem,
  });

  return historyItem;
};

export default useHistoryItemQuery;
