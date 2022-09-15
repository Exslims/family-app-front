export interface IAuthApiService {
  login(): Promise<any>;

  logout(): Promise<any>;
}

export class AuthApiServiceStub implements IAuthApiService {

  async login(): Promise<any> {
    return Promise.resolve(true);
  }

  async logout(): Promise<any> {
    return Promise.resolve(true);
  }
}
