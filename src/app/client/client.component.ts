import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client.model';
import { MenuService } from '../services/menu.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private userservice: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService

    ) { }

 clients:Client[]=[];
 @Input() client!:Client;


  ngOnInit(): void {
    this.userservice.getClient().subscribe(user => {
      this.clients = user;
    })
  }
  CommandeClient(){
      this.router.navigateByUrl(`cliente/${this.client.id}`);
  }
  modifEtatCommande(id:number){
    return this.menuService.modifEtatCommande(id);
   }

}
