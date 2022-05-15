import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { NewAccount } from 'app/models/credentials.model';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) {}

  save(account: NewAccount): Observable<{}> {
    return this.http.post(SERVER_API_URL + '/api/user/registration', account);
  }
}
