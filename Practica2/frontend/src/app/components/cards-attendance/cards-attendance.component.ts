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
      fecha: "hoy",
      idEvento: 1,
      imagen:"IMG"
    }
  ]

  filtro:string = ""
  solicitudAten:string = ""


  filtrar():void{
    
    let filtrRepo:Asistencia[] = []
    for (let index = 0; index < this.tableContent.length; index++) {
      const element:Asistencia = this.tableContent[index];
      if( element.carnet.toString().includes(this.filtro) || this.filtro == "" ){
        filtrRepo.push(element)
      }
    }
    this.tableContent = filtrRepo;
  }
  
  constructor(private reqs:ReqService) { }

  fetchReps():void{
    /*this.reqs.getAll().subscribe((data: any)=>{
      this.tableContent = data.reportes
      this.solicitudAten = data.solicitud
      this.filtrar()
    }, err => console.log(err))*/
  }

  ngOnInit(): void {
    this.fetchReps();
  }

}
