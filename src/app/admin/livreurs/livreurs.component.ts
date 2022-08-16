import { Component, Input, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.scss']
})
export class LivreursComponent implements OnInit {

  @Input() tablivreurs:any;
  tablivrer!:any[];
  checkedlivreurs!:any;
  constructor(
    private zoneService: ZoneService
  ) { }

  ngOnInit(): void {
    //appel de la fonction de recuperations des livreurs
   
  }
  // recuperation des livreurs dans le ts livraisons
  bont:boolean= false;
  cpt:number= 0;
  cptTotale:any;
  // getlivreurs(e:any){
  //   let input = document.querySelectorAll('input');
  //  this.cptTotale = e.target.value;
  //   this.cpt++;
  //   // console.log(this.cptTotale)
  //   if(this.cpt ===1){
  //     this.bont=true;
  //   }
  // }
//recuperation de l'id du livreur
recupIdLivreure(idliv:number){
this.zoneService.recupIdLivreure(idliv)
}
}
