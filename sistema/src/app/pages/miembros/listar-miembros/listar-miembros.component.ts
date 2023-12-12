import { Component, OnInit } from '@angular/core';
import { MiembroService } from 'src/app/services/miembro.service';
import { Miembro } from 'src/app/models/miembro';

@Component({
  selector: 'app-listar-miembros',
  templateUrl: './listar-miembros.component.html',
  styleUrls: ['./listar-miembros.component.css']
})
export class ListarMiembrosComponent implements OnInit {
  listMiembros: Miembro[] = [];

  constructor(private miembroService: MiembroService) {}

  ngOnInit() {
    this.loadMiembros();
  }

  loadMiembros() {
    this.miembroService.getMiembros().subscribe(
      (response: Miembro[]) => {
        this.listMiembros = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  eliminarMiembro(id: string) {
    this.miembroService.deleteMiembro(id).subscribe(
      (response: any) => {
        this.loadMiembros();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
