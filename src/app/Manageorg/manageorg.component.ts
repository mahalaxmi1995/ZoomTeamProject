import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageorg',
  templateUrl: './manageorg.component.html',
  styleUrls: ['./manageorg.component.css']
})
export class ManageorgComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  designation(){
    this.router.navigate(['designation']);
  }
  Alldoc(){
    this.router.navigate(['alldoc']);
  }
}
