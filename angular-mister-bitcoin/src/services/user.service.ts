import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../app/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpClient) { }
  private BASE_URL = 'http://localhost:3000/user'

  public getUser(): Observable<User> {
    return this.httpService.get<User>(this.BASE_URL)
  }
}
