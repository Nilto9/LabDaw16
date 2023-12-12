import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vuelo } from 'src/app/models/vuelo';
import { VueloService } from 'src/app/services/vuelo.service';
import { PilotoService } from 'src/app/services/piloto.service';
import { AvionService } from 'src/app/services/avion.service';
import { MiembroService } from 'src/app/services/miembro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-vuelos',
  templateUrl: './editar-vuelos.component.html',
  styleUrls: ['./editar-vuelos.component.css']
})
export class EditarVuelosComponent implements OnInit {
  vueloForm: FormGroup;
  id: string | null;
  listPilotos: any[];
  listAviones: any[];
  listMiembros: any[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vueloService: VueloService,
    private pilotoService: PilotoService,
    private avionService: AvionService,
    private miembroService: MiembroService
  ) {
    this.vueloForm = this.formBuilder.group({
      num_vuelo: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      piloto: ['', Validators.required],
      avion: ['', Validators.required],
      miembro: ['', Validators.required]
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.listPilotos = [];
    this.listAviones = [];
    this.listMiembros = [];
  }

  ngOnInit() {
    this.validarId();
    this.cargarPilotos();
    this.cargarAviones();
    this.cargarMiembros();
  }

  validarId() {
    if (this.id !== null) {
      this.vueloService.viewVuelo(this.id).subscribe(data => {
        this.vueloForm.patchValue(data);
      });
    }
  }

  cargarPilotos() {
    this.pilotoService.getPilotos().subscribe(data => {
      this.listPilotos = data;
    });
  }

  cargarAviones() {
    this.avionService.getAviones().subscribe(data => {
      this.listAviones = data;
    });
  }

  cargarMiembros() {
    this.miembroService.getMiembros().subscribe(data => {
      this.listMiembros = data;
    });
  }

  actualizarVuelo() {
    const VUELO: Vuelo = {
      num_vuelo: this.vueloForm.get('num_vuelo')?.value,
      origen: this.vueloForm.get('origen')?.value,
      destino: this.vueloForm.get('destino')?.value,
      fecha: this.vueloForm.get('fecha')?.value,
      piloto: this.vueloForm.get('piloto')?.value,
      avion: this.vueloForm.get('avion')?.value,
      miembro: this.vueloForm.get('miembro')?.value
    };

    Swal.fire({
      title: 'Actualización de Vuelo',
      text: '¿Desea actualizar el Vuelo?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.vueloService.actualizarVuelo(this.id, VUELO).subscribe(data => {
            this.router.navigate(['/listar-vuelos']);
          });
        }
      }
    });
  }
}
