import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
  constructor(private menuService: MenuService,private route: ActivatedRoute) { }
  searchText=this.formateDateToday()
  nombr!:number;
  comandes:any[]=[];
  comandesToDaye:any[]=[];
  command:any;
  parameters !: number;
  param!:string;
  filterdate:any;
  filterdates:Date = new Date();
  textbtnlivraisons="Annuler";
  ngOnInit(): void {
    this.menuService.getCommande().subscribe(data => {
      // console.log(this.filterdate)
      this.comandes = data 
      // console.log(this.comandes)
    })
      // this.parameters = +this.route.snapshot.params['id'];
      // this.command = this.menuService.getOnCommande(this.parameters);
  }
 

  // @ViewChild('annuler') annuler!:ElementRef;

  // recupdate(){
  //   let btnId = document.querySelectorAll('button');
  //   btnId.forEach(el=>{

  //     console.log(el);
  //   })
  //   // const annuler = document.getElementById('annuler') as HTMLButtonElement;
  // console.log(this.annuler)
  // }
  modifEtatCommande(id:number){
    if(this.textbtnlivraisons==="Annuler"){
      this.textbtnlivraisons="Valider"
     return this.menuService.modifEtatCommande(id);
    }
  }
  formateDateToday(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;
    //2022-08-10
  }

}
