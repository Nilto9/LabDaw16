import { Component } from '@angular/core';
import { AvionService } from 'src/app/services/avion.service'; // Replace 'path-to-your-vuelo-service' with the actual path to your VueloService
import { Avion } from 'src/app/models/avion';

@Component({
  selector: 'app-listar-aviones',
  templateUrl: './listar-aviones.component.html',
  styleUrls: ['./listar-aviones.component.css']
})
export class ListarAvionesComponent {
  listAviones: any[] = []; // Assuming listVuelos is an array of vuelos

  constructor(private avionService: AvionService) {}

  ngOnInit() {
    this.loadAviones();
  }

  loadAviones() {
    this.avionService.getAviones().subscribe(
      (response: any) => {
        this.listAviones = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarAvion(id: string) {
    this.avionService.deleteAvion(id).subscribe(
      (response: any) => {
     
        this.loadAviones();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


}
