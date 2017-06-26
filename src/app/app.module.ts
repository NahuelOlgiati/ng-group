import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ng2-dnd';

import { DragDemoComponent } from './drag-demo/drag-demo.component';
import { DemoDndModule } from './dnd-demo/demo-dnd.module';

import { AppComponent } from './app.component';
import { FiendsCircleComponent } from './fiends-circle/fiends-circle.component';
import { NgFiendsCircleComponent } from './ng-fiends-circle/ng-fiends-circle.component';
import { OngFiendsCircleComponent } from './ong-fiends-circle/ong-fiends-circle.component';

import { TinyCircleComponent } from './tiny-circle/tiny-circle.component';
import { NgTinyCircleComponent } from './ng-tiny-circle/ng-tiny-circle.component';
import { OngTinyCircleComponent } from './ong-tiny-circle/ong-tiny-circle.component';
import { TnComponent } from './tn/tn.component';

import { HexImageComponent } from './hex-image/hex-image.component';

//import { NgvasModule } from 'ngvas';
//import { NgvasDemoComponent } from './ngvas-demo/ngvas-demo.component';

import { GooeyMenuComponent } from './gooey-menu/gooey-menu.component';

import { HubelekeMenuComponent } from './hubeleke-menu/hubeleke-menu.component';

import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,

    FiendsCircleComponent,
    NgFiendsCircleComponent,
    OngFiendsCircleComponent,


    TinyCircleComponent,
    NgTinyCircleComponent,
    OngTinyCircleComponent,
    TnComponent,

    HexImageComponent,

    //NgvasDemoComponent,

    GooeyMenuComponent,

    HubelekeMenuComponent,

    SafePipe,

    DragDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    DndModule.forRoot(),
    DemoDndModule,
    //NgvasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
