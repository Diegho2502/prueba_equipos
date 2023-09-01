import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  private usuario : string = `${environment.username}`
  private pass : string = `${environment.password}`

  constructor(
    public fb: FormBuilder,
    private loginService: LoginService

    ) { }


  ngOnInit(): void {
    this.loginForm= this.fb.group({
      username:[''],
      password:[''],

    })
  }

  enviarFormulario(){
      this.loginService.postLogin(this.loginForm.value).subscribe(data => {
      if (data) {
        alert("Inicio con exito")


      } else {
        alert("Error: No se edito el equipo")
      }
    })
  }

  compareCredentials(){
  
    if(this.loginForm.value.username=='' || this.loginForm.value.password==''){
      alert("Escribir usuario o contraseña")
    }else{
    if (this.loginForm.value.username==this.usuario || this.loginForm.value.password==this.pass) {
      alert("iniciando")
      localStorage.setItem("login", "true")
      window.location.replace("/")
    } else {
      alert("usuario o contraseña incorrectos")

    }}

  }
}
