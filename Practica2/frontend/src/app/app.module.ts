import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FormComponent } from './components/form/form.component';
import { CardsComponent } from './components/cards/cards.component';
import { TableconComponent } from './components/tablecon/tablecon.component';
import { ModalReporComponent } from './components/modal-repor/modal-repor.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportsComponent } from './views/reports/reports.component';
import { AttendanceComponent } from './views/attendance/attendance.component';
import { FormAttendanceComponent } from './components/form-attendance/form-attendance.component';
import { CardsAttendanceComponent } from './components/cards-attendance/cards-attendance.component';
import { TableconAttendanceComponent } from './components/tablecon-attendance/tablecon-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CardsComponent,
    TableconComponent,
    ModalReporComponent,
    ReportsComponent,
    AttendanceComponent,
    FormAttendanceComponent,
    CardsAttendanceComponent,
    TableconAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
