import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Miembro } from '../models/miembro';

@Injectable({
  providedIn: 'root'
})
export class MiembroService {
  url = 'http://localhost:4000/api/miembros/';

  constructor(private http: HttpClient) { }

 
 

  getMiembros(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteMiembro(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarMiembro(miembro: Miembro): Observable<any> {
    return this.http.post(this.url, miembro);
  }

  viewMiembro(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarMiembro(id: string, miembro: Miembro): Observable<any> {
    return this.http.put(this.url + id, miembro);
  }
}
