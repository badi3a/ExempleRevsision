import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  constructor(private http:HttpClient) { }
  //get users
  getUsers(){
    return this.http.get<User[]>(this.url)
  }
  //add user
  addUser(user:User){
    return this.http.post(this.url, user)
  }
}
