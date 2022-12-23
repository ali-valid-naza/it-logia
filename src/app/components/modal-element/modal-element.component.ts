import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-modal-element',
  templateUrl: './modal-element.component.html',
  styleUrls: ['./modal-element.component.scss']
})
export class ModalElementComponent {

  @Input()
  get src(): string { return this._src; }
  set src(src: string) {
    this._src = src;
  }

  get alt(): string { return this._alt; }
  set alt(alt: string) {
    this._alt = alt;
  }
  private _src = '';
  private _alt = '';

  @Output()
  closed = new EventEmitter<void>();
}
