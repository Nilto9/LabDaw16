import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from '../models/avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  url = 'http://localhost:4000/api/aviones/';

  constructor(private http: HttpClient) { }


  getAviones(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteAvion(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarAvion(avion: Avion): Observable<any> {
    return this.http.post(this.url, avion);
  }

  viewAvion(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarAvion(id: string, avion: Avion): Observable<any> {
    return this.http.put(this.url + id, avion);
  }
}
