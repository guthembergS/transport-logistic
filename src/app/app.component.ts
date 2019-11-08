import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Transportadora } from './transportadora';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-httpclient';

  transportadora: Transportadora[] = [];
  
  headers: any;
  spresp: any;
  postdata: Transportadora;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getTransportadoras();
  }


  // getTransportadoras() {
  //   this.api.getTransportadoras()
  //   .subscribe(resp => {
  //     console.log(resp);
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map((key: any) =>
  //       `${key}: ${resp.headers.get(key)}`);

  //     for (const data of resp.body) {
  //       this.transportadora.push(data);
  //     }
  //     console.log(this.transportadora);
  //   });
  // }

  getTransportadoras() {
    this.api.getTransportadoras()
      .subscribe(data => {
        console.log(data);
      });
  }

  getTransportadoraById(idTransportadora: any) {
    this.api.getTransportadoraById(idTransportadora)
      .subscribe(data => {
        console.log(data);
      });
  }

  addTransportadora() {
    this.api
      .saveTransportadora(this.postdata)
      .subscribe(resp => {
        return this.spresp.push(resp);
      });
  }

  updateTransportadora(idTransportadora: any) {
    this.api
      .updateTransportadora(idTransportadora, this.postdata)
      .subscribe(resp => {
        return this.spresp.push(resp);
      });
  }

  deleteTransportadora(idTransportadora: any) {
    this.api
      .deleteTransportadora(idTransportadora)
      .subscribe(resp => {
        return this.spresp.push(resp);
      });
  }
}