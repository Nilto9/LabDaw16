import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Avion } from 'src/app/models/avion';
import { AvionService } from 'src/app/services/avion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-aviones',
  templateUrl: './crear-aviones.component.html',
  styleUrls: ['./crear-aviones.component.css']
})
export class CrearAvionesComponent implements OnInit {

  avionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _avionService: AvionService) {
    this.avionForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      codigo: ['', Validators.required],
      tipo: ['', Validators.required],
      base: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  agregarAvion() {
    const AVION: Avion = {
      codigo: this.avionForm.get('codigo')?.value,
      tipo: this.avionForm.get('tipo')?.value,
      base: this.avionForm.get('base')?.value,
    }

    Swal.fire({
      title: 'Creacion de Avión',
      text: "¿Desea crear el avión?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._avionService.guardarAvion(AVION).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-aviones'])
        }) 
      }
    })
  }
}
