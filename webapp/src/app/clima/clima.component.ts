import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  private search:string;
  private info: {};

  constructor() { }

  ngOnInit() {

  }

  actionSearch() {
     console.log(this.search);
     this.info = {teste:'oi'};
  }

}
