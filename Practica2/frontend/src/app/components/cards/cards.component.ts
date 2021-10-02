import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/interface/reporte';
import { ReqService } from 'src/app/services/req.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  tableContent:Reporte[] = [
    {carnet:"Mark1",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se",cuerpo:""},
    {carnet:"Mark2",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se",cuerpo:""},
    {carnet:"Mark3",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se",cuerpo:""},
    {carnet:"Mark4",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se",cuerpo:""},
    {carnet:"Mark4",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se",cuerpo:""}
  ]

  filtro:string = ""
  solicitudAten:string = ""


  filtrar():void{
    
    let filtrRepo:Reporte[] = []
    for (let index = 0; index < this.tableContent.length; index++) {
      const element:Reporte = this.tableContent[index];
      if( element.carnet.toString().includes(this.filtro) || this.filtro == "" ){
        filtrRepo.push(element)
      }
    }
    console.log()
    this.tableContent = filtrRepo;
  }
  
  constructor(private reqs:ReqService) { }

  fetchReps():void{
    this.reqs.getAll().subscribe((data: any)=>{
      this.tableContent = data.reportes
      this.solicitudAten = data.solicitud
      this.filtrar()
    }, err => console.log(err))
  }

  ngOnInit(): void {
    this.fetchReps();
  }

}
