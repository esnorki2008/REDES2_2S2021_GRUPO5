import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from "./report/report.module";
import { AttendanceModule } from './attendance/attendance.module';
import configuration from './config/configuration';

@Module({
  imports: [ReportModule, AttendanceModule, ConfigModule.forRoot({load: [configuration],isGlobal: true,}), MongooseModule.forRoot(`mongodb://${process.env.DB || "localhost"}:27017/user?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
