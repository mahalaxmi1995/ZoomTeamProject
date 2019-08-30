import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogindisplayComponent } from './logindisplay/logindisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginlogoutComponent } from './loginlogout/loginlogout.component';
import { routing } from './routing';
// import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LogindisplayComponent,
    LoginlogoutComponent
  ],
  imports: [
    BrowserModule,MatExpansionModule,FormsModule,BrowserAnimationsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
