import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  login:boolean;
  constructor(){}

  ngOnInit(): void {
    this.getLogin();
  }

  getLogin(){
    let dato = localStorage.getItem('login');
    if (dato=="true") {
      this.login= true;
    } else {
      this.login= false;
    }  
  }

  eliminarLogin(){
    localStorage.setItem('login', 'false');
  }

}
