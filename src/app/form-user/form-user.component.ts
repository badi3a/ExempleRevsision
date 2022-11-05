import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User()
  }
  save(){
    this.userService.addUser(this.user).subscribe()
  }

}
