import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable,take } from 'rxjs';
import { Burger } from '../models/Burger.model';
import { BurgerService } from '../services/burger.service';
import { PanierService } from '../services/panier.service';
import {  NgForm} from '@angular/forms';
import { ZoneService } from '../services/zone.service';
import { BoissonsService } from '../services/boissons.service';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/Menu.model';

@Component({
  selector: 'app-panier-commande',
  templateUrl: './panier-commande.component.html',
  styleUrls: ['./panier-commande.component.scss']
})

export class PanierCommandeComponent implements OnInit {
  currencyPipe: any;
  frites: Menu[]=[];
  boisson: any

  constructor(private panierservice: PanierService,
    private router: Router,
    private burgerservice: BurgerService,
    private zoneService: ZoneService,
    private boissonservice: BoissonsService,
    private menuService: MenuService
    ) {}
  items$: Observable<any>= this.panierservice.items$;
  // itemsmenu$: Observable<any>= this.panierservice.items$;
  burgers: any[]=[]
  menus!:any[];
  @Input() burger!: Burger;

  totalprice:number=0;
  prixdun:number=0;
  zone:boolean = true; 
  @Input() zones:any[] = [];
  ngOnInit(): void {
    this.zoneService.getZones().subscribe(zone => {
      this.zones = zone;
      console.log(this.zones)
    })
    // console.log(this.quantity(this.burger))

     //lister les frites complements
     this.getFrites();
     //lister les Boissons
   this.getBoissons();
     
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
  pare:boolean = true;

  addClasse(){
    this.pare= false;

  }
  togoleElement(){
    this.pare= true;

  }

  //listera les zones
  getFrites(){
    this.boissonservice.getFrites().subscribe(frites=>{
      this.frites =frites;
      // console.log(this.frites); 
    })
  }
  getBoissons(){
    this.boissonservice.getBoissons().subscribe(boissons=>{
      this.boisson = boissons
      // console.log(boissons);
  })
  }
  //methode converture les image 
  convertureImage(param:string){
    return this.menuService.convertImage(param);
  }
  }




  