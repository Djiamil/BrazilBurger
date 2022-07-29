import { Component, Input, OnInit } from '@angular/core';
import { Snapface } from '../models/snap-face.model';



@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent{
  @Input() snapface!: Snapface;
  
  
  changeb(): void{
      if(this.snapface.bettonText==="changer"){
        
        this.snapface.snaps++;
        this.snapface.bettonText="dejachanger";
        }
    }
  }
  // console.log(snapface.bettonText);






