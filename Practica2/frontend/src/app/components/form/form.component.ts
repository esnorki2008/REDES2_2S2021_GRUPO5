import { Component, OnInit } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { ReporteCreate } from 'src/app/interface/reporte';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private reqs:ReqService) { }
  date_initial = new Date();
  nReporte:ReporteCreate = {
    carnet: "201700340",
    nombre: "nombre 0",
    proyecto:"Proyecto 0",
    fecha: this.date_initial.getDay + "/" + this.date_initial.getMonth().toString() + "/" + + this.date_initial.getFullYear().toString(),
    servidor: "201700343",
    cuerpo:"Cuerpo del proyecti 0 en string"
  }
  

  ngOnInit(): void {
    var date_initial2 = new Date();
    console.log(date_initial2.getUTCMonth())
  }
  createReps():void{
    let date = new Date();

    this.reqs.create(this.nReporte).subscribe((data: any)=>{
      this.nReporte = {
        carnet: "",
        nombre: "",
        proyecto:"",
        fecha:date.getDay().toString() + "/" + date.getMonth().toString() + "/" + + date.getFullYear().toString(),
        servidor:"",
        cuerpo:""
      }
      
    }, err => console.log("err"))
  }
}
