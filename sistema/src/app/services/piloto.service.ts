import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piloto } from '../models/piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {
  url = 'http://localhost:4000/api/pilotos/';

  constructor(private http: HttpClient) { }

 
 

  getPilotos(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePiloto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPiloto(piloto: Piloto): Observable<any> {
    return this.http.post(this.url, piloto);
  }

  viewPiloto(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarPiloto(id: string, piloto: Piloto): Observable<any> {
    return this.http.put(this.url + id, piloto);
  }
}
