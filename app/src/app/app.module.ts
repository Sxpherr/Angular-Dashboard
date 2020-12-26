import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ServerChartComponent } from './charts/serverChart/serverChart.component'
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'
import { BasicChartComponent } from './charts/basicChart/basicChart.component'
import { hi } from './progressbar/progressbar.component'

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ServerChartComponent,
    DashboardHomeComponent,
    BasicChartComponent,
    hi
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
