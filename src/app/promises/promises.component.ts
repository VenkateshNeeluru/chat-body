import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
  public results = [];
  private _url: string = 'https://restcountries.eu/rest/v2/name/';


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }


  search(country: any) {
    console.log(country);
    this._http.get(this._url + country)
    .toPromise().then((data: any) => {
      console.log(data);
      this.results = data;
    });
  }

}
