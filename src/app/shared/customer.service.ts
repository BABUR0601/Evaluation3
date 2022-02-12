import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private httpClient :HttpClient) {
    customers:Hotel;
    bindListcustomer(){
      this.httpClient.get(environment.apiUrl+'/api/customer')
      .toPromise().then(
       response =>{
           console.log("from service");
           this.httpClient=response as Hotel[]
          }
         );
        }
  
   }
}
