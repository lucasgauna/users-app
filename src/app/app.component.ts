import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { User } from './shared/services/users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Users List';
  users: User[] = [];
  searchTerm: string = '';

  constructor(private usersSvc: UserService) { }

  ngOnInit(): void {
    this.usersSvc.getUsers().subscribe((users: User[]) => {
      this.users = users;
    })
  }

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
