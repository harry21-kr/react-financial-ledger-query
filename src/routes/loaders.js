import { redirect } from "react-router-dom";
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
    sessionStorage.removeItem("token");
    return redirect("/");
  }
};
