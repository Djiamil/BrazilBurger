import { Component, OnInit } from '@angular/core';
import { Burger } from '../models/Burger.model';
import { BurgerService } from '../services/burger.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent implements OnInit {
  // const button.getElementById(button);

  constructor(private burgerService: BurgerService) { }


  burger!: Burger[];
 mestruc = this.burgerService.getBurger();
  ngOnInit(): void {
   this.mestruc;
  }


 

}
