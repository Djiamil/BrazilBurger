import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client.model';
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
  ) { }

  parameters !: number;
  param!:string;
  // @Input() client!:Client;

  ngOnInit(): void {
    // this.parameters = +this.route.snapshot.params['id'];
    // console.log(this.parameters);
    // this.client = this.userservice.getOnClient(this.parameters);

  }

}
