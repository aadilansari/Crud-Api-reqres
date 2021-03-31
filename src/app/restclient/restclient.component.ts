import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../classes/responseFormat';
import { ResponseFormat3 } from '../classes/responseFormat3';
import { RestsService } from '../services/rests.service';

@Component({
  selector: 'app-restclient',
  templateUrl: './restclient.component.html',
  styleUrls: ['./restclient.component.css']
})
export class RestclientComponent implements OnInit {

  totalRecords = 0;
  totalPages = 0;
  UserList= [];
  createid= 0;
  createdAt;


  constructor( private httpclient:HttpClient, 
    private restservice: RestsService) { }

  ngOnInit(): void {
  this.getUser(2);

  }
 
  addEmployee(form){
    console.log(form.value.txtname);
    let user =
    {
      name: form.value.txtname,
      job: form.value.txtjob
  }

  console.log(user);

   // let apiUrl= " https://reqres.in/api/users";
   //this.httpclient.post(apiUrl,user).subscribe(
     this.restservice.create(user).subscribe(
   
   (response: ResponseFormat3)=>{
       console.log(response);
        this.createid = response.id;
        this.createdAt = response.createdAt;

     }

   )


  }

  getUser( page: number){
    let apiUrl = 'https://reqres.in/api/users?page=' + page;

   this.httpclient.get(apiUrl).subscribe(

  // this.restservice.getall(page).subscribe( // using service
    
      (response: ResponseFormat) => {
      
        console.log(response);
        this.totalPages = response.page; 
        this.totalRecords = response.total;
        this.UserList = response.data;


        console.log("Total Number of Pages: " + this.totalPages );
        console.log("Total Number of Records: " + this.totalRecords );
        console.log("Total Number of User: " + this.UserList );
        
      }

    );
  }

  delete(id){

    //this.httpclient.delete("https://reqres.in/api/users/" + id).subscribe(
 
    this.restservice.delete(id).subscribe(
     (response) =>{
      console.log("Employuee deleted with id: " + id);
       
     }
    )
    
  }

  
  

}
