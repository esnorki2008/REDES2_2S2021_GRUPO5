import { Controller, Get, HttpStatus, Post, Req, Res} from '@nestjs/common';
import { Request } from 'express';
import { Response } from 'express';

import { AttendanceService } from './attendance.service';

@Controller()
export class AttendanceController {
  constructor(private readonly reportService: AttendanceService) {}
    
  @Get('/getAttendance')
  async getAttendance(@Req() req: Request, @Res() res: Response) {
    const result = await this.reportService.getAttendance(req.body);
    console.log(result);
    return res.status(HttpStatus.OK).send(JSON.parse(result));
  }

  @Get('/getAllAttendance')
  async getAllAttendance(@Res() res: Response) {
    const result = await this.reportService.getAllAttendance();
    console.log(result);
    return res.status(HttpStatus.OK).send(JSON.parse(result));
  }

  @Get('/getEvents')
  async getEvents(@Req() req: Request, @Res() res: Response) {
    const result = await this.reportService.getEvents(req.body);
    console.log(result);
    return res.status(HttpStatus.OK).send(JSON.parse(result));
  }

  @Post('/createAttendance')
  async createOne(@Req() req: Request,@Res() res: Response) {
    await this.reportService.createAttendance(req.body);
    return res.status(HttpStatus.OK).send({answer: "Todo correcto"});
  }
}