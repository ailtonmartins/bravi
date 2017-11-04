import { Injectable } from '@angular/core';
import { appConfig } from "../../environments/environment.prod";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ClimaService {

  constructor(public http: Http) {  }

  getWeather ( city, code ) {
    return this.http.get(appConfig.apiUrlWeather + 'forecast?q=' + city + ',' + code + '&APPID=' + appConfig.apiKeyWeather);
  }

}
