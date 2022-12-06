import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
const URL='http://localhost:3000/admin'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: string, pwd: string): Observable<User[]> {
    return this.http.get<User[]>(URL+"?username="+login+"?password="+pwd);
  }
}
