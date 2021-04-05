import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O';

  constructor() {}

  ngOnInit(): void {}

  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit(null);
  }
}
