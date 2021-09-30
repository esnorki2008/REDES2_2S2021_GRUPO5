import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FormComponent } from './components/form/form.component';
import { CardsComponent } from './components/cards/cards.component';
import { TableconComponent } from './components/tablecon/tablecon.component';
import { ModalReporComponent } from './components/modal-repor/modal-repor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CardsComponent,
    TableconComponent,
    ModalReporComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
