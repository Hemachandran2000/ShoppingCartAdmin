import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MetismenuAngularModule } from '@metismenu/angular';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttphelperService } from './core/helpers/httphelper.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    DataTablesModule,
    MetismenuAngularModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    LayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttphelperService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
