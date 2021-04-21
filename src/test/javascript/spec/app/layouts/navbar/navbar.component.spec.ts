import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

import { StchFrontendTestModule } from '../../../test.module';
import { NavbarComponent } from 'app/layouts/navbar/navbar.component';
import { AccountService } from 'app/core/auth/account.service';

describe('Component Tests', () => {
  describe('Navbar Component', () => {
    let comp: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let accountService: AccountService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [StchFrontendTestModule],
        declarations: [NavbarComponent],
      })
        .overrideTemplate(NavbarComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NavbarComponent);
      comp = fixture.componentInstance;
      accountService = TestBed.get(AccountService);
    });

    it('Should call accountService.isAuthenticated on authentication', () => {
      // WHEN
      comp.isAuthenticated();

      // THEN
      expect(accountService.isAuthenticated).toHaveBeenCalled();
    });
  });
});
