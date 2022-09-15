import type { UserInfo } from "../models/user";
import axios from "axios";
import type { ApiResponse } from "../models/api";

export const USER_API_SERVICE_TOKEN = "userApiService";

export interface IUserApiService {
  fetchUserInfo(): Promise<ApiResponse<UserInfo>>;
}

export class UserApiServiceStub implements IUserApiService {

  async fetchUserInfo(): Promise<ApiResponse<UserInfo>> {
    return await axios.get("http://localhost:3001/user-info");
  }
}
