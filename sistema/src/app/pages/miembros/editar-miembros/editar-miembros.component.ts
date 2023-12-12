import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Miembro } from 'src/app/models/miembro';
import { MiembroService } from 'src/app/services/miembro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-miembros',
  templateUrl: './editar-miembros.component.html',
  styleUrls: ['./editar-miembros.component.css']
})
export class EditarMiembrosComponent implements OnInit {
  miembroForm: FormGroup;
  id: string | null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private miembroService: MiembroService) {
    this.miembroForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
     
    });
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.miembroService.viewMiembro(this.id).subscribe(data => {
        this.miembroForm.patchValue(data);
      });
    }
  }

  actualizarMiembro() {
    const MIEMBRO: Miembro = {
      codigo: this.miembroForm.get('codigo')?.value,
      nombre: this.miembroForm.get('nombre')?.value,
    
    };
    console.log(MIEMBRO);

    Swal.fire({
      title: 'Actualización de Avión',
      text: "¿Desea actualizar el avión?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.miembroService.actualizarMiembro(this.id, MIEMBRO).subscribe(data => {
            console.log(MIEMBRO);
            this.router.navigate(['/listar-miembros']);
          });
        }
      }
    });
  }
}
