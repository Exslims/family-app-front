import { defineStore } from "pinia";
import type { UserInfo } from "../models/user";
import { apiStorage } from "../services/api-service-registry";

export const AUTH_STORE = "authStore";

export type AuthState = {
  isUserAuthenticated: boolean;
  userInfo: UserInfo | null;
}

export const useAuthStore = defineStore(AUTH_STORE, {
  state: (): AuthState => ({
    isUserAuthenticated: false,
    userInfo: null
  }),
  getters: {
    userName: (state) => state.userInfo?.name
  },
  actions: {
    async login() {
      const authService = apiStorage.authService;
      const userService = apiStorage.userService;

      if (!this.isUserAuthenticated) {
        const tryAuth = await authService.login();
        if (tryAuth) {
          const userInfoResp = await userService.fetchUserInfo();
          if (!userInfoResp.error) {
            this.userInfo = userInfoResp.data;
          }
          this.isUserAuthenticated = true;
        }
      }
    },

    async logout() {
      const authService = apiStorage.authService;
      const resp = await authService.logout();
      if (resp) {
        this.isUserAuthenticated = false;
        this.userInfo = null;
      }
    }
  }
});

