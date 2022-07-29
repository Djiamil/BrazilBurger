import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boisson } from '../models/boisson.model';
import { Menu } from '../models/Menu.model';
import { BoissonsService } from '../services/boissons.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  @Input() menu!: Menu;
  @Input() boisson!: Boisson;
  parameters !: string;
 

  constructor(private route: ActivatedRoute,private menuService: MenuService,private boissonService: BoissonsService) { }
  boissons: Boisson[]=[];
taf = this.boissonService.getBoolean();


  ngOnInit(): void {
  this.parameters = this.route.snapshot.params['id'];
   ( this.menu = this.menuService.getOnMenu(this.parameters));
   (this.boissonService.getBoissons().subscribe(data => {  this.boissons.push(data)}));
  }


}


