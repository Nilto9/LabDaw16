import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Piloto } from 'src/app/models/piloto';
import { PilotoService } from 'src/app/services/piloto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-pilotos',
  templateUrl: './crear-pilotos.component.html',
  styleUrls: ['./crear-pilotos.component.css']
})
export class CrearPilotosComponent implements OnInit {

  pilotoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _pilotoService: PilotoService) {
              this.pilotoForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      hora_vuelo: ['', Validators.required],
   
      // Agrega más campos según sea necesario
    });
  }

  ngOnInit() {
    // Puedes dejar el método ngOnInit() vacío o agregar lógica adicional si es necesario
  }

  agregarPiloto() {
    // Lógica para agregar un vuelo
    const PILOTO: Piloto = {
      codigo: this.pilotoForm.get('codigo')?.value,
      nombre: this.pilotoForm.get('nombre')?.value,
      hora_vuelo: this.pilotoForm.get('hora_vuelo')?.value,
    }

    Swal.fire({
      title: 'Creación de Piloto',
      text: "¿Desea crear el piloto?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._pilotoService.guardarPiloto(PILOTO).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-pilotos'])
        }) 
      }
    })
  }
}
