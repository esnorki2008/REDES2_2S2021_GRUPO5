import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { Model } from 'mongoose';
import { Report } from './report.model';

@Injectable()
export class ReportService {

  constructor(private configService: ConfigService, @InjectModel('report') private readonly reportModel: Model<Report>) {}

  async getReports() {
    const mongoReports = await this.reportModel.find();
    
    const server_intern = this.configService.get<string>('server_intern');

    let resultReports: string = "{\"reportes\":[";
    for(let i: number = 0; i<mongoReports.length; i++){
      resultReports += "{\"carnet\":" + "\"" + mongoReports[i].carnet + "\",";
      resultReports += "\"nombre\":" + "\"" + mongoReports[i].nombre + "\",";
      resultReports += "\"proyecto\":" + "\"" + mongoReports[i].proyecto + "\",";
      if (i == (mongoReports.length - 1)) {
        resultReports += "\"cuerpo\":" + "\"" + mongoReports[i].cuerpo + "\"}";
      }
      else {
        resultReports += "\"cuerpo\":" + "\"" + mongoReports[i].cuerpo + "\"},";
      }
      
    }
    resultReports += "], \"solicitud\": \"" + server_intern + "\"}";

    return resultReports;
  }

  async createReport(report: any) {
    const newReport = new this.reportModel({
        carnet: report.carnet,
        nombre: report.nombre,
        proyecto: report.proyecto,
        cuerpo: report.cuerpo
    });
    const id_rep = await newReport.save();
    /*console.log(report.carnet);
    console.log(report.nombre);
    console.log(report.proyecto);
    console.log(report.cuerpo);*/
    console.log(id_rep);
    return 'Hellouda2';
  }
}