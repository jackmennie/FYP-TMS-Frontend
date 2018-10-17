import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

export class User {
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
    console.log(this.users);
  }

  add(email: string): void {
    email = email.trim();
    if (!email) { return; }
    this.userService.addUser({ email } as User)
      .subscribe(userx => {
        this.users.push(userx);
      });
  }
}
