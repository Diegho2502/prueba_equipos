import { Component,OnInit } from '@angular/core';
import { EquiposService } from '../../service/Equipos.Service';
import { Equipos } from '../../models/equipos.interface';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  rangofechas:FormGroup;
  dataEquipos?:Equipos[];
  equiposMostrados?: number;
  totalEquipos?: number;
  ver:number = 50;

  constructor(
    private equipoService:EquiposService,
    public fb: FormBuilder,

  ){}


  ngOnInit(): void {
    this.rangofechas= this.fb.group({
      inicial:[''],
      final:['']
    })


    this.equipoService.getAllListas(this.ver).subscribe(data => {
      let listas = data.content;
      this.equiposMostrados=data.size
      this.totalEquipos=data.totalElements;
      this.dataEquipos=listas
    })
  }

  verMasBtn(){
    this.ver=this.ver+25    
    this.equipoService.getAllListas(this.ver).subscribe(data => {
      let listas = data.content;
      this.equiposMostrados=data.size
      this.totalEquipos=data.totalElements;
      this.dataEquipos=listas
    })
  }

  verMenosBtn(){
    this.ver=this.ver-25    
    this.equipoService.getAllListas(this.ver).subscribe(data => {
      let listas = data.content;
      this.equiposMostrados=data.size
      this.totalEquipos=data.totalElements;
      this.dataEquipos=listas
    })
  }
  volverBtn(){
    this.ver=50   
    this.equipoService.getAllListas(this.ver).subscribe(data => {
      let listas = data.content;
      this.equiposMostrados=data.size
      this.totalEquipos=data.totalElements;
      this.dataEquipos=listas
    })
  }

/*   filtarPorFecha(){
    let fechas=this.rangofechas.value;
    let fechaInicial=fechas.inicial;
    let fechaFinal=fechas.final;

    let fechaInicialReformato= new Date(fechaInicial);
    let añoFInicial=fechaInicialReformato.getFullYear();
    let fechaFinalReformato= new Date(fechaFinal);
    let añoFinal=fechaFinalReformato.getFullYear();
    this.equipoService.getFechas(añoFInicial,fechaFinal).subscribe(data => {
      console.log(data);
      
      let listas = data;
      this.dataEquipos?:listas;
    })

  } */

}
