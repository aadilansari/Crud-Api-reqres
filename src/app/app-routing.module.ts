import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestclientComponent } from './restclient/restclient.component';
import { RestComponent} from './rest/rest.component';
import { RestclientdetailComponent } from './restclientdetail/restclientdetail.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path : "restclient",
    component: RestclientComponent
  },
  {
    path : "details/:id",
    component: RestclientdetailComponent
  },

  {
    path : "update/:id",
    component: UpdateComponent 
    },

  {
    path :"rest",
   component: RestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
