import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataApiService } from './data-api.service';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './welcome/welcome.component';
import { MarketTableComponent } from './market-table/market-table.component';
import { ContactComponent } from './contact/contact.component'
import { RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketTableComponent,
    WelcomeComponent,
    ContactComponent,
    NotFoundComponentComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path : '' , component : WelcomeComponent 
      },
      { 
        path : 'markets' , component : MarketTableComponent 
      },
      {
         path : 'contact' , component : ContactComponent 
      },
      {
        path : '**' , component : NotFoundComponentComponent 
     }
    ])
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
