import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boisson } from '../models/boisson.model';
import { Burger } from '../models/Burger.model';
import { Menu } from '../models/Menu.model';
import { BoissonsService } from '../services/boissons.service';
import { BurgerService } from '../services/burger.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.scss']
})
export class DetailBurgerComponent implements OnInit {
  @Input() burger!: Burger;
sumulair: Burger[]=[]
frites: Menu[]=[];
boisson: any
  parameters !: string;

  constructor(private burgerService: BurgerService,
     private route: ActivatedRoute,
     private boissonservice: BoissonsService,
     private menuService: MenuService,
     private router: Router
     ) { }


  // burger!: Burger[];

  ngOnInit(): void 
  {
    this.parameters = this.route.snapshot.params['id'];
   this.burger = this.burgerService.getOnBurgers(this.parameters);
   this.burgerService.getBurger().subscribe(data =>{
    if(data.id != this.parameters){
        this.sumulair.push(data)
    }
   }); 
   //lister les frites complements
    this.getFrites();
    //lister les Boissons
    this.getBoissons();

    //pour le service menu
  }


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
//rechargement du produit sumulair
detailleSumulair(){
  this.parameters = this.route.snapshot.params['id'];
  this.burger = this.burgerService.getOnBurgers(this.parameters);
}
}
