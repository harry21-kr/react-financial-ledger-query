import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import paymentHistoryApi from "../../api/PaymentHistory/paymentHistory.api";

const useHistoryMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: postHistoryItem } = useMutation({
    mutationFn: (newHistoryItem) =>
      paymentHistoryApi.postPaymentHistory(newHistoryItem),
    onSuccess: () => {
      toast.success("지출 내역이 등록되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["historyList"] });
    },
  });

  const { mutateAsync: patchHistoryItem } = useMutation({
    mutationFn: ({ itemId, editedHistoryItem }) =>
      paymentHistoryApi.patchPaymentHistory(itemId, editedHistoryItem),
    onSuccess: () => {
      toast.success("지출 내역이 수정되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["historyItem"] });
    },
  });

  const { mutateAsync: deleteHistoryItem } = useMutation({
    mutationFn: (itemId) => paymentHistoryApi.deletePaymentHistory(itemId),
    onSuccess: () => toast.success("지출 내역이 삭제되었습니다."),
  });

  return { postHistoryItem, patchHistoryItem, deleteHistoryItem };
};

export default useHistoryMutation;
