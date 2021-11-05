import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/interface/asistencia';
import { ReqService } from 'src/app/services/req.service';


@Component({
  selector: 'app-cards-attendance',
  templateUrl: './cards-attendance.component.html',
  styleUrls: ['./cards-attendance.component.scss']
})
export class CardsAttendanceComponent implements OnInit {

  tableContent:Asistencia[] = [
    {
      carnet: "202100123",
      nombreEstudiante: "Hola",
      nombreEvento:"Evento unico",
      idEvento: 1,
      imagen:"IMG"
    }
  ]

  filtroId:string = ""
  filtroCarnet:string = ""

  solicitudAten:string = ""


  filtrar():void{
    let filtrRepo:Asistencia[] = []
    for (let index = 0; index < this.tableContent.length; index++) {
      const element:Asistencia = this.tableContent[index];
      if( element.carnet.toString().includes(this.filtroCarnet) || this.filtroCarnet == "" ){
        filtrRepo.push(element)
      }
    }
    this.tableContent = filtrRepo;
  }
  
  filtrar2():void{
    let filtrRepo:Asistencia[] = []
    for (let index = 0; index < this.tableContent.length; index++) {
      const element:Asistencia = this.tableContent[index];
      if( element.idEvento.toString().includes(this.filtroId) || this.filtroId == "" ){
        filtrRepo.push(element)
      }
    }
    this.tableContent = filtrRepo;
  }

  constructor(private reqs:ReqService) { }

  fetchReps(input:number):void{
    this.reqs.getAll().subscribe((data: any)=>{
      this.solicitudAten = data.solicitud
    }, err => console.log(err))
    this.reqs.obtnerAsistencia().subscribe((data: any)=>{
      let asis:[] = data.asistencia;
      asis.map((item:any)=>{
        item.nombreEstudiante = item.n_estudiante
        item.nombreEvento = item.n_evento
        item.idEvento = item.id_evento
      })
      this.tableContent = data.asistencia
      if(input==1)
        this.filtrar2()
      if(input==2)
        this.filtrar()
    }, err => console.log(err))

  }

  ngOnInit(): void {
    this.fetchReps(3);
  }

}
