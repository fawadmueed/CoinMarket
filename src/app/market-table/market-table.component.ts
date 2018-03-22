import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../data-api.service'
import { Subscription } from 'rxjs/Subscription';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.css']
})
export class MarketTableComponent implements OnInit {

	marketData ;
	subscription: Subscription;

  constructor(private myData: DataApiService) {

   }

  ngOnInit() {


  	this.marketData=[];

  	this.marketData = this.myData.myDataFn();
  	// console.log (this.myData.myDataFn());

  	this.subscription = this.myData.myDataFn().subscribe(data => {
      this.marketData=data;
      console.log(this.marketData[0]);
      
      $('#marketTable').DataTable({

      	"data": this.marketData,
      	"columns": [
      		{'data': 'id'},
      		{'data': 'name'},
      		{'data': 'symbol'},
      		{'data': 'rank'},
      		{'data': 'price_usd'}
      	]
      });
  });
 
   var marc={
  		id : "Fawad"
  	}
  	console.log(marc)
  	

  }




	
}
