import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Boisson } from '../models/boisson.model';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {

  constructor() { }

  boissons: Boisson[]= [

    {
      id: 2,
      taille: "fanta",
      libeler!: "pm",
      prix!: 345,
      quantity!: 4,
      image!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOYUWCCLz_aEJAFVYfF_sR_SS06gKVwUt7w&usqp=CAU"

    },
    {
      id: 2,
      taille: "fanta",
      libeler!: "pm",
      prix!: 345,
      quantity!: 4,
      image!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOYUWCCLz_aEJAFVYfF_sR_SS06gKVwUt7w&usqp=CAU"

    },
    {
      id: 2,
      taille: "fanta",
      libeler!: "pm",
      prix!: 345,
      quantity!: 4,
      image!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOYUWCCLz_aEJAFVYfF_sR_SS06gKVwUt7w&usqp=CAU"

    },
    {
      id: 2,
      taille: "fanta",
      libeler!: "pm",
      prix!: 345,
      quantity!: 4,
      image!: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOYUWCCLz_aEJAFVYfF_sR_SS06gKVwUt7w&usqp=CAU"

    },
  ]

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
