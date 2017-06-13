import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula';

import { DragDemoComponent } from './drag-demo/drag-demo.component';

import { AppComponent } from './app.component';
import { FiendsCircleComponent } from './fiends-circle/fiends-circle.component';

import { TinyCircleComponent } from './tiny-circle/tiny-circle.component';
import { NgTinyCircleComponent } from './ng-tiny-circle/ng-tiny-circle.component';
import { OngTinyCircleComponent } from './ong-tiny-circle/ong-tiny-circle.component';
import { TnComponent } from './tn/tn.component';

@NgModule({
  declarations: [
    AppComponent,

    FiendsCircleComponent,

    TinyCircleComponent,
    NgTinyCircleComponent,
    OngTinyCircleComponent,
    TnComponent,
    DragDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
