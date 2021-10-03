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
    carnet: "",
    nombre: "",
    proyecto:"",
    fecha: this.date_initial.getDate() + "/" + (this.date_initial.getUTCMonth() + 1).toString() + "/" + this.date_initial.getFullYear().toString(),
    servidor: "",
    cuerpo:""
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
        fecha:date.getDate() + "/" + (date.getUTCMonth() + 1).toString() + "/" + date.getFullYear().toString(),
        servidor:"",
        cuerpo:""
      }
      
    }, err => console.log("err"))
  }
}
