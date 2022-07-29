import { Component, OnInit } from '@angular/core';
import { Snapface } from '../models/snap-face.model';
 import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {



 
  //...
  constructor(private faceSnapsService: FaceSnapsService) { }

  snapface!: Snapface[];
  ngOnInit(): void {
   
    this.snapface = this.faceSnapsService.getAllFaceSnaps();
    this.snapface = this.faceSnapsService.snapface;
  }

}
