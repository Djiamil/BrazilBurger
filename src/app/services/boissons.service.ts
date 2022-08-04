import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Boisson } from '../models/boisson.model';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {

  constructor() { }

  boissons: Boisson[]= []

  getBoissons():Observable<Boisson>
  {
    return from (this.boissons);
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
 
      
    

}
