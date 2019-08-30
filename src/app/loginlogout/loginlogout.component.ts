import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.scss']
})
export class LoginlogoutComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  login() {
    if(this.username == 'Admin' && this.password == 'Password@1') {
      this.router.navigate(['dashboard']);
    }else {
      alert("Invalid credentials.")

    }
  }

}
