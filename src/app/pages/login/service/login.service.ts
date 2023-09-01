import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FormularioLogin, LoginResponse } from '../models/loginForm.interface';


@Injectable({
    providedIn: 'root'
  })
export class LoginService{

  private url : string = `${environment.devApiBaseUrl}`
  private local : string = ''
    private static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  postLogin(loginForm:FormularioLogin):Observable<LoginResponse>{
    let body=loginForm;
    console.log(body);
    console.log("response: ");
    let response=this.httpClient.post<LoginResponse>(`${this.url}/login`,body);

    console.log(response.subscribe(response =>{
        response;
    }));
    
    return response
  }


}