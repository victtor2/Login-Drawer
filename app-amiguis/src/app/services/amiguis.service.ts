import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmiguisService {

  constructor(private http: HttpClient) { }

  private API_AMIGUIS = 'http://localhost:3000/amiguis'

  /////////////////LEER - GET
  getAmiguis():Observable <any>{
    return this.http.get(this.API_AMIGUIS)
  }

  getAmiguisID(id:any): Observable <any>{
    return this.http.get(`${this.API_AMIGUIS}/${id}`)
  }

  ////////////////GUARDAR - POST
  postAmiguis(amigui: JSON):Observable <any>{
    return this.http.post(this.API_AMIGUIS, amigui)
  }

  /////////////ACTUALIZAR - PUT
  putAmiguis(amigui: any):Observable<any>{
    return this.http.put(`${this.API_AMIGUIS}/${amigui.id}`, amigui)
  }


  ////////////////7ELIMINAR - DELETE
  deleteAmiguis(amigui: any): Observable <any>{
    return this.http.delete(this.API_AMIGUIS, amigui)
  }

  deleteAmiguisID(id: any):Observable<any>{
    return this.http.delete(`${this.API_AMIGUIS}/${id}`)
  }
}
