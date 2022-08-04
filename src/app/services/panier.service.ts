import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Burger } from '../models/Burger.model';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root',
})
export class PanierService {
  burger!:Burger;
  http: any;
  constructor(private https:HttpClient) {
    let existingCartItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();                      

  addToCart(product: any) {
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

  addQantity(product: any,productStorages: any)
  {
    this.items$.subscribe(data=>{
    productStorages=  data.find(productStorages => product.id === productStorages.id)
    if(productStorages === undefined){
      this.addToCart(product)
    }
    else 
    {
      productStorages.quantity++;
      this.saveEtat()
    }
    })
  }
 

//   totalPrix(){
//     this.items$.subscribe()
//   }

// getOnBurgers(id : string) : any
// {
//     return this.burger.find(params => params.id === id);
// }

table: any[]=[];
objetLigneCommande:any=[]
ligneDeComm:any=[]
zone:any
post:any
validerCommande(){
  this.items$.subscribe(panier =>{
    this.table = panier;
    console.log(this.table)
    this.table.forEach(el =>{
      this.objetLigneCommande = {
        "produit":  "/api/produits/"+el.id,
        "quantite":  +el.quantity
      }
      this.ligneDeComm.push(this.objetLigneCommande);
      console.log(this.ligneDeComm);
    });
  });
    this.https.post<any>('http://127.0.0.1:8000/api/commandes',
    {
      "produis": this.ligneDeComm,
      "zone": "/api/zones/1",
      "client": "/api/clients/63"
    })
    .subscribe((data) =>{
      this.post.id = data.id
    });
      
}
}