import { Injectable } from '@angular/core';
import { User } from '@app/_models';

export const user: User = {
  id: 1,
  username: 'user1',
  password: 'password1',
  session_token: 'fakeSessionToken1',
};

@Injectable()
export class MockAuthService {
  private user: User;

  constructor() {}

  get currentUserValue(): User {
    return this.user;
  }
  setUser(user: User) {
    this.user = user;
  }

  logout() {}
}
