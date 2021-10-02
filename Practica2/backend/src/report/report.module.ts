import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";
import { ReportSchema } from "./report.model";

@Module({
    imports: [MongooseModule.forFeature([{name: 'report', schema: ReportSchema}])],
    controllers: [ReportController],
    providers: [ReportService],
})
export class ReportModule {}