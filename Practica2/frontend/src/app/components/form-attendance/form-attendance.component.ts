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
    idEvento: 0,
    imagen:""
  }
  

  ngOnInit(): void {
    var date_initial2 = new Date();
    console.log(date_initial2.getUTCMonth())
  }
  createAtte():void{
    let date = new Date();
    
    let salida = {
      carnet:this.nReporte.carnet,
      n_estudiante:this.nReporte.nombreEstudiante,
      n_evento:this.nReporte.nombreEvento,
      id_evento:this.nReporte.idEvento
    }

    this.reqs.crearAsistencia(salida).subscribe((data: any)=>{
      this.nReporte = {
        carnet: "",
        nombreEstudiante: "",
        nombreEvento:"",
        idEvento:0,
        imagen:""
      }
      
    }, err => console.log("err"))
  }

}
