import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/users/user';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  searchTerm='';

  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.service.listUsers();
  }

  // editUser(user:User){
  //   this.populateUserData(user);
  // }
  // populateUserData(user: User) {
  //   this.service.
  // }

}
