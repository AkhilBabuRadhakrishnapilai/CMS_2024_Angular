import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

   logOut(){
    sessionStorage.removeItem('email1');
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('role');

    localStorage.removeItem('email1');
    localStorage.removeItem('Token');
    localStorage.removeItem('role');
    this.router.navigate(['shared/home'])
  }
}

