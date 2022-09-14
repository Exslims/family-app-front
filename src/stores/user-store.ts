import { defineStore } from "pinia";
import type { UserInfo } from "../models/user";
import { inject } from "vue";
import type { IUserApiService } from "../services/user-api-service";

export const USER_STORE = "userStore";

export type UserState = {
  userInfo: UserInfo | null;
}

export const useUserStore = defineStore(USER_STORE, {
  state: (): UserState => ({
    userInfo: null
  }),
  getters: {
    userName: (state) => state.userInfo?.name
  },
  actions: {
    async fetchUserInfo() {
      const userApiService: IUserApiService = inject("userApiService")!;
      const response = await userApiService.fetchUserInfo();
      this.userInfo = response.data;
    }
  }
});

