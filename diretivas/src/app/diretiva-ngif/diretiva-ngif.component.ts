import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
})
export class DiretivaNgifComponent implements OnInit {
  courseList: any = ['sas'];
  mostrarCursos: boolean = false;
  esconderLista: boolean = false;
  constructor() {}

  buttonMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
  buttonEsconderMostrar() {
    this.esconderLista = !this.esconderLista;
  }
  ngOnInit(): void {}
}
