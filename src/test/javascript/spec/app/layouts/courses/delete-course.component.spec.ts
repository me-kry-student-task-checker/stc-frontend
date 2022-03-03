import { CourseDeleteComponent } from '../../../../../../main/webapp/app/layouts/courses/courseDelete.component';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { CourseService } from '../../../../../../main/webapp/app/layouts/courses/course.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { StchFrontendTestModule } from '../../../test.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

describe('Component Test', () => {
  describe('Course Delete Component', () => {
    let comp: CourseDeleteComponent;
    let fixture: ComponentFixture<CourseDeleteComponent>;
    let service: CourseService;
    let mockActiveModal: MockActiveModal;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [StchFrontendTestModule],
        declarations: [CourseDeleteComponent],
      })
        .overrideTemplate(CourseDeleteComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CourseDeleteComponent);
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
