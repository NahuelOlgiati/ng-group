import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FiendsCircleComponent } from './fiends-circle/fiends-circle.component';
import { TinyCircleComponent } from './tiny-circle/tiny-circle.component';
import { NgTinyCircleComponent } from './ng-tiny-circle/ng-tiny-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    FiendsCircleComponent,
    TinyCircleComponent,
    NgTinyCircleComponent
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
