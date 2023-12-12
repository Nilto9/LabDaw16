import { Component } from '@angular/core';
import { VueloService } from 'src/app/services/vuelo.service'; // Replace 'path-to-your-vuelo-service' with the actual path to your VueloService
import { Vuelo } from 'src/app/models/vuelo';
@Component({
  selector: 'app-listar-vuelos',
  templateUrl: './listar-vuelos.component.html',
  styleUrls: ['./listar-vuelos.component.css']
})
export class ListarVuelosComponent {
  listVuelos: any[] = []; // Assuming listVuelos is an array of vuelos

  constructor(private vueloService: VueloService) {}

  ngOnInit() {
    this.loadVuelos();
  }

  loadVuelos() {
    this.vueloService.getVuelos().subscribe(
      (response: any) => {
        this.listVuelos = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarVuelo(id: string) {
    this.vueloService.deleteVuelo(id).subscribe(
      (response: any) => {
     
        this.loadVuelos();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  openPdfTables(): void {
    this.vueloService.generarPDF().subscribe((pdfBlob: Blob) => {
      const fileURL = URL.createObjectURL(pdfBlob);
      window.open(fileURL, '_blank');
    });
  }
}
