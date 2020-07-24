import { MockAuthService } from './mock-auth.service';
import { MockApiService } from './mock-api.service';
import { AuthService, ApiService } from '@app/_services';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

class MockRouter {
  navigate(path) {}
}

class MockActivatedRouteSnapshot {
  private _data: any;
  get data() {
    return this._data;
  }
}

class MockRouterStateSnapshot {
  url = '/';
}

export const MOCK_AUTH_SERVICES = [
  {
    provide: AuthService,
    useClass: MockAuthService,
  },
];
export const MOCK_ROUTER = [{ provide: Router, useClass: MockRouter }];

export const MOCK_ACTIVATED_ROUTE_SNAPSHOT = [{ provide: ActivatedRouteSnapshot, useClass: MockActivatedRouteSnapshot }];

export const MOCK_ROUTER_STATE_SNAPSHOT = [{ provide: RouterStateSnapshot, useClass: MockRouterStateSnapshot }];

export const MOCK_API_SERVICES = [{ provide: ApiService, useClass: MockApiService }];
