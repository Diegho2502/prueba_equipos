import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Equipos, ResponseEquipos } from '../models/equipos.interface';


@Injectable({
    providedIn: 'root'
  })
export class EquiposService{

  private url : string = `${environment.devApiBaseUrl}`
  private local : string = ''
    private static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllListas(total:number):Observable<ResponseEquipos>{
    return this.httpClient.get<ResponseEquipos>(`${this.url}/equipos/listar/0/${total}`)
  }

  getFechas(fechaInicial:string, fechaFinal:string):Observable<[Equipos]>{
  return this.httpClient.get<[Equipos]>(`${this.url}/equipos/consultar/${fechaInicial}/${fechaFinal}/`)
  }


}
