import { Module } from '@nestjs/common';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppController} from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SoapModule.registerAsync({
      clientName: 'CountryInfoService', // Include clientName here
      useFactory: (): SoapModuleOptions => ({
        clientName: 'CountryInfoService',
        uri: 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL', // WSDL URL
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



