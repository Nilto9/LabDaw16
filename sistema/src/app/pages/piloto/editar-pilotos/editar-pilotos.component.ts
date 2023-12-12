import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Piloto } from 'src/app/models/piloto';
import { PilotoService } from 'src/app/services/piloto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-pilotos',
  templateUrl: './editar-pilotos.component.html',
  styleUrls: ['./editar-pilotos.component.css']
})
export class EditarPilotosComponent implements OnInit {
  pilotoForm: FormGroup;
  id: string | null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private pilotoService: PilotoService) {
    this.pilotoForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      hora_vuelo: ['', Validators.required]
     
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.pilotoService.viewPiloto(this.id).subscribe(data => {
        this.pilotoForm.patchValue(data);
      });
    }
  }

  actualizarPiloto() {
    const PILOTO: Piloto = {
      codigo: this.pilotoForm.get('codigo')?.value,
      nombre: this.pilotoForm.get('nombre')?.value,
      hora_vuelo: this.pilotoForm.get('hora_vuelo')?.value,
    
    };
    console.log(PILOTO);

    Swal.fire({
      title: 'Actualización de Piloto',
      text: "¿Desea actualizar el Piloto?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.pilotoService.actualizarPiloto(this.id, PILOTO).subscribe(data => {
            console.log(PILOTO);
            this.router.navigate(['/listar-pilotos']);
          });
        }
      }
    });
  }
}
