import { Component, OnInit,Input } from '@angular/core';
import { Asistencia } from 'src/app/interface/asistencia';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tablecon-attendance',
  templateUrl: './tablecon-attendance.component.html',
  styleUrls: ['./tablecon-attendance.component.scss']
})
export class TableconAttendanceComponent implements OnInit {
  tableHeader:string[]=["#","Carnet","Nombre Estudiante","Nombre Evento","Fecha","Id Evento","Imagen"];

  selectedObj:Asistencia= {
    carnet: "",
    nombreEstudiante: "",
    nombreEvento:"",
    fecha: "",
    idEvento: 0,
    imagen:""
  };

  @Input() tableContent:Asistencia[] = [
  ]
  @Input() aten:String = ""


  condition:boolean =false;
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  modal():void{
    this.condition=true;
  }
  hide():void{
    this.condition=false;
  }


  open(cnt:any,item:any) {
    this.selectedObj = item;
    this.modalService.open(cnt, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
