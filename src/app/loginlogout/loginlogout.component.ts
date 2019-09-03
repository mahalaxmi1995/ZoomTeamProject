import {  OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.scss']
})
export class LoginlogoutComponent implements OnInit {
  username: string;
  password: string;
  isRemberMeChecked:string;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  login() {
    if(this.username == 'A' && this.password == 'P') {
      this.router.navigate(['/dashboard']);
    }else {
      alert("Invalid credentials.")

    }

  }

}

