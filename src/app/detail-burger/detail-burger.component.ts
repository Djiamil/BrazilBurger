import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Burger } from '../models/Burger.model';
import { Menu } from '../models/Menu.model';
import { BurgerService } from '../services/burger.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.scss']
})
export class DetailBurgerComponent implements OnInit {
  @Input() burger!: Burger;
  parameters !: string;

  constructor(private burgerService: BurgerService, private route: ActivatedRoute) { }


  // burger!: Burger[];

  ngOnInit(): void 
  {
    this.parameters = this.route.snapshot.params['id'];
   console.log(this.burger = this.burgerService.getOnBurgers(this.parameters));
  

    //pour le service menu
  }

}
