import { CoursesComponent } from 'app/layouts/courses/courses.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountService } from 'app/core/auth/account.service';
import { StchFrontendTestModule } from '../../../test.module';

describe('Component Tests', () => {
  describe('Courses Component', () => {
    let comp: CoursesComponent;
    let fixture: ComponentFixture<CoursesComponent>;
    let accountService: AccountService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [StchFrontendTestModule],
        declarations: [CoursesComponent],
      })
        .overrideTemplate(CoursesComponent, '')
        .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(CoursesComponent);
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
