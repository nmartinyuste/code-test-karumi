import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { of } from 'rxjs';

export const success: User = {
  id: 1,
  username: 'user1',
  password: 'password1',
  session_token: 'fakeSessionToken1',
};

export const error = { message: 'Invalid credentials' };

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor() {}

  public post(url: string, body: {}) {
    return of(success);
  }
}
