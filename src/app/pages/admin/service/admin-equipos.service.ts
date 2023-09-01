import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AgregarEquipos } from '../models/admin-equipos.interface';


@Injectable({
    providedIn: 'root'
  })
export class AdminEquiposService{

  private url : string = `${environment.devApiBaseUrl}`
  private local : string = ''
    private static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  postAgregarEquipo(dataEquipo:AgregarEquipos):Observable<AgregarEquipos>{
    let body=dataEquipo;
    console.log(body);
    return this.httpClient.post<AgregarEquipos>(`${this.url}/equipos/crear`,body)
  }
  deleteEliminarEquipo(id:number){
    return this.httpClient.delete(`${this.url}/equipos/eliminar/${id}`)
  }
  putEditarEquipo(id:number,dataEquipo:AgregarEquipos):Observable<AgregarEquipos>{
    let body=dataEquipo;
    return this.httpClient.put<AgregarEquipos>(`${this.url}/equipos/actualizar/${id}`,body)
  }



}