import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/UserLogin';
import { UserRegister } from '../models/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: UserRegister) : Observable<any> {
    return this.http.post<any>(
      'https://localhost:44302/api/Account/register',
      user
    )
  }

  public login(user: UserLogin) : Observable<any> {
    return this.http.post<any>(
      'https://localhost:44302/api/Account/login',
      user
    )
  }
}
