import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Menu } from '../models/Menu.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Burger } from '../models/Burger.model';
import { DomSanitizer } from '@angular/platform-browser';





@Injectable({
  providedIn: 'root'
})

export class MenuService {
  
  constructor(private http: HttpClient,private sanitizer:DomSanitizer) { }


  menus: Menu[] = [];
  frites: Menu[] = [];
  burgerMenu!: Burger;

  getMenuBaseDonne(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/menus');
  }
  // getBurgerMenu(){
  //     this.getMenuBaseDonne().subscribe(data =>{

  //         this.burgerMenu = data.burgers;
  //     });
  //     return this.burgerMenu
  // }
  converTab() {
    this.getMenuBaseDonne().subscribe(data => {
      this.menus = data
    });
    // console.log(this.menus)
    return this.menus;
  }



  getOnMenu(id: number):any {
    return this.converTab().find(params => params.id === id);
  }



  getMenuOb(): Observable<Menu> {
    return from(this.menus);
  }
  convertImage(param: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + param);
  }

  //Partis des commandes

  getCommande(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/commandes');
  }
  commande: any[] = []
  converTabCommande() {
    this.getCommande().subscribe(data => {
      this.commande = data
    })
    return this.commande

  }

  


  getOnCommande(id: any): any {

    return this.converTabCommande().find(params => params.id === id)
  }

 // methode Put pour modifier
modifEtatCommande(id:number){
  this.http.put<any>('http://127.0.0.1:8000/api/commandes/'+id,{
    "statutCommande": "Annuler"
  })
  .subscribe();
  location.reload();
}
}