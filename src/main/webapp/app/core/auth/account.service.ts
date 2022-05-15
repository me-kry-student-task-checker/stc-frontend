import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of } from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';
import { StateStorageService } from 'app/core/auth/state-storage.service';

import { SERVER_API_URL } from 'app/app.constants';
import { SimpleAccountModel } from 'app/models/account.model';
import { StudentModel } from 'app/models/account.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userIdentity: SimpleAccountModel | null = null;
  private authenticationState = new ReplaySubject<SimpleAccountModel | null>(1);
  private accountCache$?: Observable<SimpleAccountModel | null>;

  constructor(private http: HttpClient, private stateStorageService: StateStorageService, private router: Router) {}

  save(account: SimpleAccountModel): Observable<{}> {
    return this.http.post(SERVER_API_URL + 'api/user/me', account);
  }

  authenticate(identity: SimpleAccountModel | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    if (!this.userIdentity || !this.userIdentity.role) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    const rAuthoritie: string[] = [];
    rAuthoritie.push(this.userIdentity.role);
    return rAuthoritie.some((authority: string) => authorities.includes(authority));
  }

  identity(force?: boolean): Observable<SimpleAccountModel | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => {
          return of(null);
        }),
        tap((account: SimpleAccountModel | null) => {
          this.authenticate(account);

          if (account) {
            this.navigateToStoredUrl();
          }
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<SimpleAccountModel | null> {
    return this.authenticationState.asObservable();
  }

  private fetch(): Observable<SimpleAccountModel> {
    return this.http.get<SimpleAccountModel>(SERVER_API_URL + 'api/user/me');
  }

  getNonAssignedStudents(id: number): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(SERVER_API_URL + 'api/user/student/notassigned/' + id);
  }

  getStudentsByAssignedCourseId(id: number): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(SERVER_API_URL + 'api/user/student/assigned/' + id);
  }

  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl);
    }
  }
}
