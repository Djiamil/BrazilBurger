import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Boisson } from '../models/boisson.model';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {

  constructor(private http:HttpClient) { }

  boissons: Boisson[]= []

  getBoissons():Observable<Boisson>
  {
    return this.http.get<any>('http://127.0.0.1:8000/api/boissons')
  }


  //methode Externe 

  disparait: boolean =true;

  nombre = 1;
  getBoolean(){
    return this.disparait
  }

  CounteElement():any{
    if(this.nombre === 2){
      console.log( this.disparait = false);
    }else{

      this.nombre++
    }
  }
 
     getFrites(): Observable<any>{

      return this.http.get<any>('http://127.0.0.1:8000/api/frites')
     }
    

}
