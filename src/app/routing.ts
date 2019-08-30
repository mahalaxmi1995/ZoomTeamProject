import { RouterModule, Routes } from '@angular/router';
import { LogindisplayComponent } from './logindisplay/logindisplay.component';
import { LoginlogoutComponent } from './loginlogout/loginlogout.component';

const arr: Routes = [
  {path : '', component :  LoginlogoutComponent},
  { path: 'dashboard', component: LogindisplayComponent },
  // { path: 'login', component:  LoginlogoutComponent },

];
export const routing=RouterModule.forRoot(arr);
