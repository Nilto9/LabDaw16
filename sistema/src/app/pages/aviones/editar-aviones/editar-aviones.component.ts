import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Avion } from 'src/app/models/avion';
import { AvionService } from 'src/app/services/avion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-aviones',
  templateUrl: './editar-aviones.component.html',
  styleUrls: ['./editar-aviones.component.css']
})
export class EditarAvionesComponent implements OnInit {
  avionForm: FormGroup;
  id: string | null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private avionService: AvionService) {
    this.avionForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      tipo: ['', Validators.required],
      base: ['', Validators.required]
     
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.avionService.viewAvion(this.id).subscribe(data => {
        this.avionForm.patchValue(data);
      });
    }
  }

  actualizarAvion() {
    const AVION: Avion = {
      codigo: this.avionForm.get('codigo')?.value,
      tipo: this.avionForm.get('tipo')?.value,
      base: this.avionForm.get('base')?.value,
    
    };
    console.log(AVION);

    Swal.fire({
      title: 'Actualización de Avion',
      text: "¿Desea actualizar el Avion?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.avionService.actualizarAvion(this.id, AVION).subscribe(data => {
            console.log(AVION);
            this.router.navigate(['/listar-aviones']);
          });
        }
      }
    });
  }
}
