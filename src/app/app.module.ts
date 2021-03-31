import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestclientComponent } from './restclient/restclient.component';
import { RestComponent } from './rest/rest.component';
import { RestclientdetailComponent } from './restclientdetail/restclientdetail.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    RestclientComponent,
    RestComponent,
    RestclientdetailComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
