import { Component, Input, OnInit } from '@angular/core';
import { Boisson } from '../models/boisson.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tailleboisson',
  templateUrl: './tailleboisson.component.html',
  styleUrls: ['./tailleboisson.component.scss']
})
export class TailleboissonComponent implements OnInit {

 @Input() boissons!:Boisson;

count:number=0;

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    console.log(this.count);
  }

addplus(){
  this.count++;
}

addmoins(){
  if(this.count >0)
  this.count--;
}

}
