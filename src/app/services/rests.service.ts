import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestsService {

  constructor( private http:HttpClient) { }


 apiUrl = "https://reqres.in/api/";


  getall( page : number){

    this.apiUrl += "users?page=" + page;

    console.log("Calling Get Api: " + this.apiUrl);
    return this.http.get(this.apiUrl)
  }

  getbyid( id : number){
 this.apiUrl += "user" + id;
console.log("Calling Get Single Api : " + this.apiUrl);
return this.http.get(this.apiUrl);

  }
 
  create (data : any){
    this.apiUrl += "user";
    console.log("Calling  Create Api : " + this.apiUrl);
    return this.http.post(this.apiUrl,data);
    
  }

  update (data : any, id : number){
    this.apiUrl += "user/" + id;
    console.log("Calling Update Api : " + this.apiUrl);
    return this.http.put(this.apiUrl,data);
    
  }

  delete(id:number){
    this.apiUrl +="users/" + id;
  console.log("Calling Delete Api" + this.apiUrl);
  return this.http.delete(this.apiUrl)
  }

}
