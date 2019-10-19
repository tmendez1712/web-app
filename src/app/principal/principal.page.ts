import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public nombre: string;
  public direccion: string;
  public telefono: string;

  constructor() { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
    this.direccion = sessionStorage.getItem('direccion');
    this.telefono = sessionStorage.getItem('telefono');
  }

}
