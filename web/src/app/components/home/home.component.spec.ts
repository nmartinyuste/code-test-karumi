import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '@app/_services';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MOCK_AUTH_SERVICES } from '@app/_mocks/collections';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [MOCK_AUTH_SERVICES],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to /auth/login', () => {
    // const link = fixture.debugElement.nativeElement.querySelector('.logout-link');
    // link.click();
    component.logout();
    expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
  });
});
