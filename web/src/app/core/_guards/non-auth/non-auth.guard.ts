import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class NonAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['home']);
      return false;
    }

    // not logged in so redirect to login page with the return url

    return true;
  }
}
