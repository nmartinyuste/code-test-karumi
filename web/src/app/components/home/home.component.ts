import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}
