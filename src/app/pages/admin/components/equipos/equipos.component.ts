import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Equipos } from 'src/app/pages/inicio/models/equipos.interface';
import { EquiposService } from 'src/app/pages/inicio/service/Equipos.Service';
import { MatDialog } from '@angular/material/dialog';
import { AgregarEquipoComponent } from '../agregar-equipo/agregar-equipo.component';
import { EliminarEquipoComponent } from '../eliminar-equipo/eliminar-equipo.component';
import { EditarEquipoComponent } from '../editar-equipo/editar-equipo.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  startDate: Date;
  endDate: Date;
  constructor(
    private equipoService:EquiposService,
    public dialog: MatDialog
  ){

  }


  displayedColumns: string[] = ['id', 'nombre', 'estadio', 'nacionalidad','fundacion','entrenador','opciones'];
  dataSource = new MatTableDataSource<Equipos>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {

    this.equipoService.getAllListas(1000).subscribe(data => {
      let listas = data.content;

      this.dataSource.data=listas
    })

  }

  filtrar(event: Event){
    const filtro= (event.target as HTMLInputElement).value;
    this.dataSource.filter= filtro;
  }


  abrirModalAgregar() {
    const dialogRef = this.dialog.open(AgregarEquipoComponent, {
      width: '900px',
      maxHeight: '1300px',
      panelClass: 'custom-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  abrirModalEliminar(dataEquipo:Equipos) {
    const dialogRef = this.dialog.open(EliminarEquipoComponent, {
      data:dataEquipo,
      width: '900px',
      maxHeight: '1300px',
      panelClass: 'custom-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  abrirModalEditar(dataEquipo:Equipos) {
    const dialogRef = this.dialog.open(EditarEquipoComponent, {
      data:dataEquipo,
      width: '900px',
      maxHeight: '1300px',
      panelClass: 'custom-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  buscarRango() {
    if (this.startDate && this.endDate) {
      this.buscarFechas(this.formatoFecha(this.startDate),this.formatoFecha(this.endDate))
    }
  }

  formatoFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
  }
   buscarFechas(inicial:string, final:string){
      this.equipoService.getFechas(inicial,final).subscribe(data => {
        let listas = data;

        this.dataSource.data=listas
      })
   }
}
