import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('soap')
export class AppController {
  constructor(private readonly soapService: AppService) {}

  @Get('continents')
  async getListOfContinentsByName() {
    const result = await this.soapService.getListOfContinentsByName();
    return result;
  }
}