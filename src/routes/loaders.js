import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import authApi from "../api/Auth/auth.api";
import paymentHistoryApi from "../api/PaymentHistory/paymentHistory.api";

const getUser = async () => {
  const token = sessionStorage.getItem("token");
  const user = await authApi.getUserData(token);
  return user;
};

export const loginPageLoader = async () => {
  try {
    const user = await getUser();
    return redirect(`/home/${user.id}`);
  } catch (err) {
    return null;
  }
};

export const homePageLoader = async ({ params }) => {
  try {
    const user = await getUser();
    if (params.user !== user.id) return redirect(`/home/${user.id}`);
    return paymentHistoryApi.getPaymentHistoryById(user.id);
  } catch (err) {
    toast.error("세션이 만료되었습니다. 다시 로그인해주세요.");
    sessionStorage.removeItem("token");
    return redirect("/");
  }
};

export const detailPageLoader = async ({ params }) => {
  try {
    const user = await getUser();
    if (params.user !== user.id) return redirect(`/home/${user.id}`);
    return paymentHistoryApi.getPaymentHistoryByItemId(params.itemId);
  } catch (err) {
    toast.error("세션이 만료되었습니다. 다시 로그인해주세요.");
    sessionStorage.removeItem("token");
    return redirect("/");
  }
};
