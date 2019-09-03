import { Component, OnInit, VERSION } from '@angular/core';
import { Login } from '../login';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
selector: 'app-logindisplay',
templateUrl: './logindisplay.component.html',
styleUrls: ['./logindisplay.component.css']
})
export class LogindisplayComponent implements OnInit {
Firstname:string='';
Lastname : string='';
DOB : string='';
Gender : string='';
DOJ : string='';
Address1 : string='';
Address2 : string='';
City : string='';
State : string='';
Country : string='';
Race : string='';
Ethnicity: string='';
marital_status : string='';
Language : string='';
SSN_Govtid : string='';
Email: string='';
Cell_phone : string='';
Home_phone : string='';
Work_phone : string='';
Extension : string='';

xpandStatus=true;
  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;

arrlogin: Login[]=[
// tslint:disable-next-line: max-line-length
new Login("admin","manju","01/01/1994","m","01/01/2019","vijaya","shantinagar","hubli","karnataka","india","race1","ethinicity1","married","french","xxx-xxx-1234","xyz@gmail.com","1234567898","1234567898","1234567898","123")

];
constructor(private bpo: BreakpointObserver,private router : Router) { }

public ngOnInit(): void {
  const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
  this.bpo.observe(breakpoints)
    .pipe(map(bst => bst.matches))
    .subscribe(matched => {


      console.log('matched');

      this.determineSidenavMode();
      this.determineLayoutGap();
    });
  }

  private determineSidenavMode(): void {
    if (
        this.isExtraSmallDevice() ||
        this.isSmallDevice()
    ) {
        this.fixedInViewport = false;
        this.mode = 'over';
        this.opened = false;
        return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
}

private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
        this.layoutGap = '0';
        return;
    }

    this.layoutGap = '64';
}

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small)
  }

  next(){
    this.router.navigate(['manage']);
  }

}
