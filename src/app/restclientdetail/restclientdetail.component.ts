import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat2 } from '../classes/responseFormat2';
// import { RestsService } from '../services/rests.service'; service is taking longer than usual

@Component({
  selector: 'app-restclientdetail',
  templateUrl: './restclientdetail.component.html',
  styleUrls: ['./restclientdetail.component.css']
})
export class RestclientdetailComponent implements OnInit {

  userid= 0;
  userdetails;

  constructor( private activatedroute: ActivatedRoute, //private restservice: RestsService,
   private httpclient: HttpClient
    ) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(
      (params) => {
        this.userid = params["id"];
        console.log(this.userid);
        let apiUrl = "https://reqres.in/api/users/" + this.userid;

        this.httpclient.get(apiUrl).subscribe(
     //  this.restservice.getbyid(this.userid).subscribe(
          (response: ResponseFormat2) =>{
            console.log(response.data);
             this.userdetails  = response.data;
            console.log(this.userdetails);
        

          }
        )
      

      }


    )
  }

}
