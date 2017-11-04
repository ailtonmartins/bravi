import { Component, OnInit } from '@angular/core';
import {ClimaService} from "../services/clima.service";

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  providers: [ClimaService]
})
export class ClimaComponent implements OnInit {

  private code:string;
  private city:string;
  public  info:any;
  public  error:boolean = false;

  constructor( public service:ClimaService ) { }

  ngOnInit() {

  }

  actionSearch() {
    this.service.getWeather(this.code , this.city).subscribe(
                                                               (response) => {
                                                                 let data = response.json();
                                                                 this.error = false;
                                                                 this.info = data;
                                                                 this.city = "";
                                                                 this.code = "";
                                                               },
                                                               (erro) => {
                                                                   this.error = true;
                                                                   this.info = false;
                                                               }
                                                             );
  }
}
