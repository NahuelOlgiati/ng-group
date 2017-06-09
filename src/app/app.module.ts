import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgGroupComponent } from './ng-group/ng-group.component';
import { TinyCircleComponent } from './tiny-circle/tiny-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgGroupComponent,
    TinyCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
