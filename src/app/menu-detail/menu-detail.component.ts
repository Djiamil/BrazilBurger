import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boisson } from '../models/boisson.model';
import { Burger } from '../models/Burger.model';
import { Menu } from '../models/Menu.model';
import { BoissonsService } from '../services/boissons.service';
import { MenuService } from '../services/menu.service';
import { ZoneService } from '../services/zone.service';
import {PanierService } from '../services/panier.service';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  @Input() menu!: any;
  @Input() boisson!: Boisson;
  @Input() tailles!:any[];
  @Input() tailes!:any[];
 @Input() boissonss!:Boisson;

  parameters !: number;
  
  burgerMenus!:any[];
  burgerMenu!:any;
  burgerM!:Burger[];

  constructor(private route: ActivatedRoute,
    private menuService: MenuService,
    private boissonService: BoissonsService,
    private zoneService: ZoneService,private panierservice: PanierService) { }

  boissons: Boisson[]=[];
  menus!:any[];


taf : boolean = true;
zone: boolean = true;


OnMenu!:any;
quantity: number = 0;
param!:string;
libele!:string;
tab:any;
  ngOnInit(): void {
    this.lesZones();
  this.parameters = +this.route.snapshot.params['id'];
  this.menu = this.menuService.getOnMenu(this.parameters);
  this.tailles =this.menu.tailles
  this.tailles.forEach(sub => {
  this.libele = sub.tailleBoisson.libelle;
  this.tailes = sub.tailleBoisson.boissons;
  this.quantity = sub.quantity
  // this.QuInput(input); 
  })
  }
  
  zones(){
    this.zone= false;
  }
tabzones:any
  lesZones(){
    this.zoneService.getZones().subscribe(zones => {
      this.tabzones = zones;
    });
  }
  // input = document.querySelectorAll('input');


  addplus(input:any){
    let somme = 0;
    let sommeTotal = 0;
    let papa = document.querySelectorAll('input');
    papa.forEach(element => 
      {
        somme += (+element.value);
      }
      );
      sommeTotal = somme;
      somme = 0;
    if(sommeTotal < this.quantity){
     input.value++;
    console.log(sommeTotal);
    console.log(this.quantity);
    
   } else{
      this.taf= false;
   }
    // if(input.value<3){
    //  input.value++;
    // }
    // console.log(input.value);
    // console.log(input.id);

  }
  addmoins(input:any){
    if(input.value >0)  
    input.value--;
    this.taf= true;
    console.log(input.value);
  }


  item!: any;
addQantity(menu:Menu){
  this.panierservice.addQantity(menu,this.item)
}
}


