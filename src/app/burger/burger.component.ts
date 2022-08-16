import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Burger } from '../models/Burger.model';
import { BurgerService } from '../services/burger.service';
import { PanierService } from '../services/panier.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})


export class BurgerComponent implements OnInit {
  @Input() burger!: Burger;
  @Output() inre!:number;
  @ViewChild('desactive') desactive!:ElementRef;
  
  constructor(private router: Router,private burgerservice: BurgerService,private panierservice:  PanierService ) {}
   

  
  

item!: any;
  ngOnInit(): void {
    // console.log(this.burger.nom)*
    // alert('ok');
  }
  
  addQantity(burger:Burger){
    this.panierservice.addQantity(burger,this.item)
  }

  detaille(){
      this.router.navigateByUrl(`burger/${this.burger.id}`);
  }


// addToCart(burgers:any) {
//   this.panierservice.addToCart(burgers);
// }



       

  }

