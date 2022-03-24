import { CourseListComponent } from '../../../../../../main/webapp/app/layouts/courses/course-list/courseList.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountService } from 'app/core/auth/account.service';
import { StchFrontendTestModule } from '../../../test.module';

describe('Component Tests', () => {
  describe('Courses Component', () => {
    let comp: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;
    let accountService: AccountService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [StchFrontendTestModule],
        declarations: [CourseListComponent],
      })
        .overrideTemplate(CourseListComponent, '')
        .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(CourseListComponent);
      comp = fixture.componentInstance;
      accountService = TestBed.get(AccountService);
    });
    it('should call accountService.getAuthenticationState on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(accountService.getAuthenticationState).toHaveBeenCalled();
    });
  });
});
