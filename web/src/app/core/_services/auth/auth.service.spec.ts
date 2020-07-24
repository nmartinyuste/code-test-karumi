import { TestBed } from '@angular/core/testing';
import { MOCK_API_SERVICES } from '@app/_mocks/collections';
import { AuthService } from './auth.service';
import { ApiService } from '../api/api.service';
import { success, error } from '@app/_mocks/mock-api.service';

describe('AuthService', () => {
  let authService: AuthService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, MOCK_API_SERVICES],
    });
    authService = TestBed.inject(AuthService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('login success', () => {
    authService.login({ username: 'user1', password: 'password1' }).subscribe((user) => {
      expect(user).toEqual(success);
    });
    expect(authService.currentUserValue).toEqual(success);
  });

  it('logout', () => {
    authService.logout();
    expect(authService.currentUserValue).toBeNull();
  });
});
