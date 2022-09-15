import type { IAuthApiService } from "./auth-api-service";
import type { IUserApiService } from "./user-api-service";
import { AuthApiServiceStub } from "./auth-api-service";
import { UserApiServiceStub } from "./user-api-service";

export interface ApiStorage {
  authService: IAuthApiService,
  userService: IUserApiService
}

const apiStorageStub: ApiStorage = {
  authService: new AuthApiServiceStub(),
  userService: new UserApiServiceStub()
};

export const apiStorage: ApiStorage = apiStorageStub;
