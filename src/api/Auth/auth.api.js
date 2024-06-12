import axios from "axios";

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_URL;

class AuthAPI {
  #baseURL = AUTH_BASE_URL;
  #client;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
  }

  async signUp(id, password, nickname) {
    const res = await this.#client.post("/register", {
      id,
      password,
      nickname,
    });

    return res.data;
  }

  async login(id, password) {
    const res = await this.#client.post("/login?expiresIn=30m", {
      id,
      password,
    });

    return res.data;
  }

  async getUserData(accessToken) {
    const res = await this.#client.get("/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return res.data;
  }

  async editUserData(accessToken, avatarFile, nickname) {
    const res = await this.#client.patch(
      "/profile",
      {
        avatar: avatarFile ? avatarFile : null,
        nickname: nickname ? nickname : "prevNickname",
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  }
}

const authApi = new AuthAPI();

export default authApi;
