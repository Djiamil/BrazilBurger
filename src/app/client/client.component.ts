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

    ) { }

 clients:Client[]=[];
 @Input() client!:Client;


  ngOnInit(): void {
    this.userservice.getClient().subscribe(user => {
      this.clients = user;
      console.log('ok')
    })
  }
  CommandeClient(){
      this.router.navigateByUrl(`cliente/${this.client.id}`);
  }

}
