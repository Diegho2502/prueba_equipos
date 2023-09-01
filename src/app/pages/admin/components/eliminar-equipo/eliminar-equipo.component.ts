import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminEquiposService } from '../../service/admin-equipos.service';

@Component({
  selector: 'app-eliminar-equipo',
  templateUrl: './eliminar-equipo.component.html',
  styleUrls: ['./eliminar-equipo.component.css']
})
export class EliminarEquipoComponent implements OnInit  {
  
  constructor(
    private adminService: AdminEquiposService,
    public dialogRef: MatDialogRef<EliminarEquipoComponent>,
    @Inject(MAT_DIALOG_DATA) public dataEquipo: any,

  ){
    console.log(dataEquipo);
    
  }  
  ngOnInit(): void {

  }
  eliminarEquipo(){
    this.adminService.deleteEliminarEquipo(this.dataEquipo.id).subscribe(data => {
      console.log(data);
      if (!data) {
        alert("Eliminado con exito")

        window.location.reload()    

      } else {
        alert("Error: No se eliminar el equipo")
      }
    })
  }
}
