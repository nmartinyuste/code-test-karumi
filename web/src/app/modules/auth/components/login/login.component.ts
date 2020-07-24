import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '@app/_services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private destroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    fromEvent(document, 'keydown')
      .pipe(takeUntil(this.destroy$))
      .subscribe((key: KeyboardEvent) => {
        if (key?.key === 'Enter') {
          this.signIn();
        }
      });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public signIn(): void {
    this.authService
      .login({ username: this.loginForm.value.username, password: this.loginForm.value.password })
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data) => {
          this.router.navigate(['home']);
        },
        (error) => {
          this.snackBar.open(error?.error?.message, undefined, {
            panelClass: ['error-snackbar'],
          });
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
