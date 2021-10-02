import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from "./report/report.module";
import configuration from './config/configuration';

@Module({
  imports: [ReportModule, ConfigModule.forRoot({load: [configuration],isGlobal: true,}), MongooseModule.forRoot('mongodb+srv://jacevel:carlosveliz97@cluster0.lvzsr.mongodb.net/user?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
