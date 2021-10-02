import { Controller, Get, HttpStatus, Post, Req, Res} from '@nestjs/common';
import { Request } from 'express';
import { Response } from 'express';

import { ReportService } from './report.service';

@Controller()
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
    
  @Get('/getReports')
  async getReports(@Res() res: Response) {
    const result = await this.reportService.getReports();
    return res.status(HttpStatus.OK).send(JSON.parse(result));
  }

  @Post('/createReport')
  async createOne(@Req() req: Request,@Res() res: Response) {
    await this.reportService.createReport(req.body);
    return res.status(HttpStatus.OK).send({answer: "Todo correcto"});
  }
}