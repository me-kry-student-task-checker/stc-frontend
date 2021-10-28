import { DeleteCourseComponent } from 'app/layouts/courses/delete-course.component';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { CourseService } from 'app/layouts/courses/courses.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { StchFrontendTestModule } from '../../../test.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

describe('Component Test', () => {
  describe('Course Delete Component', () => {
    let comp: DeleteCourseComponent;
    let fixture: ComponentFixture<DeleteCourseComponent>;
    let service: CourseService;
    let mockActiveModal: MockActiveModal;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [StchFrontendTestModule],
        declarations: [DeleteCourseComponent],
      })
        .overrideTemplate(DeleteCourseComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DeleteCourseComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CourseService);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(1);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(1);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
