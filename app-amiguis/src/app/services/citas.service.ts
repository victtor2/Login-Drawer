import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor( private http: HttpClient) { }

  private API_CITAS="https://api.sampleapis.com/futurama/characters"

  getCitas():Observable <any>{
    return this.http.get(this.API_CITAS)
  }

  //"https://api.sampleapis.com/futurama/characters/id"
  getCitasUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_CITAS}/${id}`)
    //return this.http.get(this.API_CITAS+"/"+id);
  }

}
