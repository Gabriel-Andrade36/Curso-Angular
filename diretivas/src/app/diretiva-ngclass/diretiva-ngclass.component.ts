import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss'],
})
export class DiretivaNgclassComponent implements OnInit {
  favoritado: boolean = false;
  constructor() {}

  onClick() {
    this.favoritado = !this.favoritado;
  }
  ngOnInit(): void {}
}
