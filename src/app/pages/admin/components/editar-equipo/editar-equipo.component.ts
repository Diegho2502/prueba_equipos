import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AdminEquiposService } from '../../service/admin-equipos.service';
@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit  {
  
  editarEquipo:FormGroup;

  constructor(
    private adminService: AdminEquiposService,
    public dialogRef: MatDialogRef<EditarEquipoComponent>,
    @Inject(MAT_DIALOG_DATA) public dataEquipo: any,
    public fb: FormBuilder,


  ){    
  }  
  ngOnInit(): void {
    this.editarEquipo= this.fb.group({
      nombre:[this.dataEquipo.nombre],
      estadio:[this.dataEquipo.estadio],
      sitioWeb:[this.dataEquipo.sitioWeb],
      nacionalidad:[this.dataEquipo.nacionalidad],
      fundacion:[this.dataEquipo.fundacion],
      entrenador:[this.dataEquipo.entrenador],
      capacidad:[this.dataEquipo.capacidad],
      valor:[this.dataEquipo.valor],     
    })
  }

  enviarFormulario(){
    this.adminService.putEditarEquipo(this.dataEquipo.id,this.editarEquipo.value).subscribe(data => {
      if (data) {
        alert("Editado con exito")

        window.location.reload()    

      } else {
        alert("Error: No se edito el equipo")
      }
    })
  }

}
