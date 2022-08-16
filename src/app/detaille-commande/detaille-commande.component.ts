import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Burger } from '../models/Burger.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-detaille-commande',
  templateUrl: './detaille-commande.component.html',
  styleUrls: ['./detaille-commande.component.scss']
})
export class DetailleCommandeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private menuService: MenuService,
    ) { }
  parameters !: number;
  nombr:number=0
  param!:string;
  command:any;
  produit!:any[];
  produits!:any;
  ngOnInit(): void {
  this.parameters = +this.route.snapshot.params['id'];
  this.command = this.menuService.getOnCommande(this.parameters);
  this.produit = this.command.produis
    this.produit.forEach(element =>{
      this.produits = element.produit;
      // console.log(this.produits)
    })
    
  
}
}