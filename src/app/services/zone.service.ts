import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http:HttpClient,
    private menuService:MenuService
    ) { }
  zones:any;
  idliv!:number ;
public readon_ly = "http://localhost:8000/api/zones"

  getZones():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/zones')
  }
  //convertis les zones d'observables en tableau
tabZones:any[]= []
  converttabZone(){
    this.getZones().subscribe(zones =>{
      this.tabZones = zones;
    })
    return this.tabZones;
  }
//recupperer la liste des livreure
tablivreurs:any;
getlivreur():Observable<any>{
  return this.http.get<any>('http://localhost:8000/api/livreurs')
}

recupIdLivreure(id:number){
  console.log(id)
this.idliv = id
}
//get onZone

getOnZones(id: number):any {
  return this.converttabZone().find(params => params.id === id);
}
//validation des livraisons
Livraisons(id:number){ 
  let iricmd:string[]=[];
  this.comlivrable.forEach(el=>{
    iricmd.push('/api/commandes/'+el.id)
  })
  this.http.post<any>('http://127.0.0.1:8000/api/livraisons', {
    "telephone": "77 3488929",
    // "etatlivraison": "En cours",
    "livreur": "/api/livreurs/"+this.idliv,
    "zone": "/api/zones/"+id,
    "commandes":iricmd,
    "gestionairs": "/api/gestionairs/61"
  })
  .subscribe();
  // setTimeout(() =>{
  //   location.reload();
  // },3000)
}
idcmd!:number;
comlivrable:any[]= []
// converTabCommande(id:number){
//   this.idcmd = id;
//   this.menuService.converTabCommande().forEach(el => {
//     if (el.id ===this.idcmd){
//      this.comlivrable.push(el);
//     }
//   })
//   console.log(this.comlivrable);
// }
addCmd(cmd:any){
this.comlivrable.push(cmd);
}
removecmd(cmd:any){
this.comlivrable.splice(this.comlivrable.indexOf(cmd, 1));
}
}