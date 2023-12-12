import { Component } from '@angular/core';
import { PilotoService } from 'src/app/services/piloto.service'; // Replace 'path-to-your-vuelo-service' with the actual path to your VueloService
import { Piloto } from 'src/app/models/piloto';

@Component({
  selector: 'app-listar-pilotos',
  templateUrl: './listar-pilotos.component.html',
  styleUrls: ['./listar-pilotos.component.css'],
})
export class ListarPilotosComponent {
  listPilotos: any[] = []; // Assuming listVuelos is an array of vuelos

  constructor(private pilotoService: PilotoService) {}

  ngOnInit() {
    this.loadPilotos();
  }

  loadPilotos() {
    this.pilotoService.getPilotos().subscribe(
      (response: any) => {
        this.listPilotos = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarPiloto(id: string) {
    this.pilotoService.deletePiloto(id).subscribe(
      (response: any) => {
        this.loadPilotos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
