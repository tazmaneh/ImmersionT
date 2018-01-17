import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { ComponentGridComponent } from './component-grid/component-grid.component';
import { ComponentCardsComponent } from './component-cards/component-cards.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ComponentDashboardComponent,
    ComponentGridComponent,
    ComponentCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
