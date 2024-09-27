import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class AppService {
  constructor(@Inject('CountryInfoService') private readonly soapClient: Client) {}

  async getListOfContinentsByName(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.soapClient.ListOfContinentsByName({}, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

