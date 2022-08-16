import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  constructor(private menuService: MenuService,private route: ActivatedRoute) { }
  nombr!:number;
  comandes:any[]=[];
  comandesToDaye:any[]=[];
  command:any;
  parameters !: number;
  param!:string;
  filterdate:any;
  filterdates:Date = new Date();
  ngOnInit(): void {
    this.menuService.getCommande().subscribe(data => {
      // console.log(this.filterdate)
      this.comandes = data 
    })
    // this.parameters = +this.route.snapshot.params['id'];
    // this.command = this.menuService.getOnCommande(this.parameters);
    this.recupdate()
  }
 

  @ViewChild('annuler') annuler!:ElementRef;

  recupdate(){
    let btnId = document.querySelectorAll('button');
    btnId.forEach(el=>{

      console.log(el);
    })
    // const annuler = document.getElementById('annuler') as HTMLButtonElement;
  console.log(this.annuler)
  }
  modifEtatCommande(id:number){
   return this.menuService.modifEtatCommande(id);
  }


}
