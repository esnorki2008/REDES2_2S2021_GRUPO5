import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { Model } from 'mongoose';
import { Attendance } from './attendance.model';

@Injectable()
export class AttendanceService {

  constructor(private configService: ConfigService, @InjectModel('attendance') private readonly attendanceModel: Model<Attendance>) {}

  async getAttendance(attendance: any) {
    const mongoAttendance = await this.attendanceModel.find();

    let resultAttendance: string = "{\"asistencia\":[";
    for(let i: number = 0; i<mongoAttendance.length; i++){
        if(attendance.id_evento == mongoAttendance[i].id_evento){
            resultAttendance += "{\"carnet\":" + "\"" + mongoAttendance[i].carnet + "\",";
            resultAttendance += "\"n_estudiante\":" + "\"" + mongoAttendance[i].n_estudiante + "\",";
            resultAttendance += "\"n_evento\":" + "\"" + mongoAttendance[i].n_evento + "\",";
            resultAttendance += "\"id_evento\":" + "\"" + mongoAttendance[i].id_evento + "\"},";
        }
    }
    if (resultAttendance[resultAttendance.length-1] == ","){
        resultAttendance = resultAttendance.substring(0, resultAttendance.length-1);
    }
    resultAttendance += "]\n}";

    return resultAttendance;
  }

  async getEvents(event: any){
    const mongoAttendance = await this.attendanceModel.find();

    let resultEvent: string = "{\"eventos\":[";
    let name: string = "";
    let carnet: string = "";
    for(let i: number = 0; i<mongoAttendance.length; i++){
        if(event.carnet == mongoAttendance[i].carnet){
            name = mongoAttendance[i].n_estudiante;
            carnet = mongoAttendance[i].carnet;
            resultEvent += "{\"id_evento\":" + "\"" + mongoAttendance[i].id_evento + "\",";
            resultEvent += "\"n_evento\":" + "\"" + mongoAttendance[i].n_evento + "\"},";
        }
    }
    if (resultEvent[resultEvent.length-1] == ","){
        resultEvent = resultEvent.substring(0, resultEvent.length-1);
    }
    resultEvent += "],\n";
    resultEvent += "\"carnet\": \"" + carnet + "\",\n";
    resultEvent += "\"n_estudiante\": \"" + name + "\"\n}";

    return resultEvent;
  }

  async createAttendance(attendance: any) {
    
    const newAttendance = new this.attendanceModel({
        carnet: attendance.carnet,
        n_estudiante: attendance.n_estudiante,
        n_evento: attendance.n_evento,
        id_evento: attendance.id_evento
    });
    const id_rep = await newAttendance.save();
    /*console.log(report.carnet);
    console.log(report.nombre);
    console.log(report.proyecto);
    console.log(report.cuerpo);*/
    console.log(id_rep);
    return 'Hellouda2';
  }
}