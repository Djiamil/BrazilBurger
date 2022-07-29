import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Snapface } from '../models/snap-face.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  snapface!: Snapface[];
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {

  }

 
  

  
  
  
  }

