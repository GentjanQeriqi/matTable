import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  displayedColumns: string[] = [
    'testId',
    'name',
    'email',
    'location',
    'gender'
  ];
  users = new MatTableDataSource<User>();
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe( (user: User[]) => {
      this.users.data = user;
      console.log(user);
      
    })
  }
}
