import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../models/vuelo';

@Injectable({
  providedIn: 'root',
})
export class VueloService {
  url = 'http://localhost:4000/api/vuelos/';

  constructor(private http: HttpClient) {}

  getVuelos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteVuelo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarVuelo(vuelo: Vuelo): Observable<any> {
    return this.http.post(this.url, vuelo);
  }

  viewVuelo(id?: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarVuelo(id: string, vuelo: Vuelo): Observable<any> {
    return this.http.put(this.url + id, vuelo);
  }

  generarPDF(): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' };
    return this.http.get<Blob>(this.url + 'generar-pdf', options);
  }
}
