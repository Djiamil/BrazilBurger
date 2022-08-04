import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable,take } from 'rxjs';
import { Burger } from '../models/Burger.model';
import { BurgerService } from '../services/burger.service';
import { PanierService } from '../services/panier.service';
import {  NgForm} from '@angular/forms';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.scss']
})

export class PanierCommandeComponent implements OnInit {
  currencyPipe: any;

  constructor(private panierservice: PanierService,private router: Router,private burgerservice: BurgerService) {}
  items$: Observable<any>= this.panierservice.items$;
  itemsmenu$: Observable<any>= this.panierservice.items$;
  burgers: any[]=[]
  @Input() burger!: Burger;

  totalprice:number=0;
  prixdun:number=0;
  ngOnInit(): void {
  
    // console.log(this.quantity(this.burger))
    this.calculePrixTotal();
     
  }
  sum!: number;
  
  // myusername = (<HTMLInputElement>document.getElementById("username")).value;
  // apprend(){
  //   console.log(this.myusername);
  // }
  deleteToCart(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.splice(product,1);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }

  // quantity(element:Burger){
  //   const qnt = document.getElementById(`${element.id}`)
  // }
  

calculePrix(product: any,qtt: any){
  return this.panierservice.calculePrix(product,qtt)
}

calculePrixTotal(){
  this.sum=this.panierservice.calculePrixTotal();
  return this.sum 
  
}
  validerCommande(){
   return this.panierservice.validerCommande();
  }

}
