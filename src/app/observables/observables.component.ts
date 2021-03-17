import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  public results = [];
  private _url: string = 'https://restcountries.eu/rest/v2/name/';
  public country = new FormControl();
  
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.country.valueChanges
    .pipe(debounceTime(4000))
    .subscribe(country => {
      console.log(country);
      this._http.get(this._url + country)
      .subscribe((data: any) => {
        console.log(data);
        this.results = data;
      });
    });
  }



}
