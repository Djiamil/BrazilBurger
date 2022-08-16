import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client.model';
import { MenuService } from '../services/menu.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listecommandeclient',
  templateUrl: './listecommandeclient.component.html',
  styleUrls: ['./listecommandeclient.component.scss']
})
export class ListecommandeclientComponent implements OnInit {
@Input() client!:Client;
  constructor(
    private userservice: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  parameters !: number;
  param!:string;
  // @Input() client!:Client;
  clients!:Client[]
    tabId!:any;
    tabCommande!:any[];
    tabCommandeproduits!:any[];
    nombr:number=1;
  ngOnInit(): void {
    this.parameters = +this.route.snapshot.params['id'];
    this.tabId = this.userservice.getOnClient(this.parameters);
    console.log(this.tabId)
    this.tabCommande = this.tabId.commandes
  }
  findId(){
    
  }
  modifEtatCommande(id:number){
    return this.menuService.modifEtatCommande(id);
   }

}
