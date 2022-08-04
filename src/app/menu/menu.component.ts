import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, last } from 'rxjs';
import { Menu } from '../models/Menu.model';
import { MenuService } from '../services/menu.service';
import {PanierService } from '../services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu!: Menu;
  @Input() frite!: Menu;
  constructor(private router: Router,
    private menuService: MenuService,
    private panierservice: PanierService 
    ) { }

  ngOnInit(): void {
  //  this. existance()
  }


//   storage= localStorage.getItem('products');
//   existance(): void{
//     for (let key of Object.keys(localStorage)) {
//       console.log(key, localStorage.getItem(key));
// }
//   }
detaille(){
  this.router.navigateByUrl(`menu/${this.menu.id}`);
}
//Methode pour convertur les images depus le ts
// convertureImage(param:string){
//   return this.menuService.convertImage(param);
// }



}
