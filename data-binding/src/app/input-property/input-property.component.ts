import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
})
export class InputPropertyComponent implements OnInit {
  constructor() {}

  @Input('nome') nomeCurso: string = '';
  ngOnInit(): void {}
}
