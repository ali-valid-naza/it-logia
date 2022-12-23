import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() notifyParentClearDataStaff = new EventEmitter()

  notifyParent(v: boolean) {
    this.notifyParentClearDataStaff.emit(v)
  }
}
