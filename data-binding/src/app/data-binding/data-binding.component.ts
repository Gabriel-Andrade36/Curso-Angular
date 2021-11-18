import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'github.com/Gabriel-Andrade36';
  cursoAngular: boolean = true;

  urlImagem1: String = 'http://lorempixel.com.br/500/420/?1';
  urlImagem2: String = 'http://lorempixel.com.br/500/420/?2';
  urlImagem3: String = 'http://lorempixel.com.br/500/420/?3';

  constructor() {}

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  ngOnInit(): void {}
}
