import { Component, Injector } from '@angular/core';
import { TransitDataService } from '../../services/transit-data-service/transit-data.service';
import { Goods, OrderStaff } from '../../types/types';
import { ShownCustomElementService } from '../../services/shown-custom-element-service/shown-custom-element.service';
import { createCustomElement } from '@angular/elements';
import { ModalElementComponent } from '../modal-element/modal-element.component';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {
  constructor(
    private transitDataService: TransitDataService,
    protected injector: Injector,
    public popup: ShownCustomElementService,
  ) {
    const ModalElement = createCustomElement(ModalElementComponent, {injector});
    customElements.define('modal-element', ModalElement);
  }

  goods: Goods[] = [
    {
      id: 0,
      img_src: 'assets/img/gallery/meat-delux.png',
      title: 'Мясная Делюкс',
      alt: 'Meat delux',
      about: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананас'
    },
    {
      id: 1,
      img_src: 'assets/img/gallery/sea-premium.png',
      title: 'Морская Премиум',
      alt: 'Sea premium',
      about: 'Перец, сыр, креветки, кальмары, мидии, лосось'
    },
    {
      id: 2,
      img_src: 'assets/img/gallery/beacon-soseage.png',
      title: 'Бекон и Сосиски',
      alt: 'Beacon & sausage',
      about: 'Бекон, сыр, сосиски, ананас, томатная паста'
    },
    {
      id: 3,
      img_src: 'assets/img/gallery/chicken-delux.png',
      title: 'Куриная Делюкс',
      alt: 'Chicken delux',
      about: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'
    },
    {
      id: 4,
      img_src: 'assets/img/gallery/bbq-premium.png',
      title: 'Барбекю Премиум',
      alt: 'BBQ premium',
      about: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'
    },
    {
      id: 5,
      img_src: 'assets/img/gallery/pepperony-dubl.png',
      title: 'Пепперони Дабл',
      alt: 'Pepperoni dubl',
      about: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'
    },
    {
      id: 6,
      img_src: 'assets/img/gallery/chicken-trio.png',
      title: 'Куриное трио',
      alt: 'Chicken trio',
      about: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы'
    },
    {
      id: 7,
      img_src: 'assets/img/gallery/cheese.png',
      title: 'Сырная',
      alt: 'Cheese',
      about: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'
    },
  ];

  order: OrderStaff = {};

  clearOrderStaff(v: boolean) {
    v ? this.order = {} : null;
  }

  onClick(index: number) {
    this.order[index] ? this.order[index]++ : this.order[index] = 1;
    this.transitDataService.emitData(this.order);
  }
}
