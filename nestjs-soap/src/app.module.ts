// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapModule } from 'nestjs-soap';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true
    // }),
    SoapModule.register(
      { clientName: 'CountryInfoService', uri: `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL` }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
