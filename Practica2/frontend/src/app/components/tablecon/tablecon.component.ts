import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tablecon',
  templateUrl: './tablecon.component.html',
  styleUrls: ['./tablecon.component.scss']
})
export class TableconComponent implements OnInit {
  tableHeader:string[]=["#","Carnet","Nombre","Proyecto","Fecha","Servidor"];
  tableContent:any[] = [{carnet:"Mark",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se"}]
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
