import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte, ReporteCreate } from '../interface/reporte';
@Injectable({
  providedIn: 'root'
})
export class ReqService {
  server:string = "api.apiredesg5.tk"//"34.67.66.204"
  port:string = ""
  url:string = `http://${this.server}${this.port}`
  

  getAll(){
    console.log(this.url)

    return this.http.get<any>(this.url+"/getReports");
  }

  create(rep:ReporteCreate){
    console.log(rep)
    return this.http.post(this.url+'/createReport/',rep);
  }


  //
  crearAsistencia(param:any){
    return this.http.post(this.url+'/createAttendance/',param);
  }

  obtnerAsistencia(){
    return this.http.get<any>(this.url+"/getAllAttendance");
  }

  constructor(private http: HttpClient) { }
}
