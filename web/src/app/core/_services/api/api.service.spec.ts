import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService, API_URL } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    injector = getTestBed();
    service = injector.inject(ApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('http post', () => {
    it('should return an Observable<any>', () => {
      const dummyLogin = {
        username: 'user1',
        password: 'password1',
      };

      service.post('/auth/login', {}).subscribe((users) => {
        expect(users).toEqual(dummyLogin);
      });

      const req = httpMock.expectOne(`${API_URL}/auth/login`);
      expect(req.request.method).toBe('POST');
      req.flush(dummyLogin);
    });
  });
});
