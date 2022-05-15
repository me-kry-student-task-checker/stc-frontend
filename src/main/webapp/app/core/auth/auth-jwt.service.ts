import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

import { SERVER_API_URL } from 'app/app.constants';
import { Login } from 'app/models/credentials.model';
import { map } from 'rxjs/operators';

type JwtToken = {
  id_token: string;
};

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor(private http: HttpClient, private $localStorage: LocalStorageService) {}

  getToken(): string {
    return this.$localStorage.retrieve('authenticationToken') || '';
  }

  login(credentials: Login): Observable<any> {
    return this.http.post<JwtToken>(SERVER_API_URL + 'api/user/auth', credentials).pipe(
      map(response => {
        this.authenticateSuccess(response);
      })
    );
  }

  logout(): Observable<void> {
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      observer.complete();
    });
  }

  private authenticateSuccess(response: JwtToken): void {
    const jwt = response.id_token;
    this.$localStorage.store('authenticationToken', jwt);
  }
}
