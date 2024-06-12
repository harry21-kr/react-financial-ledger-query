import { useMutation, useQueryClient } from "@tanstack/react-query";
import paymentHistoryApi from "../../api/PaymentHistory/paymentHistory.api";

const useHistoryMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: postHistoryItem } = useMutation({
    mutationFn: (newHistoryItem) =>
      paymentHistoryApi.postPaymentHistory(newHistoryItem),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["historyList"] }),
  });

  const { mutateAsync: patchHistoryItem } = useMutation({
    mutationFn: (itemId, editedHistoryItem) =>
      paymentHistoryApi.patchPaymentHistory(itemId, editedHistoryItem),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["historyItem"] }),
  });

  const { mutateAsync: deleteHistoryItem } = useMutation({
    mutationFn: (itemId) => paymentHistoryApi.deletePaymentHistory(itemId),
  });

  return { postHistoryItem, patchHistoryItem, deleteHistoryItem };
};

export default useHistoryMutation;
