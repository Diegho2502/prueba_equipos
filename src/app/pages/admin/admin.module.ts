import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EquiposComponent } from './components/equipos/equipos.component';
import { AgregarEquipoComponent } from './components/agregar-equipo/agregar-equipo.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { EliminarEquipoComponent } from './components/eliminar-equipo/eliminar-equipo.component';

@NgModule({
  declarations: [
    EquiposComponent,
    AgregarEquipoComponent,
    EditarEquipoComponent,
    EliminarEquipoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule
  ]
})
export class AdminModule { }
