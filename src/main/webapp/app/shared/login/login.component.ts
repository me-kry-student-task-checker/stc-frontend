import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { LoginService } from 'app/core/login/login.service';

@Component({
  selector: 'jhi-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['../../../content/scss/components/_login.scss'],
})
export class LoginModalComponent implements AfterViewInit {
  @ViewChild('email', { static: false })
  email?: ElementRef;

  authenticationError = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
  }

  ngAfterViewInit(): void {
    if (this.email) {
      this.email.nativeElement.focus();
    }
  }

  cancel(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      email: '',
      password: '',
    });
    this.activeModal.dismiss('cancel');
  }

  login(): void {
    this.loginService
      .login({
        email: this.loginForm.get('email')!.value,
        password: this.loginForm.get('password')!.value,
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          this.activeModal.close();
          if (this.router.url === '/account/register') {
            this.router.navigate(['']);
          }
        },
        (error: any) => {
          console.warn(error);
          this.authenticationError = true;
        }
      );
  }

  register(): void {
    this.activeModal.dismiss('to state register');
    this.router.navigate(['/account/register']);
  }
}
