import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [
    'testId',
    'name',
    'email',
    'location',
    'gender'
  ];
  users = new MatTableDataSource<User>();
  emailValid: boolean = false;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(user => {
      this.users.data = user[0];
    });
  }
}
