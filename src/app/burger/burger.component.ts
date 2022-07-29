import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
   
  


  ngOnInit(): void {
    // console.log(this.burger.nom)*
    // alert('ok');
  }
  
  addQantity(){
    this.burgerservice.getBurger().subscribe(console.log)
  }
  

  detaille(){
      this.router.navigateByUrl(`burger/${this.burger.id}`);
  }

 

  

addToCart(burgers:any) {
  this.panierservice.addToCart(burgers);
  this.Desactive()
}


Desactive(){
    this.desactive.nativeElement.remove();
} 
       

  }

