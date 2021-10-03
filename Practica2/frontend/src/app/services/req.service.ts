import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte, ReporteCreate } from '../interface/reporte';
@Injectable({
  providedIn: 'root'
})
export class ReqService {
  server:string = "34.67.66.204"//"34.67.66.204"
  port:string = "5000"
  url:string = `http://${this.server}:${this.port}`
  

  getAll(){
    return this.http.get<any>(this.url+"/getReports");
  }

  create(rep:ReporteCreate){
    console.log(rep)
    return this.http.post(this.url+'/createReport/',rep);
  }

  constructor(private http: HttpClient) { }
}
