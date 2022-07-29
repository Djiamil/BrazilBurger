import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Boisson } from '../models/boisson.model';
import { BoissonsService } from '../services/boissons.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.scss']
})
export class BoissonComponent implements OnInit 
{

@ViewChild('cocheBoisson') cocheBoisson!:ElementRef;

  constructor(private boissonService: BoissonsService) { }

  ngOnInit(): void { }

  tabboissons:Boisson[]=[];

 

  taf(){
    this.boissonService.CounteElement();
  }

}

