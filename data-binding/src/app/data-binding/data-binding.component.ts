import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.scss'],
  styles: [
    `
      .highlight {
        background-color: pink;
        font-weight: bold;
      }
    `,
  ],
})
export class DataBindingComponent implements OnInit {
  url: string = 'github.com/Gabriel-Andrade36';
  cursoAngular: boolean = true;
  pressedKeys: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;

  urlImagem1: String = 'http://lorempixel.com.br/500/420/?1';
  urlImagem2: String = 'http://lorempixel.com.br/500/420/?2';
  urlImagem3: String = 'http://lorempixel.com.br/500/420/?3';

  constructor() {}

  buttonOnClick() {
    alert('Button works');
  }

  onKeyPress(evento: KeyboardEvent) {
    console.log(evento.key);
    this.pressedKeys = (<HTMLInputElement>evento.target).value;
  }

  saveValue(valor: string) {
    this.savedValue = valor;
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  eventMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {}
}
