import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MOCK_AUTH_SERVICES, MOCK_ROUTER } from '@app/_mocks/collections';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@app/_services';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { User } from '@app/_models';
import { user } from '@app/_mocks/mock-auth.service';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      declarations: [LoginComponent],
      providers: [MOCK_AUTH_SERVICES, MOCK_ROUTER],
    }).compileComponents();
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('loginForm should have been created', () => {
    expect(component.loginForm.value.username).toEqual('');
    expect(component.loginForm.value.password).toEqual('');
  });

  it('login success redirect to /home', () => {
    const response: User = user;
    spyOn(authService, 'login').and.returnValue(of(response));
    component.signIn();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('login error', () => {
    const errorMessage = { error: { message: 'Error' } };
    spyOn(component['snackBar'], 'open');
    spyOn(authService, 'login').and.returnValue(throwError(errorMessage));
    component.signIn();
    fixture.detectChanges();
    expect(component['snackBar'].open).toHaveBeenCalled();
    expect(component['snackBar'].open).toHaveBeenCalledWith(errorMessage?.error?.message, undefined, {
      panelClass: ['error-snackbar'],
    });
  });

  it('fromEvent called', () => {
    const response: User = user;
    spyOn(authService, 'login').and.returnValue(of(response));
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
      })
    );
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
