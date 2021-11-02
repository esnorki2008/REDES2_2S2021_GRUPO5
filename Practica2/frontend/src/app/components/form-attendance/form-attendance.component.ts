import { Component, OnInit } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { Asistencia } from 'src/app/interface/asistencia';

@Component({
  selector: 'app-form-attendance',
  templateUrl: './form-attendance.component.html',
  styleUrls: ['./form-attendance.component.scss']
})
export class FormAttendanceComponent implements OnInit {

  constructor(private reqs:ReqService) { }
  date_initial = new Date();
  nReporte:Asistencia = {
    carnet: "",
    nombreEstudiante: "",
    nombreEvento:"",
    fecha: this.date_initial.getDate() + "/" + (this.date_initial.getUTCMonth() + 1).toString() + "/" + this.date_initial.getFullYear().toString(),
    idEvento: 0,
    imagen:""
  }
  

  ngOnInit(): void {
    var date_initial2 = new Date();
    console.log(date_initial2.getUTCMonth())
  }
  createAtte():void{
    let date = new Date();
    /*
    this.reqs.create(this.nReporte).subscribe((data: any)=>{
      this.nReporte = {
        carnet: "",
        nombre: "",
        proyecto:"",
        fecha:date.getDate() + "/" + (date.getUTCMonth() + 1).toString() + "/" + date.getFullYear().toString(),
        servidor:"",
        cuerpo:""
      }
      
    }, err => console.log("err"))*/
  }

}
