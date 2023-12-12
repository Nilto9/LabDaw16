import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Miembro } from 'src/app/models/miembro';
import { MiembroService } from 'src/app/services/miembro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-miembros',
  templateUrl: './crear-miembros.component.html',
  styleUrls: ['./crear-miembros.component.css']
})
export class CrearMiembrosComponent implements OnInit {
  miembroForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private miembroService: MiembroService) {
    this.miembroForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      // Agrega aquí los demás campos del formulario si los tienes
    });
  }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  agregarMiembro() {
    const miembro: Miembro = {
      codigo: this.miembroForm.get('codigo')?.value,
      nombre: this.miembroForm.get('nombre')?.value,
      // Asigna aquí los demás campos del objeto Miembro si los tienes
    };

    Swal.fire({
      title: 'Creación de Miembro',
      text: '¿Desea crear el miembro?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miembroService.guardarMiembro(miembro).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-miembros']);
        });
      }
    });
  }
}