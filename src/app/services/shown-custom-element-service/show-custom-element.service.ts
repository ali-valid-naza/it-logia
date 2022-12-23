import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from '../../components/popup/popup.component';
import { ModalElementComponent } from '../../components/modal-element/modal-element.component';

@Injectable({
  providedIn: 'root'
})
export class ShownCustomElementService {

  showAsElementPopup() {
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    document.body.appendChild(popupEl);
  }

  showAsElementModal(src: string, alt: string) {
    const modalEl: NgElement & WithProperties<ModalElementComponent> = document.createElement('modal-element') as any;
    modalEl.addEventListener('closed', () => document.body.removeChild(modalEl));
    modalEl.src = src
    modalEl.alt = alt
    document.body.appendChild(modalEl);
  }
}
