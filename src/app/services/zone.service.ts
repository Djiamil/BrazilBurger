import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http:HttpClient) { }
  zones:any; 
public readon_ly = "http://localhost:8000/api/zones"

  getZones():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/zones')
  }

}
