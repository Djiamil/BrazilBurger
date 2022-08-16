import { Component, Input, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.scss']
})
export class LivraisonsComponent implements OnInit {
  livrer:boolean = true;
  constructor(
    private zoneService: ZoneService
  ) { }
  @Input() zones:any[] = [];
  zonesAlivrer:any[]=[];
  cacheZones:boolean=true;
  ngOnInit(): void {
    this.zoneService.getZones().subscribe(zone => {
      this.zones = zone;
      this.zones.forEach(el =>{
        if(el.commandes.length!= 0){
          this.zonesAlivrer.push(el)
          // console.log(this.zonesAlivrer)
        }
      })
    })
    //appel de la fonction de recuperations des livreurs
    this.getlivreurs()
  }

  //recuperation des livreurs dans le ts livraisons
  livreurs:any[]=[]
  livreursdispo:any[]=[]
getlivreurs(){
  this.zoneService.getlivreur().subscribe(liv =>{
    this.livreurs = liv
    this.livreurs.forEach(el=>{
      if(el.etatLivreur != "indisponible")
      this.livreursdispo.push(el)
    })
    
  });
}
//validations livraisons
Livraisons(id:number){
  this.zoneService.Livraisons(id)
  this.livrer = false;
  setTimeout(() => {
    this.livrer = true;
  },5000)
}
tabZone:any
comandeZone!:any[]
comandeZoneTrue:any[]=[]
recupIdLivreure(id:number){
 this.tabZone = (this.zoneService.getOnZones(id))
 this.comandeZone = this.tabZone.commandes
 this.comandeZone.forEach(elcmd=>{
  // console.log(elcmd.isEtatPaiement)
  if(elcmd.isEtatComande===true){
    this.comandeZoneTrue.push(elcmd)
 }
  
 })
 this.cacheZones=false;

//  console.log(this.comandeZone) 
//  this.tabZone.forEach(el=>{
//   console.log(el);
//  })
}
}
