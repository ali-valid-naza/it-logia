import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalElementComponent } from './components/modal-element/modal-element.component';
import { PopupComponent } from './components/popup/popup.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    ModalElementComponent,
    PopupComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
