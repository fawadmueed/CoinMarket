import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 // import {Http, Response} from "@angular/http";
 import { Observable } from "rxjs/Observable";
 import "rxjs/Rx";


@Injectable()

export class DataApiService {

  constructor(private http: HttpClient) { }

  car = [
	  {
	  	"name": 'BMW',
	  	"type": 'Sedan'
	  },
	  {
	  	"name": 'Altima',
	  	"type": 'Sedan'
	  },
	  {
	  	"name": 'Jeep',
	  	"type": 'SUV'
	  },
	  {
	  	"name": 'Mercedese',
	  	"type": 'Sedan'
	  },

  ]

  myDataFn() {

  		return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
		
	};
  

}
