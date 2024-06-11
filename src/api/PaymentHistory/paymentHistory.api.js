import axios from "axios";

const PAYMENT_HISTORY_BASE_URL = "http://localhost:3000";

class PaymentHistoryAPI {
  #client;

  constructor() {
    this.#client = axios.create({ baseURL: PAYMENT_HISTORY_BASE_URL });
  }

  async getPaymentHistoryById(userId) {
    const res = await this.#client.get(`/${userId}`);

    return res.data.history;
  }
}

const paymentHistoryApi = new PaymentHistoryAPI();

export default paymentHistoryApi;
