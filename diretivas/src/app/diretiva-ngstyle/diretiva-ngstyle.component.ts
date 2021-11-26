import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss'],
})
export class DiretivaNgstyleComponent implements OnInit {
  ativo: boolean = false;
  tamanho: number = 14;
  constructor() {}

  mudar() {
    this.ativo = !this.ativo;
  }

  ngOnInit(): void {}
}
