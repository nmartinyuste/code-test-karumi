import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from '@app/_services';
import {
  MOCK_AUTH_SERVICES,
  MOCK_ACTIVATED_ROUTE_SNAPSHOT,
  MOCK_ROUTER,
  MOCK_ROUTER_STATE_SNAPSHOT,
} from '@app/_mocks/collections';
import { user } from '@app/_mocks/mock-auth.service';

describe('AuthGuard', () => {
  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let authService: AuthService;
    let router: Router;
    let route: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AuthGuard, MOCK_ACTIVATED_ROUTE_SNAPSHOT, MOCK_ROUTER, MOCK_ROUTER_STATE_SNAPSHOT, MOCK_AUTH_SERVICES],
      });
      router = TestBed.inject(Router);
      spyOn(router, 'navigate');
      authService = TestBed.inject(AuthService);
      authGuard = TestBed.inject(AuthGuard);
      state = TestBed.inject(RouterStateSnapshot);
    });

    it('Go to /home route when user is logged in', () => {
      authService.setUser(user);
      expect(authGuard.canActivate(route, state)).toEqual(true);
    });

    it('Redirect to login when user is not logged in', () => {
      authService.setUser(undefined);

      expect(authGuard.canActivate(route, state)).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
    });
  });
});
