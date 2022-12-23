import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Order } from '../../types/types';
import { TransitDataService } from '../../services/transit-data-service/transit-data.service';
import { ShownCustomElementService } from '../../services/shown-custom-element-service/shown-custom-element.service';
import { PopupComponent } from '../popup/popup.component';
import { createCustomElement } from '@angular/elements';
import { SendToServerService } from '../../services/send-to-server-service/send-to-server.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  constructor(
    private fb: FormBuilder,
    private transitDataService: TransitDataService,
    private sendToServerService: SendToServerService,
    protected injector: Injector,
    public popup: ShownCustomElementService,
  ) {
    const PopupElement = createCustomElement(PopupComponent, {injector});
    customElements.define('popup-element', PopupElement);
  }

  @Output() clearOrderStaff: EventEmitter<boolean> = new EventEmitter<boolean>();

  order: Order = {} as Order;
  orderForm: FormGroup = this.fb.group({
    name: [null, Validators.required,],
    address: [null, Validators.required],
    phone: [null, Validators.required]
  });



  emitEvent() {
    this.clearOrderStaff.emit(true);
  }

  onSubmit() {
    this.transitDataService.subscriber$
      .subscribe(v => {
        this.order.orderStaff = v;
        this.order.orderClient = this.orderForm.value;
        this.clearOrderStaff.emit(true);
        this.sendToServerService.addOrder(this.order)
      }).unsubscribe();
    this.orderForm.reset({
      name: null,
      address: null,
      phone: null,
    });
    this.popup.showAsElementPopup();
  }

  onInput(e: any) {
    e.target.value === '.' ? e.target.value = null : null;
  }
}
