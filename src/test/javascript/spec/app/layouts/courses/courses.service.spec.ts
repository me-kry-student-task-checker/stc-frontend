import { CourseService } from '../../../../../../main/webapp/app/layouts/courses/course.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SERVER_API_URL } from 'app/app.constants';
import { NewCourse } from '../../../../../../main/webapp/app/models/newcourse.model';
import { Course } from '../../../../../../main/webapp/app/models/course.model';

describe('Service Tests', () => {
  describe('Courses Service', () => {
    let service: CourseService;
    let httpMock: HttpTestingController;
    let newCourse: NewCourse;
    let course: Course;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      service = TestBed.get(CourseService);
      httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    describe('Service Method', () => {
      it('Should call correct URL', () => {
        service.get(1).subscribe();

        const req = httpMock.expectOne({ method: 'GET' });
        const url = SERVER_API_URL + '/api/course/get';
        expect(req.request.url).toEqual(`${url}/1`);
      });
      it('Should call correct URL', () => {
        service.create(newCourse).subscribe();

        const req = httpMock.expectOne({ method: 'POST' });
        const url = SERVER_API_URL + 'api/course/create';
        expect(req.request.url).toEqual(`${url}`);
      });
      it('Should call correct URL', () => {
        service.edit(course).subscribe();

        const req = httpMock.expectOne({ method: 'PUT' });
        const url = SERVER_API_URL + 'api/course/edit';
        expect(req.request.url).toEqual(`${url}`);
      });
      it('Should call correct URL', () => {
        service.delete(1).subscribe();

        const req = httpMock.expectOne({ method: 'DELETE' });
        const url = SERVER_API_URL + 'api/course/delete/1';
        expect(req.request.url).toEqual(`${url}`);
      });
    });
  });
});
