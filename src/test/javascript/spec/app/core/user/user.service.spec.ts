import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JhiDateUtils } from 'ng-jhipster';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.model';
import { SERVER_API_URL } from 'app/app.constants';

describe('Service Tests', () => {
  describe('User Service', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [JhiDateUtils],
      });

      service = TestBed.get(UserService);
      httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    describe('Service methods', () => {
      it('should call correct URL', () => {
        service.find('user').subscribe();

        const req = httpMock.expectOne({ method: 'GET' });
        const resourceUrl = SERVER_API_URL + 'api/users';
        expect(req.request.url).toEqual(`${resourceUrl}/user`);
      });

      it('should return Student', () => {
        let expectedResult: string | undefined;

        service.find('student').subscribe(received => {
          expectedResult = received.login;
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(new User(1, 'student'));
        expect(expectedResult).toEqual('student');
      });

      it('should return Authorities', () => {
        let expectedResult: string[] = [];

        service.authorities().subscribe(authorities => {
          expectedResult = authorities;
        });
        const req = httpMock.expectOne({ method: 'GET' });

        req.flush([Authority.STUDENT, Authority.ADMIN]);
        expect(expectedResult).toEqual([Authority.STUDENT, Authority.ADMIN]);
      });

      it('should propagate not found response', () => {
        let expectedResult = 0;

        service.find('user').subscribe(null, (error: HttpErrorResponse) => {
          expectedResult = error.status;
        });

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush('Invalid request parameters', {
          status: 404,
          statusText: 'Bad Request',
        });
        expect(expectedResult).toEqual(404);
      });
    });
  });
});
