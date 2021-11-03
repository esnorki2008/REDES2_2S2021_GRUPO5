import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { AttendanceController } from "./attendance.controller";
import { AttendanceService } from "./attendance.service";
import { AttendanceSchema } from "./attendance.model";

@Module({
    imports: [MongooseModule.forFeature([{name: 'attendance', schema: AttendanceSchema}])],
    controllers: [AttendanceController],
    providers: [AttendanceService],
})
export class AttendanceModule {}