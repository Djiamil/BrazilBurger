import { Component, Input, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-zone-commandes',
  templateUrl: './zone-commandes.component.html',
  styleUrls: ['./zone-commandes.component.scss']
})
export class ZoneCommandesComponent implements OnInit {
@Input() tabonZone:any=[]
  constructor(private zoneService: ZoneService) { }

  ngOnInit(): void {
  }

  converTabCommande(cmd:any,elhtml:HTMLInputElement){
    if(elhtml.checked){
      this.zoneService.addCmd(cmd);
    }else{
      this.zoneService.removecmd(cmd)
    }
    console.log(this.zoneService.comlivrable);
  }

}
