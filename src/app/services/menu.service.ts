import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Menu } from '../models/Menu.model';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Burger } from '../models/Burger.model';





@Injectable({
    providedIn: 'root'
  })

  export class MenuService{
  sanitizer: any;
    constructor(private http:HttpClient){}


    menus:Menu[]=[];
    frites:Menu[]=[];
    burgerMenu!:Burger;

     getMenuBaseDonne():Observable<any>{
            return this.http.get<any>('http://127.0.0.1:8000/api/menus');
        }
        // getBurgerMenu(){
        //     this.getMenuBaseDonne().subscribe(data =>{

        //         this.burgerMenu = data.burgers;
        //     });
        //     return this.burgerMenu
        // }
    converTab(){
      this.getMenuBaseDonne().subscribe(data =>{
        this.menus = data
      });
      // console.log(this.menus)
      return this.menus;
    }



    getOnMenu(id : any)
    {
        return this.converTab().find(params => params.id === id);
    }



    getMenuOb():Observable<Menu>
        {
          return from (this.menus);
        }   
        convertImage(param:string){
            return this.sanitizer.bypassSecurityTrustResource("data:image/png;base64, " + param);
        }

  }