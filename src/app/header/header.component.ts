import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Burger } from '../models/Burger.model';
import { BurgerService } from '../services/burger.service';
import { PanierService } from '../services/panier.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() burger!: Burger;
burgers:Burger[]=[];
term:any;

constructor(private burgerservice: BurgerService,private panierservice: PanierService) { }
items$ ?: Observable<any>= this.panierservice.items$;
searchText:any;

  ngOnInit(): void {
    // this.burgerservice.receveproduits().subscribe(d=>
    //   this.burgers=d
      
    // )};
  }

  //   ngOnDestroy(): void {
  //     this.$subs= unsubscribe();
  // }

}


