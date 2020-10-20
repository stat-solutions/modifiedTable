import { TableDataService } from './service/tableData.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
