import { Component, OnInit } from '@angular/core';
import { Burger } from '../models/Burger.model';
import { Menu } from '../models/Menu.model';
import { BurgerService } from '../services/burger.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-catalogue-produit',
  templateUrl: './catalogue-produit.component.html',
  styleUrls: ['./catalogue-produit.component.scss']
})
export class CatalogueProduitComponent implements OnInit {

  constructor(private burgerService: BurgerService,private menuService: MenuService) { }
  searchText:any;
    burgers: Burger[]=[];
    menus!:any[];
    frite!:any[];
    food:string="";
   
    ngOnInit(): void {
      this.burgerService.getBurger().subscribe(data =>{
        this.burgers.push(data);
      });
      this.menuService.getMenuBaseDonne().subscribe(data=>{
     this.menus = data;
      this.menus.forEach(item=>{
      this.frite= item.id;
      })
      })
      }

   
      //  this.menuService.getMenuOb().subscribe(datam =>{  this.menus.push(datam)});


    // addmenus(){
    //     this.menuService.getMenuOb().subscribe(data =>{
    //     this.menus.push(data);
    //    })
    // }

  
    // this.burgerService.getcatalogueBurger().subscribe(console.log);

      // this.burgerService.getcatalogueBurger().subscribe(
      //   (d:Burger[]) => {
      //     this.burgers=d;
      //   }
      // );
     
}
