import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authUrl = `${environment.apiUrl}auth/login`;

  constructor(private httpClient: HttpClient) {

  }

  login(body: {email: string, password: string}): Observable<{accessToken: string}> {
    return this.httpClient.post<{accessToken: string}>(this.authUrl, body);
  }
}
