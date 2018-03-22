import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataApiService } from './data-api.service';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MarketTableComponent } from './market-table/market-table.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketTableComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
