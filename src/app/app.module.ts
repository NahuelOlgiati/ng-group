import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { CircleViewComponent } from './circle-view/circle-view.component';
import { TinyCircleSliderComponent } from './tiny-circle-slider/tiny-circle-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleViewComponent,
    TinyCircleSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
