import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import{Document} from './document'
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor(private modalService: NgbModal,private router : Router) { }
  updatedItem: number;
  title = 'Documents';
  closeResult: string;
  selectedDesignationOption: string;
  name: string;
  msg = 'Are You Sure!';
  description:string;

  arrDoc: Document[ ] = [
  new Document('Software Engineer', 'Software Engineer'),
  new Document('System AdminiStator', 'System AdminiStator'),
  new Document('Sr. Software', 'Senior Software Engineer')
 ];
  editId:number;
  editName:string;
  editDescription:string;


  ngOnInit() {
  }
  onSearch(value) {

    console.log(value);
    if (value != '') {
      this.arrDoc = this.arrDoc.filter(x => x.name.startsWith(value));
    }
    this.ngOnInit();
  }

  // Add modal
  openAdd(content, passedTitle) {
    this.selectedDesignationOption = passedTitle;
    this.name = '';
    this.description = '';
    this.modalService.open(content);
  }

  // Edit modal popup
  openEdit(content, passedTitle, i) {
    console.log(content);
    this.selectedDesignationOption = passedTitle;
    // console.log(i);
    this.name = this.arrDoc[i].name;
    this.description = this.arrDoc[i].description;
    // console.log('updating');
    this.updatedItem = i;
    this.modalService.open(content);
  }


  // delete
  onDesigDelete(desig) {
    console.log(desig);
    if (confirm(this.msg) === true) {
      this.arrDoc.splice(this.arrDoc.indexOf(desig), 1);
    }

  }

  onFormSubmit() {
    if (this.selectedDesignationOption == 'Add') {
      console.log(this.name);
      this.arrDoc.push(new Document(this.name, this.description));
    } else {
      let data = this.updatedItem;
      // console.log(data);
      // alert(this.arrDesig.length);
      for (let i = 0; i < this.arrDoc.length; i++) {
        if (i == data) {
          this.arrDoc[i].name = this.name;
          this.arrDoc[i].description = this.description ;
          console.log(this.arrDoc);

          // To initialize the fields with empty data
          this.name = '';
          this.description = '';
        }
      }
    }
    this.modalService.dismissAll();
  }
  designation(){
    this.router.navigate(['designation']);
  }
  Alldoc(){
    this.router.navigate(['alldoc']);
  }
}
