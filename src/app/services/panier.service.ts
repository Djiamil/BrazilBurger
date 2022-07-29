import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Burger } from '../models/Burger.model';





@Injectable({
  providedIn: 'root',
})
export class PanierService {
  burger!:Burger;
  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Burger[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Burger) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }

  calculePrixTotal(){
    let sum=0
    this.items$.subscribe(
      ((value)=>{
        value.forEach((item:any)=>{
          sum+=item.prix*item.quantity
        })
       
      })
    )
    this.saveEtat()
    return sum
  }

  calculePrix(product:any,qtt:number){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach((el=>{
          if(el.id == product.id){
            product.quantity = qtt
          }
        }) )
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
    this.saveEtat();
  }
  getItems() {
    return this.items$;
  }
  tabPanier:any=[];
  tab(){
    this.items$.subscribe(value=>
      this.tabPanier=value
      )
      return this.tabPanier
  }

  saveEtat(){
    return  localStorage.setItem('panier', JSON.stringify(this.tab()));
  }
 

//   totalPrix(){
//     this.items$.subscribe()
//   }

// getOnBurgers(id : string) : any
// {
//     return this.burger.find(params => params.id === id);
// }

}