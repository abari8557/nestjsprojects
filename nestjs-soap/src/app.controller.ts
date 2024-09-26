import { Controller, Get, Inject } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(
    @Inject('CountryInfoService') private readonly soapClient: Client,
  ) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('soap')
  soap() {
    return new Promise((resolve, reject) => {
      this.soapClient.ListOfContinentsByName(null, (err, res) => {
        if (res) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  }
}
