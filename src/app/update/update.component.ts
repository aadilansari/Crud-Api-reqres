import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userid=0;
  

  constructor( private activatedroute: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit(): void {
    
    this.activatedroute.params.subscribe(

      (params) =>{
      this.userid = params ["id"];

      }
    )

  }


  updateEmployee(form){

     let user = {
      Name: form.value.txtname,
      Job: form.value.txtjob,
     
     }


    console.log( user
      );

      //put
      console.log( this.userid  );

      let apiUrl="https://reqres.in/api/users/" + this.userid ;
      
      this.http.put(apiUrl,user).subscribe(
        (response) => {
          console.log(response);
        }
      )
      

  }

}
