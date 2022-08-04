import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  clients:any[]=[];
  getClient():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/clients');

  }

  converTab(){
    this.getClient().subscribe(data =>{
     this.clients = data
    });
   return this.clients;
  }
  getOnClient(id : any) : any
  {
        console.log(this.converTab().find(params => params.id === id));
        }

}
