import { Component, OnInit,Input } from '@angular/core';
import { Reporte } from 'src/app/interface/reporte';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tablecon',
  templateUrl: './tablecon.component.html',
  styleUrls: ['./tablecon.component.scss']
})
export class TableconComponent implements OnInit {
  tableHeader:string[]=["#","Carnet","Nombre","Proyecto","Fecha","Servidor"];

  selectedObj:any= {carnet:"",nombre:"",proyecto:"",fecha:"",servidor:""};

  @Input() tableContent:Reporte[] = [
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
