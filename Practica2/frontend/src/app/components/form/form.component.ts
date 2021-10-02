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
  nReporte:ReporteCreate = {
    carnet: "201700340",
    nombre: "nombre 0",
    proyecto:"Proyecto 0",
    cuerpo:"Cuerpo del proyecti 0 en string"
  }
  

  ngOnInit(): void {
  }
  createReps():void{
    

    this.reqs.create(this.nReporte).subscribe((data: any)=>{
      this.nReporte = {
        carnet: "",
        nombre: "",
        proyecto:"",
        cuerpo:""
      }
      
    }, err => console.log("err"))
  }
}
