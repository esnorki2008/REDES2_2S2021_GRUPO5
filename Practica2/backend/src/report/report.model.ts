import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
  carnet: { type: String, required: true },
  nombre: { type: String, required: true },
  proyecto: { type: String, required: true },
  cuerpo: { type: String, required: true },
});

export interface Report extends mongoose.Document{
  id: string;
  carnet: string;
  nombre: string;
  proyecto: string;
  cuerpo: string;
}