import { RouterModule, Routes } from '@angular/router';
import { LogindisplayComponent } from './logindisplay/logindisplay.component';
import { LoginlogoutComponent } from './loginlogout/loginlogout.component';
import { ManageorgComponent } from './Manageorg/manageorg.component';
import { DesignationComponent } from './designation/designation.component';
import { DocumentComponent } from './document/document.component';

const arr: Routes = [
  {path : '', component :  LoginlogoutComponent},
  { path: 'dashboard', component: LogindisplayComponent },
  // { path: 'login', component:  LoginlogoutComponent },
  { path: 'manage', component: ManageorgComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'alldoc', component: DocumentComponent }

];
export const routing=RouterModule.forRoot(arr);
