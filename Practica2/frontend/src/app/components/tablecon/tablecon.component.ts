import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablecon',
  templateUrl: './tablecon.component.html',
  styleUrls: ['./tablecon.component.scss']
})
export class TableconComponent implements OnInit {
  tableHeader:string[]=["#","Carnet","Nombre","Proyecto","Fecha","Servidor"];
  content:any[] = [{carnet:"Mark",nombre:"Otto",proyecto:"@mdo",fecha:"hoy",servidor:"no se"}]
  condition:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  modal():void{
    this.condition=true;
  }
  hide():void{
    this.condition=false;
  }
}
