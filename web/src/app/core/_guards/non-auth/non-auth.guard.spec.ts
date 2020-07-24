import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NonAuthGuard } from './non-auth.guard';
import { AuthService } from '@app/_services';
import {
  MOCK_AUTH_SERVICES,
  MOCK_ACTIVATED_ROUTE_SNAPSHOT,
  MOCK_ROUTER,
  MOCK_ROUTER_STATE_SNAPSHOT,
} from '@app/_mocks/collections';
import { user } from '@app/_mocks/mock-auth.service';

describe('NonAuthGuard', () => {
  describe('canActivate', () => {
    let authGuard: NonAuthGuard;
    let authService: AuthService;
    let router: Router;
    let route: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          NonAuthGuard,
          MOCK_ACTIVATED_ROUTE_SNAPSHOT,
          MOCK_ROUTER,
          MOCK_ROUTER_STATE_SNAPSHOT,
          MOCK_AUTH_SERVICES,
        ],
      });
      router = TestBed.inject(Router);
      spyOn(router, 'navigate');
      authService = TestBed.inject(AuthService);
      authGuard = TestBed.inject(NonAuthGuard);
      state = TestBed.inject(RouterStateSnapshot);
    });

    it('Go to /auth/login route when user is not logged in', () => {
      authService.setUser(undefined);
      expect(authGuard.canActivate(route, state)).toEqual(true);
    });

    it('Redirect to /home when user is logged in', () => {
      authService.setUser(user);

      expect(authGuard.canActivate(route, state)).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['home']);
    });
  });
});
