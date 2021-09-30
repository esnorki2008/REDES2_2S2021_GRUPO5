import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../interface/reporte';
@Injectable({
  providedIn: 'root'
})
export class ReqService {
  server:string = ""
  port:string = ""
  url:string = `http://${this.server}:${this.port}`
  

  getAll(){
    return this.http.get<Reporte[]>(this.url);
  }

  create(rep:Reporte){
    return this.http.post(this.url,rep);
  }

  constructor(private http: HttpClient) { }
}
