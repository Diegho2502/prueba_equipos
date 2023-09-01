import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminEquiposService } from '../../service/admin-equipos.service';




@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {

  agregarEquipo:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AgregarEquipoComponent>,
    public fb: FormBuilder,
    private adminService: AdminEquiposService,
  ) {
    
    
  }
    ngOnInit(): void {
      this.agregarEquipo= this.fb.group({
        nombre:[''],
        estadio:[''],
        sitioWeb:[''],
        nacionalidad:[''],
        fundacion:[''],
        entrenador:[''],
        capacidad:[''],
        valor:[''],

        
      })

    }

    
  enviarFormulario(){
    this.adminService.postAgregarEquipo(this.agregarEquipo.value).subscribe(data => {
      if (data) {
        alert("Agregado con exito")

        window.location.reload()    

      } else {
        alert("Error: No se agrego el equipo")
      }
    })
  }

}
