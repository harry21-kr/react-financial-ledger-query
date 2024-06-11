import axios from "axios";

const PAYMENT_HISTORY_BASE_URL = "http://localhost:3000";

class PaymentHistoryAPI {
  #client;

  constructor() {
    this.#client = axios.create({ baseURL: PAYMENT_HISTORY_BASE_URL });
  }

  async postPaymentHistory(newHistory) {
    const res = await this.#client.post("/history", newHistory);
    return res.data;
  }

  async deletePaymentHistory(historyId) {
    const res = await this.#client.delete(`/history/${historyId}`);
    return res.data;
  }

  async patchPaymentHistory(historyId, editedHistory) {
    const res = await this.#client.patch(
      `/history/${historyId}`,
      editedHistory
    );
    return res.data;
  }

  async getPaymentHistoryById(userId) {
    const res = await this.#client.get(`/history?user=${userId}`);
    return res.data;
  }
}

const paymentHistoryApi = new PaymentHistoryAPI();

export default paymentHistoryApi;
