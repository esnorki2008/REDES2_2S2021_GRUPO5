import * as mongoose from 'mongoose';

export const AttendanceSchema = new mongoose.Schema({
  carnet: { type: String, required: true },
  n_estudiante: { type: String, required: true },
  n_evento: { type: String, required: true },
  id_evento: { type: Number, required: true },
  picture: { type: String, required: false }
});

export interface Attendance extends mongoose.Document{
  id: string;
  carnet: string;
  n_estudiante: string;
  n_evento: string;
  id_evento: number;
  picture:string;
}