webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<fiends-circle></fiends-circle>-->\n<!--<ng-fiends-circle></ng-fiends-circle>-->\n<ong-fiends-circle></ong-fiends-circle>\n\n<!--<tiny-circle></tiny-circle>-->\n<!--<ng-tiny-circle></ng-tiny-circle>-->\n<!--<ong-tiny-circle></ong-tiny-circle>-->\n<!--<tn></tn>-->\n\n<!--<drag-demo></drag-demo>-->\n\n<!--\n<zone-dnd></zone-dnd>\n<shoping-basket-dnd></shoping-basket-dnd>\n-->\n\n<!--<ngvas-demo></ngvas-demo>-->\n\n<hex-image [width]=\"500\"  [src]=\"'https://scontent.fsst1-2.fna.fbcdn.net/v/t31.0-8/18766463_10154509182312256_251697079675071171_o.jpg?oh=3f01a73e9ea67c6572527496afaf89bc&oe=59E18DF4'\"></hex-image>\n\n<gooey-menu></gooey-menu>\n\n\n<hubeleke-menu></hubeleke-menu>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ng works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drag_demo_drag_demo_component__ = __webpack_require__("../../../../../src/app/drag-demo/drag-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dnd_demo_demo_dnd_module__ = __webpack_require__("../../../../../src/app/dnd-demo/demo-dnd.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fiends_circle_fiends_circle_component__ = __webpack_require__("../../../../../src/app/fiends-circle/fiends-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_fiends_circle_ng_fiends_circle_component__ = __webpack_require__("../../../../../src/app/ng-fiends-circle/ng-fiends-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ong_fiends_circle_ong_fiends_circle_component__ = __webpack_require__("../../../../../src/app/ong-fiends-circle/ong-fiends-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tiny_circle_tiny_circle_component__ = __webpack_require__("../../../../../src/app/tiny-circle/tiny-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_tiny_circle_ng_tiny_circle_component__ = __webpack_require__("../../../../../src/app/ng-tiny-circle/ng-tiny-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ong_tiny_circle_ong_tiny_circle_component__ = __webpack_require__("../../../../../src/app/ong-tiny-circle/ong-tiny-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tn_tn_component__ = __webpack_require__("../../../../../src/app/tn/tn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hex_image_hex_image_component__ = __webpack_require__("../../../../../src/app/hex-image/hex-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gooey_menu_gooey_menu_component__ = __webpack_require__("../../../../../src/app/gooey-menu/gooey-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hubeleke_menu_hubeleke_menu_component__ = __webpack_require__("../../../../../src/app/hubeleke-menu/hubeleke-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { NgvasModule } from 'ngvas';
//import { NgvasDemoComponent } from './ngvas-demo/ngvas-demo.component';



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__fiends_circle_fiends_circle_component__["a" /* FiendsCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ng_fiends_circle_ng_fiends_circle_component__["a" /* NgFiendsCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ong_fiends_circle_ong_fiends_circle_component__["a" /* OngFiendsCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tiny_circle_tiny_circle_component__["a" /* TinyCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ng_tiny_circle_ng_tiny_circle_component__["a" /* NgTinyCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ong_tiny_circle_ong_tiny_circle_component__["a" /* OngTinyCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__tn_tn_component__["a" /* TnComponent */],
            __WEBPACK_IMPORTED_MODULE_16__hex_image_hex_image_component__["a" /* HexImageComponent */],
            //NgvasDemoComponent,
            __WEBPACK_IMPORTED_MODULE_17__gooey_menu_gooey_menu_component__["a" /* GooeyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__hubeleke_menu_hubeleke_menu_component__["a" /* HubelekeMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_19__safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_6__drag_demo_drag_demo_component__["a" /* DragDemoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__dnd_demo_demo_dnd_module__["a" /* DemoDndModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/custom-data-dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDataDndComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomDataDndComponent = (function () {
    function CustomDataDndComponent() {
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
    }
    CustomDataDndComponent.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    return CustomDataDndComponent;
}());
CustomDataDndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'custom-data-dnd',
        template: "\n<h4>Transfer custom data in Drag-and-Drop</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"transferData\">\n                    <div class=\"panel-body\">\n                        <div>Drag Me</div>\n                        <div>{{transferData | json}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccess($event)\">\n            <div class=\"panel-heading\">Place to drop (Items:{{receivedData.length}})</div>\n            <div class=\"panel-body\">\n                <div [hidden]=\"!receivedData.length > 0\" *ngFor=\"let data of receivedData\">{{data | json}}</div>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], CustomDataDndComponent);

//# sourceMappingURL=custom-data-dnd.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/custom-function-dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFunctionDndComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomFunctionDndComponent = (function () {
    function CustomFunctionDndComponent() {
        this.box1Integer = 3;
        this.box2Integer = 10;
        this.box1Items = [];
        this.box2Items = [];
    }
    CustomFunctionDndComponent.prototype.allowDropFunction = function (baseInteger) {
        return function (dragData) { return dragData % baseInteger === 0; };
    };
    CustomFunctionDndComponent.prototype.addTobox1Items = function ($event) {
        this.box1Items.push($event.dragData);
    };
    CustomFunctionDndComponent.prototype.addTobox2Items = function ($event) {
        this.box2Items.push($event.dragData);
    };
    return CustomFunctionDndComponent;
}());
CustomFunctionDndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'custom-function-dnd',
        template: "\n<h4>Use a custom function to determine where dropping is allowed</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"6\">\n                    <div class=\"panel-body\">dragData = 6</div>\n                </div>\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"10\">\n                    <div class=\"panel-body\">dragData = 10</div>\n                </div>\n                <div class=\"panel panel-default\" dnd-draggable [dragData]=\"30\">\n                    <div class=\"panel-body\">dragData = 30</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <pre>allowDropFunction(baseInteger: any): any {{ '{' }}\n  return (dragData: any) => dragData % baseInteger === 0;\n{{ '}' }}</pre>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div dnd-droppable class=\"panel panel-info\" [allowDrop]=\"allowDropFunction(box1Integer)\" (onDropSuccess)=\"addTobox1Items($event)\">\n                    <div class=\"panel-heading\">\n                        Multiples of\n                        <input type=\"number\" [(ngModel)]=\"box1Integer\" style=\"width: 4em\">\n                        only\n                    </div>\n                    <div class=\"panel-body\">\n                        <div *ngFor=\"let item of box1Items\">dragData = {{item}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div dnd-droppable class=\"panel panel-warning\" [allowDrop]=\"allowDropFunction(box2Integer)\" (onDropSuccess)=\"addTobox2Items($event)\">\n                    <div class=\"panel-heading\">\n                        Multiples of\n                        <input type=\"number\" [(ngModel)]=\"box2Integer\" style=\"width: 4em\">\n                        only\n                    </div>\n                    <div class=\"panel-body\">\n                        <div *ngFor=\"let item of box2Items\">dragData = {{item}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
    })
], CustomFunctionDndComponent);

//# sourceMappingURL=custom-function-dnd.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/demo-dnd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_dnd_component__ = __webpack_require__("../../../../../src/app/dnd-demo/simple-dnd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zone_dnd_component__ = __webpack_require__("../../../../../src/app/dnd-demo/zone-dnd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_data_dnd_component__ = __webpack_require__("../../../../../src/app/dnd-demo/custom-data-dnd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_function_dnd_component__ = __webpack_require__("../../../../../src/app/dnd-demo/custom-function-dnd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_basket_dnd_component__ = __webpack_require__("../../../../../src/app/dnd-demo/shopping-basket-dnd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__simple_sortable_component__ = __webpack_require__("../../../../../src/app/dnd-demo/simple-sortable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__multi_sortable_component__ = __webpack_require__("../../../../../src/app/dnd-demo/multi-sortable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recycle_multi_sortable_component__ = __webpack_require__("../../../../../src/app/dnd-demo/recycle-multi-sortable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__embedded_sortable_component__ = __webpack_require__("../../../../../src/app/dnd-demo/embedded-sortable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__simple_sortable_copy_component__ = __webpack_require__("../../../../../src/app/dnd-demo/simple-sortable-copy.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoDndModule; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var dndComponents = [__WEBPACK_IMPORTED_MODULE_4__simple_dnd_component__["a" /* SimpleDndComponent */], __WEBPACK_IMPORTED_MODULE_5__zone_dnd_component__["a" /* ZoneDndComponent */], __WEBPACK_IMPORTED_MODULE_6__custom_data_dnd_component__["a" /* CustomDataDndComponent */], __WEBPACK_IMPORTED_MODULE_7__custom_function_dnd_component__["a" /* CustomFunctionDndComponent */], __WEBPACK_IMPORTED_MODULE_8__shopping_basket_dnd_component__["a" /* ShoppingBasketDndComponent */]];
var sortableComponents = [__WEBPACK_IMPORTED_MODULE_9__simple_sortable_component__["a" /* SimpleSortableComponent */], __WEBPACK_IMPORTED_MODULE_10__multi_sortable_component__["a" /* MultiSortableComponent */], __WEBPACK_IMPORTED_MODULE_11__recycle_multi_sortable_component__["a" /* RecycleMultiSortableComponent */], __WEBPACK_IMPORTED_MODULE_12__embedded_sortable_component__["a" /* EmbeddedSortableComponent */], __WEBPACK_IMPORTED_MODULE_13__simple_sortable_copy_component__["a" /* SimpleSortableCopyComponent */]];
var DemoDndModule = (function () {
    function DemoDndModule() {
    }
    return DemoDndModule;
}());
DemoDndModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_dnd__["a" /* DndModule */].forRoot()],
        declarations: dndComponents.concat(sortableComponents),
        exports: dndComponents.concat(sortableComponents)
    })
], DemoDndModule);

//# sourceMappingURL=demo-dnd.module.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/embedded-sortable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbeddedSortableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmbeddedSortableComponent = (function () {
    function EmbeddedSortableComponent() {
        this.dragOperation = false;
        this.containers = [
            new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
            new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
            new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
        ];
        this.widgets = [];
    }
    EmbeddedSortableComponent.prototype.addTo = function ($event) {
        if ($event) {
            this.widgets.push($event.dragData);
        }
    };
    return EmbeddedSortableComponent;
}());
EmbeddedSortableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'embedded-sortable',
        template: "\n<h4>Move items between multi list sortable containers</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        Drag Containers <input type=\"checkbox\" [(ngModel)]=\"dragOperation\"/>\n        <div dnd-sortable-container [sortableData]=\"containers\" [dropZones]=\"['container-dropZone']\">\n            <div class=\"col-sm3\"\n                    *ngFor=\"let container of containers; let i = index\"\n                    dnd-sortable [sortableIndex]=\"i\" [dragEnabled]=\"dragOperation\">\n                <div class=\"panel panel-warning\"\n                    dnd-sortable-container [sortableData]=\"container.widgets\" [dropZones]=\"['widget-dropZone']\">\n                    <div class=\"panel-heading\">\n                        {{container.id}} - {{container.name}}\n                    </div>\n                    <div class=\"panel-body\">\n                        <ul class=\"list-group\">\n                            <li *ngFor=\"let widget of container.widgets; let x = index\" class=\"list-group-item\"\n                                dnd-sortable [sortableIndex]=\"x\" [dragEnabled]=\"!dragOperation\"\n                                [dragData]=\"widget\">{{widget.name}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">Widgets</div>\n            <div class=\"panel-body\" dnd-droppable (onDropSuccess)=\"addTo($event)\" [dropZones]=\"['widget-dropZone']\">\n                <div *ngFor=\"let widget of widgets\" class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{widget.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], EmbeddedSortableComponent);

var Container = (function () {
    function Container(id, name, widgets) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
    }
    return Container;
}());
var Widget = (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());
//# sourceMappingURL=embedded-sortable.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/multi-sortable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSortableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultiSortableComponent = (function () {
    function MultiSortableComponent() {
        this.listBoxers = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
        this.listTeamOne = [];
        this.listTeamTwo = [];
    }
    return MultiSortableComponent;
}());
MultiSortableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'multi-sortable',
        template: "\n<h4>Multi list sortable</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n    <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n        Available boxers\n        </div>\n        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listBoxers\">\n            <ul class=\"list-group\" >\n                <li *ngFor=\"let item of listBoxers; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    </div>\n    <div class=\"col-sm-3\">\n    <div class=\"panel panel-success\">\n        <div class=\"panel-heading\">\n        First Team\n        </div>\n        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamOne\">\n            <ul class=\"list-group\" >\n                <li *ngFor=\"let item of listTeamOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    </div>\n    <div class=\"col-sm-3\">\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n        Second Team\n        </div>\n        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamTwo\">\n            <ul class=\"list-group\">\n                <li *ngFor=\"let item of listTeamTwo; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    </div>\n</div>"
    })
], MultiSortableComponent);

//# sourceMappingURL=multi-sortable.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/recycle-multi-sortable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecycleMultiSortableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecycleMultiSortableComponent = (function () {
    function RecycleMultiSortableComponent() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.listRecycled = [];
    }
    return RecycleMultiSortableComponent;
}());
RecycleMultiSortableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'recycle-multi-sortable',
        template: "\n<h4>Simple sortable With Drop into recycle bin</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                Favorite drinks\n            </div>\n            <div class=\"panel-body\" dnd-sortable-container [sortableData]=\"listOne\" [dropZones]=\"['delete-dropZone']\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\"\n                    dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['delete-dropZone']\" [sortableData]=\"listRecycled\">\n                Recycle bin: Drag into me to delete it<br/>\n            </div>\n        </div>\n        <div *ngIf=\"listRecycled.length\">\n        <b>Recycled:</b> <span>{{listRecycled.toString()}} </span>\n        </div>\n    </div>\n</div>"
    })
], RecycleMultiSortableComponent);

//# sourceMappingURL=recycle-multi-sortable.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/shopping-basket-dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingBasketDndComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingBasketDndComponent = (function () {
    function ShoppingBasketDndComponent() {
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.shoppingBasket2 = [];
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }
    ShoppingBasketDndComponent.prototype.orderedProduct = function ($event) {
        var orderedProduct = $event.dragData;
        orderedProduct.quantity--;
    };
    ShoppingBasketDndComponent.prototype.addToBasket = function ($event) {
        console.log($event);
        var newProduct = $event.dragData;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    ShoppingBasketDndComponent.prototype.addToBasket2 = function ($event) {
        var newProduct = $event.dragData;
        for (var indx in this.shoppingBasket2) {
            var product = this.shoppingBasket2[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket2.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket2.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    ShoppingBasketDndComponent.prototype.totalCost = function () {
        var cost = 0;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    };
    return ShoppingBasketDndComponent;
}());
ShoppingBasketDndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shoping-basket-dnd',
        template: "\n<h4>Drag-and-Drop - Shopping basket</h4>\n<div class=\"row\">\n\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available products</div>\n            <div class=\"panel-body\">\n                <ul>\n                  <li *ngFor=\"let product of availableProducts\" class=\"panel panel-default\"\n                  dnd-draggable [dragEnabled]=\"product.quantity>0\" [dragData]=\"product\" (onDragSuccess)=\"orderedProduct($event)\" [dropZones]=\"['demo1', 'demo2']\">\n                    <div class=\"panel-body\">\n                        <div [hidden]=\"product.quantity===0\">{{product.name}} - ${{product.cost}}<br>(available: {{product.quantity}})</div>\n                        <div [hidden]=\"product.quantity>0\"><del>{{product.name}}</del><br>(NOT available)</div>\n                    </div>\n                  </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-3\">\n        <div dnd-droppable (onDropSuccess)=\"addToBasket($event)\" [dropZones]=\"['demo1']\" class=\"panel panel-info\">\n            <div class=\"panel-heading\">Shopping Basket<br>(to pay: ${{totalCost()}})</div>\n            <div class=\"panel-body\">\n                <div *ngFor=\"let product of shoppingBasket\" class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                    {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: ${{product.cost * product.quantity}})\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-3\">\n        <div dnd-droppable (onDropSuccess)=\"addToBasket2($event)\" [dropZones]=\"['demo2']\" class=\"panel panel-info\">\n            <div class=\"panel-heading\">Shopping Basket<br>(to pay: ${{totalCost()}})</div>\n            <div class=\"panel-body\">\n                <div *ngFor=\"let product of shoppingBasket2\" class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                    {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: ${{product.cost * product.quantity}})\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"
    }),
    __metadata("design:paramtypes", [])
], ShoppingBasketDndComponent);

var Product = (function () {
    function Product(name, quantity, cost) {
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
    return Product;
}());
//# sourceMappingURL=shopping-basket-dnd.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/simple-dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDndComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleDndComponent = (function () {
    function SimpleDndComponent() {
        this.simpleDrop = null;
    }
    return SimpleDndComponent;
}());
SimpleDndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-dnd',
        template: "\n<h4>Simple Drag-and-Drop</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\">\n                    <div class=\"panel-body\">\n                        <div>Drag Me</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"simpleDrop=$event\">\n            <div class=\"panel-heading\">Place to drop</div>\n            <div class=\"panel-body\">\n                <div *ngIf=\"simpleDrop\">Item was dropped here</div>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], SimpleDndComponent);

//# sourceMappingURL=simple-dnd.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/simple-sortable-copy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleSortableCopyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleSortableCopyComponent = (function () {
    function SimpleSortableCopyComponent() {
        this.sourceList = [
            new Widget('1'), new Widget('2'),
            new Widget('3'), new Widget('4'),
            new Widget('5'), new Widget('6')
        ];
        this.targetList = [];
    }
    SimpleSortableCopyComponent.prototype.addTo = function ($event) {
        this.targetList.push($event.dragData);
    };
    return SimpleSortableCopyComponent;
}());
SimpleSortableCopyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-sortable-copy',
        template: "\n<h4>Simple sortable With Drop into something, without delete it</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-warning\"\n            dnd-sortable-container [sortableData]=\"sourceList\" [dropZones]=\"['source-dropZone']\">\n            <div class=\"panel-heading\">Source List</div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let source of sourceList; let x = index\" class=\"list-group-item\"\n                        dnd-sortable [sortableIndex]=\"x\" [dragEnabled]=\"true\"\n                        [dragData]=\"source\">{{source.name}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">Target List</div>\n            <div class=\"panel-body\" dnd-droppable (onDropSuccess)=\"addTo($event)\" [dropZones]=\"['source-dropZone']\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let target of targetList\" class=\"list-group-item\">\n                        {{target.name}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], SimpleSortableCopyComponent);

var Widget = (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());
//# sourceMappingURL=simple-sortable-copy.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/simple-sortable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleSortableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleSortableComponent = (function () {
    function SimpleSortableComponent() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    }
    return SimpleSortableComponent;
}());
SimpleSortableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-sortable',
        template: "\n<h4>Simple sortable</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                Favorite drinks\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                My prefences:<br/>\n                <span *ngFor=\"let item of listOne; let i = index\">{{i + 1}}) {{item}}<br/></span>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], SimpleSortableComponent);

//# sourceMappingURL=simple-sortable.component.js.map

/***/ }),

/***/ "../../../../../src/app/dnd-demo/zone-dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoneDndComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ZoneDndComponent = (function () {
    function ZoneDndComponent() {
        this.restrictedDrop1 = null;
        this.restrictedDrop2 = null;
    }
    return ZoneDndComponent;
}());
ZoneDndComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'zone-dnd',
        template: "\n<h4>Restricted Drag-and-Drop with zones</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dropZones]=\"['zone1']\">\n                    <div class=\"panel-body\">\n                        <div>Drag Me</div>\n                        <div>Zone 1 only</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dropZones]=\"['zone1', 'zone2']\">\n                    <div class=\"panel-body\">\n                        <div>Drag Me</div>\n                        <div>Zone 1 & 2</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable class=\"panel panel-info\" [dropZones]=\"['zone1']\" (onDropSuccess)=\"restrictedDrop1=$event\">\n            <div class=\"panel-heading\">Zone 1</div>\n            <div class=\"panel-body\">\n                <div *ngIf=\"restrictedDrop1\">Item was dropped here</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable class=\"panel panel-warning\" [dropZones]=\"['zone2']\" (onDropSuccess)=\"restrictedDrop2=$event\">\n            <div class=\"panel-heading\">Zone 2</div>\n            <div class=\"panel-body\">\n                <div *ngIf=\"restrictedDrop2\">Item was dropped here</div>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], ZoneDndComponent);

//# sourceMappingURL=zone-dnd.component.js.map

/***/ }),

/***/ "../../../../../src/app/drag-demo/drag-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <label for=\"hy\">There are plenty of events along the lifetime of a drag event. <a href=\"https://github.com/bevacqua/dragula#drakeon-events\">all of them</a> in the docs!</label>\n  <div class=\"wrapper\">\n    <div class=\"container\" [dragula]=\"'second-bag'\" [dragulaModel]='origin'>\n      <div *ngFor=\"let text of origin\" [innerHtml]='text'></div>\n    </div>\n    <div class=\"container\" [dragula]=\"'second-bag'\" [dragulaModel]='target'>\n      <div *ngFor=\"let text of target\" [innerHtml]='text'></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/drag-demo/drag-demo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #942A57;\n  margin: 0 auto;\n  max-width: 760px; }\n\nhtml, body {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nbody, input, button {\n  font-family: Georgia, Helvetica;\n  font-size: 17px;\n  color: #ecf0f1; }\n\nh1 {\n  text-align: center;\n  background-color: #AC5C7E;\n  margin-top: 20px;\n  margin-bottom: 0;\n  padding: 10px; }\n\nh3 {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-bottom: 5px solid #A13462;\n  text-align: center;\n  padding: 10px; }\n\nh3 div {\n  margin-bottom: 10px; }\n\n.tagline {\n  margin-top: 0; }\n\n.promo {\n  margin-bottom: 0;\n  font-style: italic;\n  padding: 10px;\n  background-color: #ff4020;\n  border-bottom: 5px solid #c00; }\n\na {\n  font-weight: bold; }\n\na,\na:hover {\n  color: #ecf0f1; }\n\npre {\n  white-space: pre-wrap; }\n\npre code {\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.3; }\n\nlabel {\n  display: block;\n  margin-bottom: 15px; }\n\nsub {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 15px;\n  font-size: 11px;\n  font-style: italic; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\n.parent {\n  background-color: rgba(255, 255, 255, 0.2);\n  margin: 50px 0;\n  padding: 20px; }\n\ninput {\n  border: none;\n  outline: none;\n  background-color: #ecf0f1;\n  padding: 10px;\n  color: #942A57;\n  border: 0;\n  margin: 5px 0;\n  display: block;\n  width: 100%; }\n\nbutton {\n  background-color: #ecf0f1;\n  color: #942A57;\n  border: 0;\n  padding: 18px 12px;\n  margin-left: 6px;\n  cursor: pointer;\n  outline: none; }\n\nbutton:hover {\n  background-color: #e74c3c;\n  color: #ecf0f1; }\n\n.gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n.wrapper {\n  display: table; }\n\n.container {\n  display: table-cell;\n  background-color: rgba(255, 255, 255, 0.2);\n  width: 50%; }\n\n.container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\n * note that styling gu-mirror directly is a bad practice because it's too generic.\n * you're better off giving the draggable elements a unique class and styling that directly!\n */\n.container div,\n.gu-mirror {\n  margin: 10px;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: opacity 0.4s ease-in-out; }\n\n.container div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.container .ex-moved {\n  background-color: #e74c3c; }\n\n.container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\nnested-repeat-example .container span {\n  display: block;\n  padding: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drag-demo/drag-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragDemoComponent = (function () {
    function DragDemoComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.origin = [];
        this.target = [];
        this.origin.push('AAA');
        this.origin.push('BBB');
        this.origin.push('CCC');
        this.origin.push('DDD');
        this.origin.push('EEE');
        this.target.push('FFF');
        this.target.push('GGG');
        dragulaService.setOptions('second-bag', {
            removeOnSpill: true,
            copy: true
        });
        dragulaService.drag.subscribe(function (value) {
            console.log('onDrag');
            console.log(value);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log('onDrop');
            console.log(value);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log('onOver');
            console.log(value);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log('onOut');
            console.log(value);
            _this.onOut(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            console.log('removeModel');
            console.log(value);
            _this.onRemoveModel(value.slice(1));
        });
    }
    DragDemoComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    DragDemoComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    DragDemoComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    DragDemoComponent.prototype.onDrag = function (args) {
        var e = args[0];
        this.removeClass(e, 'ex-moved');
    };
    DragDemoComponent.prototype.onDrop = function (args) {
        var el = args[0], target = args[1], source = args[2];
        console.log('onDropModel:');
        console.log(el);
        console.log(target);
        console.log(source);
        this.addClass(el, 'ex-moved');
    };
    DragDemoComponent.prototype.onOver = function (args) {
        var el = args[0];
        this.addClass(el, 'ex-over');
    };
    DragDemoComponent.prototype.onOut = function (args) {
        var el = args[0];
        this.removeClass(el, 'ex-over');
    };
    DragDemoComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        console.log('onRemoveModel:');
        console.log(el);
        console.log(source);
    };
    return DragDemoComponent;
}());
DragDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'drag-demo',
        template: __webpack_require__("../../../../../src/app/drag-demo/drag-demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drag-demo/drag-demo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === "function" && _a || Object])
], DragDemoComponent);

var _a;
//# sourceMappingURL=drag-demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/fiends-circle/fiends-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\">\n\n  <!-- MAIN-WRAPPER -->\n  <div class=\"main-wrapper\">\n\n    <!-- content -->\n    <div class=\"content\">\n      <div class=\"col-lg-12\">\n        <div class=\"row\">\n\n          <div class=\"circle-left-ctn col-lg-8 col-md-8\">\n            <div class=\"row\">\n              <ul class=\"circle-list-ul clearfix\" id=\"circle-list-ul\">\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\">\n                  <div class=\"circle-bdr\">\n                    <div class=\"circle-list-item drag-cursor\" rel=\"4218,a17bee64-8593-436e-a2f8-599a626370df\">\n                      <span class=\"fa fa-times  close-btn\"></span>\n                      <div class=\"list-row\">\n                        <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec\">\n                          <h5>Friend Name</h5>\n                          <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n          <div class=\"circles-ctn\" style=\"background-color: red\">\n            <div class=\"circle-right-ctn \">\n\n              <ul class=\"circle-drop-ul clearfix\">\n\n                <li class=\"col-lg-4 m-b10 circle-popover\" id=\"friends\">\n                  <div class=\"circle-ui circle-drop\">\n                    <span class=\"dorp-action delete\">1</span>\n                    <span class=\"dorp-action add-new\">1</span>\n                    <div class=\"circle-drop-inner\">\n                      <div class=\"inner\">\n                        <h5>Friends</h5>\n                        <span class=\"members\">0</span>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 m-b10 circle-popover\" id=\"private\">\n                  <div class=\"circle-ui circle-drop\">\n                    <span class=\"dorp-action delete\">1</span>\n                    <span class=\"dorp-action add-new\">1</span>\n                    <div class=\"circle-drop-inner\">\n                      <div class=\"inner\">\n                        <h5>Private</h5>\n                        <span class=\"members\">0</span>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"col-lg-4 m-b10 circle-popover family\" id=\"family\">\n                  <div class=\"circle-ui circle-drop\">\n                    <span class=\"dorp-action delete\">1</span>\n                    <span class=\"dorp-action add-new\">1</span>\n                    <div class=\"circle-drop-inner\">\n                      <div class=\"inner\">\n                        <h5>Family</h5>\n                        <span class=\"members\">0</span>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/ content -->\n\n  </div>\n  <!--/ MAIN-WRAPPER -->\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fiends-circle/fiends-circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style: none; }\n\nli {\n  list-style: none; }\n\n.circles-ctn {\n  height: 100%;\n  top: 52px;\n  right: 0;\n  overflow: auto; }\n  .circles-ctn.affix .circle-right-ctn {\n    width: 100%;\n    padding: 0; }\n\n.circle-right-ctn {\n  height: 100%;\n  padding: 0;\n  overflow-y: auto; }\n\n.circle-list-ul {\n  margin: 0;\n  padding: 30px 0; }\n  .circle-list-ul > li .circle-bdr {\n    border: 5px solid transparent;\n    margin-bottom: 10px; }\n  .circle-list-ul > li.circle-card .circle-bdr:hover {\n    border: 5px solid rgba(77, 148, 255, 0.8); }\n  .circle-list-ul > li > .circle-bdr > .circle-list-item {\n    background: #fff;\n    position: relative;\n    min-height: 80px;\n    display: table;\n    width: 100%;\n    box-shadow: 3px 3px 6px 0 rgba(102, 102, 102, 0.75); }\n    .circle-list-ul > li > .circle-bdr > .circle-list-item.add-user {\n      cursor: pointer; }\n    .circle-list-ul > li > .circle-bdr > .circle-list-item.drag-cursor {\n      cursor: url(" + __webpack_require__("../../../../../src/assets/images/cursor_hand.png") + "), auto; }\n  .circle-list-ul > li > .circle-bdr:hover > .circle-list-item .close-btn {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n    margin: 5px 5px 0 0; }\n    .circle-list-ul > li > .circle-bdr:hover > .circle-list-item .close-btn i {\n      margin: 16px 0 0 15px; }\n  .circle-list-ul > li.ui-state-highlight > .circle-bdr > .circle-list-item {\n    background: rgba(77, 148, 255, 0.4); }\n  .circle-list-ul > .circle-card {\n    position: static; }\n    .circle-list-ul > .circle-card.ui-state-highlight {\n      border: 0;\n      background: none;\n      height: auto; }\n\n.circle-drop-ul {\n  margin: 0;\n  padding: 30px 0; }\n\n.circle-list-item .list-row {\n  display: table-row; }\n\n.circle-list-item.add-user > .add-user-icon {\n  vertical-align: middle;\n  height: 80px;\n  margin-right: 15px;\n  padding: 26px 15px 0;\n  border-right: 1px solid #ccc;\n  display: inline-block; }\n\n.circle-list-item.add-user:hover h5 {\n  text-decoration: underline; }\n\n.circle-list-item h5 {\n  font-weight: 700; }\n\n.circle-list-item .close-btn {\n  display: none; }\n\n.circle-list-item > .list-row > span {\n  width: 90px;\n  padding-right: 10px;\n  height: 80px; }\n\n.circle-list-item > .list-row > .item-cell {\n  display: table-cell;\n  vertical-align: middle; }\n\n.circle-list-item > .list-row > .item-dec .level-icon {\n  margin-top: 5px;\n  float: left;\n  color: #f9532f; }\n\n.circle-left-ctn {\n  z-index: 8; }\n\n.circle-ui {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #f9532f;\n  transition: all 200ms ease-in-out;\n  margin-right: 50px;\n  text-align: center;\n  color: #fff;\n  float: left;\n  padding: 10px;\n  cursor: pointer; }\n  .circle-ui:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n    .circle-ui:hover h5 {\n      text-decoration: underline; }\n    .circle-ui:hover .circle-drop-item {\n      display: block; }\n  .circle-ui > .circle-drop-inner {\n    display: table;\n    overflow: visible;\n    width: 100%;\n    height: 100%; }\n  .circle-ui > .circle-drop-item {\n    display: none; }\n  .circle-ui.drop-hover {\n    background: #fe8a71;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .circle-ui .inner {\n    display: table-cell;\n    vertical-align: middle;\n    position: relative; }\n  .circle-ui.add-circles {\n    background: #777;\n    color: #fff;\n    position: relative; }\n  .circle-ui .circle-drop-item > li {\n    padding: 0 !important;\n    position: absolute; }\n    .circle-ui .circle-drop-item > li .item-dec {\n      display: none; }\n    .circle-ui .circle-drop-item > li .circle-bdr {\n      position: relative; }\n    .circle-ui .circle-drop-item > li .list-row > span {\n      padding: 0;\n      width: 22px;\n      height: 22px; }\n      .circle-ui .circle-drop-item > li .list-row > span img {\n        border-radius: 50%; }\n\n.content .circle-card {\n  display: block; }\n\n.content > .circle-card {\n  z-index: 999999; }\n  .content > .circle-card .item-dec {\n    display: none; }\n  .content > .circle-card .circle-bdr {\n    position: relative; }\n  .content > .circle-card .list-row > span {\n    padding: 0;\n    width: 22px;\n    height: 22px;\n    float: left; }\n\n.content > li .list-row > span img {\n  border-radius: 50%; }\n\n.dorp-action {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 25px;\n  color: #fff;\n  opacity: 0; }\n  .dorp-action.delete {\n    background: red; }\n  .dorp-action.add-new {\n    background: green; }\n\n.draggable-tooltip {\n  position: absolute;\n  bottom: -18px;\n  left: -15px;\n  width: 25px;\n  height: 25px;\n  float: left;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/dropIcon.png") + ") 0 0 no-repeat; }\n  .draggable-tooltip.delete {\n    background: url(" + __webpack_require__("../../../../../src/assets/images/dropIcon.png") + ") 0 -35px no-repeat; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fiends-circle/fiends-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiendsCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiendsCircleComponent = (function () {
    function FiendsCircleComponent(el) {
        this.el = el;
    }
    FiendsCircleComponent.prototype.ngAfterViewInit = function () {
        // Vars
        var selectedClass = 'ui-state-highlight', clickDelay = 600, // milliseconds
        ngContentID = this.el.nativeElement.firstChild.attributes[0].name;
        var outside = 0;
        var outsideCircle = 0;
        var lastClick, diffClick; // timestamps
        // Functions
        var clickFunction = function () {
            $('.circle-list-ul > .circle-card')
                .on('mousedown mouseup', function (e) {
                if (e.type == 'mousedown') {
                    lastClick = e.timeStamp; // get mousedown time
                }
                else {
                    diffClick = e.timeStamp - lastClick;
                    if (diffClick < clickDelay) {
                        $(this).toggleClass(selectedClass);
                    }
                }
            });
        };
        var move = function (count, $elem, speed, turns) {
            var $circle = $elem;
            var end = 180 - 360 * (turns - 1); // make the circle appear in a circular movement
            $circle
                .animate({
                path: new $.path.arc({
                    center: [39, 39],
                    radius: 40,
                    start: 180,
                    end: -180 + count * 35,
                    dir: -1
                }),
                opacity: '1'
            }, speed);
        };
        var deleteImage = function ($item, data) {
            var $trash = $(data);
            $item.each(function () {
                var subitem = $(this);
                subitem.fadeOut(function () {
                    var $list = $('ul', $trash).length ?
                        $('ul', $trash) :
                        $("<ul " + ngContentID + " class='circle-drop-item ui-helper-reset clearfix'/>")
                            .appendTo($trash);
                    console.log($list);
                    subitem.appendTo($list).fadeIn(function () {
                        subitem.animate({
                            width: '22px',
                            position: 'absolute'
                        })
                            .find('img')
                            .animate({ height: '22px' });
                    });
                });
                subitem.draggable({
                    appendTo: '.content',
                    helper: 'clone',
                    start: function (e, ui) {
                        outside = 0;
                        var folderName = (ui.helper).data('id');
                        var parentClass = $(ui.helper).parents('li.circle-popover');
                        if (parentClass.has('#' + folderName)) {
                            $(ui.helper).find('.draggable-tooltip').remove();
                        }
                        else {
                            $(ui.helper).find('.draggable-tooltip').remove();
                            $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip'></span>"));
                        }
                    },
                    drag: function (e, ui) {
                        outside = 0;
                    },
                    stop: function (event, ui) {
                        var folderName = (ui.helper).data('id');
                        var parentClass = $(ui.helper).parents('li.circle-popover').attr('id');
                        if (outside == 0 && outsideCircle == 0) {
                            $(this).parents('li.circle-popover').find('.dorp-action.delete')
                                .animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, function () {
                                $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
                            });
                            var dropItmeList = $(this).parents('li.circle-popover').find('.circle-drop-item li').length;
                            $(this).parents('li.circle-popover').find('.members').text(dropItmeList - 1);
                            $(this).remove();
                        }
                    },
                    cursorAt: { left: 25 }
                });
                var liLength = $trash.find('ul li').length;
                if (liLength > 10) {
                    subitem.css({
                        display: 'none'
                    });
                }
                move(liLength, subitem, 1500, 1);
                subitem.attr('data-id', subitem.parents('li.circle-popover').attr('id'));
            });
        };
        var recycleImage = function ($item, data) {
            $item.fadeOut(function () {
                $item
                    .appendTo('.circle-list-ul')
                    .fadeIn(function () {
                    $item
                        .removeAttr('style').addClass('left-drop-card').removeClass('dingdon')
                        .find('img')
                        .removeAttr('style');
                });
            });
            $item.draggable({
                helper: 'clone',
                revertDuration: 10,
                containment: '.demo',
                start: function (e, ui) {
                    outside = 0;
                    ui.helper.addClass(selectedClass);
                },
                stop: function (e, ui) {
                    // reset group positions
                    $('.' + selectedClass)
                        .css({
                        top: 0,
                        left: 0
                    })
                        .removeClass(selectedClass);
                },
                drag: function (e, ui) {
                    // set selected group position to main dragged object
                    // this works because the position is relative to the starting position
                    $('.' + selectedClass)
                        .css({
                        top: ui.position.top,
                        left: ui.position.left
                    });
                }
            });
        };
        // Main
        clickFunction();
        $('.close-btn').click(function () {
            $(this).parents('li').fadeOut();
        });
        // Items to drag
        $('.circle-list-ul > .circle-card').draggable({
            cursor: 'move',
            helper: 'clone',
            distance: 15,
            grid: [50, 20],
            iframeFix: true,
            start: function (e, ui) {
                console.log('circle-card START');
                ui.helper.addClass(selectedClass);
            },
            stop: function (e, ui) {
                console.log('circle-card STOP');
                // reset group positions
                $('.' + selectedClass).css({
                    top: 0,
                    left: 0
                }).removeClass(selectedClass);
            },
            drag: function (e, ui) {
                console.log('circle-card DRAG');
                // set selected group position to main dragged object
                // this works because the position is relative to the starting position
                $('.' + selectedClass).css({
                    top: ui.position.top,
                    left: ui.position.left
                });
            }
        });
        /*
            $('.circle-list-ul').droppable({
              greedy: true,
              hoverClass: 'data-hover',
              accept: '.circle-drop-item > .circle-card',
              over: function (event, ui) {
                console.log('circle-list-ul OVER');
                const folderName = $(event.target).attr('id');
                const targetFolder = $(event.target).attr('id');
                const parentClass = $(ui.helper).parents('li');
                $(ui.helper).find('.draggable-tooltip').remove();
                $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip'></span>"));
              },
              out: function (event, ui) {
                console.log('circle-list-ul OUT');
                $(ui.helper).find('.draggable-tooltip').remove();
                $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip delete'></span>"));
              },
              drop: function (event, ui) {
                console.log('circle-list-ul DROP');
                const cloneItem = $(ui.draggable).clone().on('mousedown mouseup', function (e) {
                  if (e.type == 'mousedown') {
                    lastClick = e.timeStamp; // get mousedown time
                  } else {
                    diffClick = e.timeStamp - lastClick;
                    if (diffClick < clickDelay) {
        
                      // add selected class to group draggable objects
                      $(this).toggleClass(selectedClass);
                    }
                  }
                });
                recycleImage(cloneItem, this);
                outside = 1;
              }
            });
            */
        // Circles to drag the items
        $('.circle-drop').droppable({
            greedy: true,
            tolerance: 'pointer',
            hoverClass: 'drop-hover',
            over: function (event, ui) {
                console.log('circle-drop OVER');
                outsideCircle = 1;
                $(ui.helper).find('.draggable-tooltip').remove();
            },
            drop: function (event, ui) {
                console.log('circle-drop DROP');
                var cloneItem;
                if ($('.' + selectedClass).length == 1) {
                    cloneItem = $('.' + selectedClass)
                        .removeClass('left-drop-card ui-draggable-dragging draggable' + selectedClass)
                        .addClass('dingdon')
                        .css({
                        position: '',
                        top: 0,
                        left: 0
                    }).clone();
                }
                else {
                    cloneItem = $('.' + selectedClass + ':not(.ui-draggable-dragging)')
                        .removeClass('left-drop-card draggable' + selectedClass)
                        .addClass('dingdon')
                        .css({
                        position: '',
                        top: 0,
                        left: 0
                    }).clone();
                }
                deleteImage(cloneItem, this);
                var dropItmeList = $(this).find('.circle-drop-item li').length;
                $(this).find('.members').text(dropItmeList);
                if (cloneItem.hasClass(selectedClass)) {
                    $(this).find('.dorp-action.add-new').text(cloneItem.length);
                    $(this).find('.dorp-action.add-new').animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, function () {
                        $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
                    });
                }
            },
            out: function (event, ui) {
                console.log('circle-drop OUT');
                outsideCircle = 0;
                if (!$(ui.helper).hasClass('left-drop-card')) {
                    $(ui.helper).find('.draggable-tooltip').remove();
                    $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip delete'></span>"));
                }
            }
        });
    };
    return FiendsCircleComponent;
}());
FiendsCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fiends-circle',
        template: __webpack_require__("../../../../../src/app/fiends-circle/fiends-circle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fiends-circle/fiends-circle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FiendsCircleComponent);

var _a;
//# sourceMappingURL=fiends-circle.component.js.map

/***/ }),

/***/ "../../../../../src/app/gooey-menu/gooey-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "gooey-item, .menu-item, .menu-open-button {\n  background: #e91e63;\n  border-radius: 100%;\n  width: 80px;\n  height: 80px;\n  margin-left: -40px;\n  position: absolute;\n  top: 20px;\n  color: white;\n  text-align: center;\n  line-height: 80px;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform ease-out 200ms;\n  transition: transform ease-out 200ms;\n  transition: transform ease-out 200ms, -webkit-transform ease-out 200ms; }\n\n.menu {\n  position: absolute;\n  left: 50%;\n  margin-left: -190px;\n  padding-top: 20px;\n  padding-left: 190px;\n  width: 380px;\n  height: 250px;\n  box-sizing: border-box;\n  font-size: 20px;\n  text-align: left; }\n\n.menu-item:hover {\n  background: blue;\n  color: #e91e63; }\n\n.menu-open-button {\n  z-index: 2;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-duration: 400ms;\n  -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n          transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n  cursor: pointer; }\n  .menu-open-button:hover {\n    -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n            transform: scale(1.2, 1.2) translate3d(0, 0, 0); }\n\n.menu-open {\n  display: none; }\n  .menu-open:checked + .menu-open-button {\n    transition-timing-function: linear;\n    transition-duration: 200ms;\n    -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n            transform: scale(0.8, 0.8) translate3d(0, 0, 0); }\n    .menu-open:checked + .menu-open-button .hamburger-1 {\n      -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n              transform: translate3d(0, 0, 0) rotate(45deg); }\n    .menu-open:checked + .menu-open-button .hamburger-2 {\n      -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);\n              transform: translate3d(0, 0, 0) scale(0.1, 1); }\n    .menu-open:checked + .menu-open-button .hamburger-3 {\n      -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);\n              transform: translate3d(0, 0, 0) rotate(-45deg); }\n  .menu-open:checked ~ .menu-item {\n    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33); }\n    .menu-open:checked ~ .menu-item:nth-child(3) {\n      transition-duration: 180ms;\n      -webkit-transform: translate3d(0.08361px, -104.99997px, 0);\n              transform: translate3d(0.08361px, -104.99997px, 0); }\n    .menu-open:checked ~ .menu-item:nth-child(4) {\n      transition-duration: 280ms;\n      -webkit-transform: translate3d(90.9466px, -52.47586px, 0);\n              transform: translate3d(90.9466px, -52.47586px, 0); }\n    .menu-open:checked ~ .menu-item:nth-child(5) {\n      transition-duration: 380ms;\n      -webkit-transform: translate3d(90.9466px, 52.47586px, 0);\n              transform: translate3d(90.9466px, 52.47586px, 0); }\n    .menu-open:checked ~ .menu-item:nth-child(6) {\n      transition-duration: 480ms;\n      -webkit-transform: translate3d(0.08361px, 104.99997px, 0);\n              transform: translate3d(0.08361px, 104.99997px, 0); }\n    .menu-open:checked ~ .menu-item:nth-child(7) {\n      transition-duration: 580ms;\n      -webkit-transform: translate3d(-90.86291px, 52.62064px, 0);\n              transform: translate3d(-90.86291px, 52.62064px, 0); }\n    .menu-open:checked ~ .menu-item:nth-child(8) {\n      transition-duration: 680ms;\n      -webkit-transform: translate3d(-91.03006px, -52.33095px, 0);\n              transform: translate3d(-91.03006px, -52.33095px, 0); }\n    .menu-open:checked ~ .menu-item:nth-child(9) {\n      transition-duration: 780ms;\n      -webkit-transform: translate3d(-0.25084px, -104.9997px, 0);\n              transform: translate3d(-0.25084px, -104.9997px, 0); }\n\n.hamburger {\n  width: 25px;\n  height: 3px;\n  background: white;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -12.5px;\n  margin-top: -1.5px;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms; }\n\n.hamburger-1 {\n  -webkit-transform: translate3d(0, -8px, 0);\n          transform: translate3d(0, -8px, 0); }\n\n.hamburger-2 {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.hamburger-3 {\n  -webkit-transform: translate3d(0, 8px, 0);\n          transform: translate3d(0, 8px, 0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gooey-menu/gooey-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooeyMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GooeyMenuComponent = (function () {
    function GooeyMenuComponent() {
    }
    return GooeyMenuComponent;
}());
GooeyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gooey-menu',
        template: "\n<nav class=\"menu\">\n  <input type=\"checkbox\" href=\"#\" class=\"menu-open\" name=\"menu-open\" id=\"menu-open\"/>\n  <label class=\"menu-open-button\" for=\"menu-open\">\n    <span class=\"hamburger hamburger-1\"></span>\n    <span class=\"hamburger hamburger-2\"></span>\n    <span class=\"hamburger hamburger-3\"></span>\n  </label>\n\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-bar-chart\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-plus\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-heart\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-envelope\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-cog\"></i> </a>\n  <a href=\"#\" class=\"menu-item\"> <i class=\"fa fa-ellipsis-h\"></i> </a>\n\n</nav>\n",
        styles: [__webpack_require__("../../../../../src/app/gooey-menu/gooey-menu.component.scss")]
    })
], GooeyMenuComponent);

//# sourceMappingURL=gooey-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/hex-image/hex-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HexImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HexImageComponent = (function () {
    function HexImageComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.width = 300;
        this.src = 'http://csshexagon.com/img/meow.jpg';
        this.scaleFactor = Math.tan(30 * Math.PI / 180); // for transform square into a rhombus for the top
    }
    HexImageComponent.prototype.getImage = function () {
        return this.domSanitizer.bypassSecurityTrustStyle('url(' + this.src + ')');
    };
    HexImageComponent.prototype.getHexImageStyle = function () {
        return {
            'position': 'relative',
            'width.px': this.width,
            'height.px': this.width / Math.sqrt(3),
            'margin': ((this.width / Math.sqrt(3)) / 2) + 'px 0',
            'background-size': 'auto ' + this.width / Math.sqrt(3) * 2 + 'px',
            'background-position': 'center'
        };
    };
    HexImageComponent.prototype.getHexImageAfterStyle = function () {
        return {
            'content': '',
            'position': 'absolute',
            'top.px': 0,
            'left.px': 0,
            'width.px': this.width,
            'height.px': this.width / Math.sqrt(3),
            'z-index': 2,
            'background': 'inherit'
        };
    };
    HexImageComponent.prototype.getTopBottomStyle = function () {
        return {
            'position': 'absolute',
            'z-index': 1,
            'width.px': this.width / Math.sqrt(2),
            'height.px': this.width / Math.sqrt(2),
            'overflow': 'hidden',
            '-webkit-transform': 'scaleY(' + this.scaleFactor + ') rotate(-45deg)',
            '-ms-transform': 'scaleY(' + this.scaleFactor + ') rotate(-45deg)',
            'transform': 'scaleY(' + this.scaleFactor + ') rotate(-45deg)',
            'background': 'inherit',
            'left.px': (this.width - (this.width / Math.sqrt(2))) / 2
        };
    };
    HexImageComponent.prototype.getTopBottomAfterStyle = function () {
        return {
            'content': '',
            'position': 'absolute',
            'width.px': this.width,
            'height.px': this.width / Math.sqrt(3),
            '-webkit-transform': 'rotate(45deg) scaleY(' + 1 / this.scaleFactor + ') translateY(' + -this.width / Math.sqrt(3) / 2 + 'px)',
            '-ms-transform': 'rotate(45deg) scaleY(' + 1 / this.scaleFactor + ') translateY(' + -this.width / Math.sqrt(3) / 2 + 'px)',
            'transform': 'rotate(45deg) scaleY(' + 1 / this.scaleFactor + ') translateY(' + -this.width / Math.sqrt(3) / 2 + 'px)',
            '-webkit-transform-origin': '0 0',
            '-ms-transform-origin': '0 0',
            'transform-origin': '0 0',
            'background': 'inherit',
        };
    };
    HexImageComponent.prototype.getTopStyle = function () {
        return Object.assign(this.getTopBottomStyle(), { 'top.px': -this.width / Math.sqrt(2) / 2 });
    };
    HexImageComponent.prototype.getTopAfterStyle = function () {
        return Object.assign(this.getTopBottomAfterStyle(), { 'background-position': 'center top' });
    };
    HexImageComponent.prototype.getBottomStyle = function () {
        return Object.assign(this.getTopBottomStyle(), { 'bottom.px': -this.width / Math.sqrt(2) / 2 });
    };
    HexImageComponent.prototype.getBottomAfterStyle = function () {
        return Object.assign(this.getTopBottomAfterStyle(), { 'background-position': 'center bottom' });
    };
    return HexImageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HexImageComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HexImageComponent.prototype, "src", void 0);
HexImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hex-image',
        template: "\n<div [ngStyle]=\"getHexImageStyle()\"\n     [style.background-image]=\"getImage()\">\n  <div [ngStyle]=\"getTopStyle()\">\n    <div [ngStyle]=\"getTopAfterStyle()\"></div>\n  </div>\n  <div [ngStyle]=\"getBottomStyle()\">\n    <div [ngStyle]=\"getBottomAfterStyle()\"></div>\n  </div>\n  <div [ngStyle]=\"getHexImageAfterStyle()\"></div>\n</div>\n",
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], HexImageComponent);

var _a;
//# sourceMappingURL=hex-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/hubeleke-menu/hubeleke-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubelekeMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HubelekeMenuComponent = (function () {
    function HubelekeMenuComponent(el) {
        this.el = el;
    }
    HubelekeMenuComponent.prototype.ngAfterViewInit = function () {
        var $el = $(this.el.nativeElement.querySelector('#rotate-menu')), defaults = {
            menuSize: 300,
            menuRotateDuration: 500,
            linkColor: '#333',
            linkSize: 16,
            linkPadding: 20,
            border: true,
            borderColor: '#999',
            borderSize: 2,
            image: true,
            imageSize: 240,
            imageBorderSize: 2,
            imageBorderColor: '#999',
            imageBgColor: '#ddd',
            imageOverlayBgColor: '#ddd',
            imageOverlayDuration: 100,
            contentWrapper: '',
            contentType: 'tabs',
            contentAjaxLoader: 'ajax/index.php',
            onBeforeLoad: function () { },
            onAfterLoad: function () { },
            onMenuClick: function () { },
            onAjaxLoaded: function () { },
        }, options = $.extend({}, defaults, {});
        var 
        // links
        linkCount = 0, linkMaxWidth = 0, linkActive, 
        // imagebox
        $imageBox, 
        //content
        $content, $loading;
        /* support multiple elements */
        if ($el.length > 1) {
            $el.each(function () {
                $(this).rMenu(options);
            });
            return this;
        }
        /* InÄ±talize Svg Border */
        var initializeBorder = function () {
            $el.append('<svg><circle></circle></svg>');
            var pi = Math.PI, svg = $el.find('svg'), svgSize = options.menuSize, circle = svg.find('circle'), circleSize = svgSize / 2, circleRadius = circleSize - options.borderSize, circlePerimeter = parseInt(2 * pi * circleRadius + '') + 1, circleSlicePerimeter = parseInt(circlePerimeter / linkCount + ''), circleBorderWidth = (circleSlicePerimeter - linkMaxWidth) < 0 ? 0 : circleSlicePerimeter - linkMaxWidth, circleDashArray = '0,' + (linkMaxWidth / 2) + ',' + circleBorderWidth + ',' + (linkMaxWidth / 2);
            svg.attr('width', svgSize).attr('height', svgSize);
            svg.css({
                marginTop: (-1) * circleSize,
                marginLeft: (-1) * circleSize
            });
            circle.attr('cx', circleSize)
                .attr('cy', circleSize)
                .attr('r', circleRadius)
                .attr('stroke', options.borderColor)
                .attr('stroke-width', options.borderSize)
                .attr('fill', 'none')
                .attr('stroke-dasharray', circleDashArray);
        };
        /* InÄ±talize Image Box */
        var initializeImageBox = function () {
            $el.after('<a class="hb-image"><span class="hb-image-arrow"></span><span class="hb-image-overlay"></span></a>');
            var $a = $el.find('a').first();
            $imageBox = $el.next('.hb-image');
            $imageBox.css({
                width: options.imageSize,
                height: options.imageSize,
                marginTop: (-1) * options.imageSize / 2,
                marginLeft: (-1) * options.imageSize / 2,
                borderColor: options.imageBorderColor,
                borderWidth: options.imageBorderSize,
                backgroundColor: options.imageBgColor,
            });
            if ($a.attr('data-image')) {
                $imageBox.css({
                    backgroundImage: 'url("' + $a.attr('data-image') + '")',
                });
            }
            if ($a.attr('data-image-class')) {
                $imageBox.addClass($a.attr('data-image-class'));
            }
            if ($a.attr('data-image-href')) {
                $imageBox.attr('href', $a.attr('data-image-href'));
                $imageBox.css({
                    cursor: 'pointer'
                });
            }
            else {
                $imageBox.attr('href', 'javascript:;');
                $imageBox.css({
                    cursor: 'default'
                });
            }
            $imageBox.children('.hb-image-arrow').css({
                bottom: (options.imageBorderSize + $imageBox.children('.hb-image-arrow').outerHeight()) * (-1),
                borderTopColor: options.imageBorderColor
            });
            $imageBox.children('.hb-image-overlay').css({
                backgroundColor: options.imageOverlayBgColor,
                opacity: 0
            });
        };
        /* InÄ±tÄ±alize Tabs */
        var initializeTabs = function () {
            if (options.contentWrapper == '') {
                $content = $el.parent('.hb-rotate-menu-wrapper').next('div');
            }
            else {
                $content = $(options.contentWrapper);
            }
            $content.addClass('hb-rotate-content');
            $content.children('div').each(function () {
                var $tab = $(this);
                $tab.wrap('<div></div>');
                $tab.parent('div').addClass('hb-tab');
                $tab.addClass('hb-tab-content');
                if ($content.find('.hb-tab.hb-tab-expanded').length == 0) {
                    $tab.parent('div').addClass('hb-tab-expanded');
                }
            });
        };
        /* InÄ±tÄ±alize Ajax */
        var initializeAjax = function () {
            if (options.contentWrapper == '') {
                $content = $el.parent('.hb-rotate-menu-wrapper').next('div');
            }
            else {
                $content = $(options.contentWrapper);
            }
            $content.addClass('hb-rotate-content');
            $content.wrap('<div class="hb-rotate-content-wrapper"></div>');
            $content.parent('.hb-rotate-content-wrapper').append('<div class="hb-loading"></div>');
            $loading = $content.parent('.hb-rotate-content-wrapper').find('.hb-loading');
        };
        /* Toggle Image Box */
        var toggleImage = function ($a) {
            $imageBox.children('.hb-image-overlay').animate({
                opacity: 1
            }, {
                duration: options.imageOverlayDuration,
                complete: function () {
                    $imageBox.css({
                        backgroundImage: 'url("' + $a.attr('data-image') + '")'
                    });
                    $imageBox.attr('class', 'hb-image');
                    if ($a.attr('data-image-class')) {
                        $imageBox.addClass($a.attr('data-image-class'));
                    }
                    if ($a.attr('data-image-href')) {
                        $imageBox.attr('href', $a.attr('data-image-href'));
                        $imageBox.css({
                            cursor: 'pointer'
                        });
                    }
                    else {
                        $imageBox.removeAttr('href');
                        $imageBox.css({
                            cursor: 'default'
                        });
                    }
                    $imageBox.children('.hb-image-overlay').animate({
                        opacity: 0
                    }, options.imageOverlayDuration);
                }
            });
        };
        /* Toggle Tabs */
        var toggleTabs = function (nth) {
            nth++;
            var $tab = $content.children('.hb-tab.hb-tab-expanded'), $newTab = $content.children('.hb-tab:nth-child(' + nth + ')');
            if ($newTab.length != 0) {
                $tab.animate({
                    height: 0
                }, {
                    duration: options.menuRotateDuration / 2,
                    complete: function () {
                        $tab.removeClass('hb-tab-expanded');
                        $newTab.animate({
                            height: $newTab.children('.hb-tab-content').outerHeight()
                        }, {
                            duration: options.menuRotateDuration / 2,
                            complete: function () {
                                $newTab.addClass('hb-tab-expanded');
                            }
                        });
                    }
                });
            }
        };
        /* Toggle Ajax */
        var toggleAjax = function (ajaxData) {
            $.ajax({
                url: options.contentAjaxLoader,
                type: 'POST',
                async: false,
                data: {
                    postData: ajaxData
                },
                beforeSend: function () {
                    $loading.addClass('hb-loading-visible');
                    $content.html('');
                },
                success: function (result) {
                    setTimeout(function () {
                        $content.html(result);
                    }, options.menuRotateDuration);
                },
                error: function () {
                    $content.html('<div class="hb-error">404!</div>');
                },
                complete: function () {
                    setTimeout(function () {
                        $loading.removeClass('hb-loading-visible');
                        options.onAjaxLoaded();
                    }, options.menuRotateDuration);
                }
            });
        };
        /* initalize elements */
        var init = function () {
            /* beforeLoad function */
            options.onBeforeLoad();
            /* rotate menu */
            if (!$el.hasClass('hb-rotate-menu')) {
                $el.attr('class', 'hb-rotate-menu');
            }
            $el.css({
                width: options.menuSize,
                height: options.menuSize,
                transition: (options.menuRotateDuration / 1000) + 's'
            });
            /* rotate menu wrapper */
            if (!$el.parent().hasClass('hb-rotate-menu-wrapper')) {
                $el.wrap('<div class="hb-rotate-menu-wrapper"></div>');
            }
            $el.parent('.hb-rotate-menu-wrapper').css({
                width: options.menuSize,
                height: options.menuSize,
            });
            /* links */
            linkCount = $el.children('a').length;
            var linkAngle = 360 / linkCount, linkAngleNth = 0, linkWidth = 0, linkDegree = 0, divHeight = options.menuSize / 2, divPaddingTop = divHeight - options.linkSize;
            $el.children('a').each(function () {
                $(this).wrap('<div class="hb-link"></div>');
                var $div = $(this).parent('.hb-link'), $a = $(this);
                $a.attr('href', 'javascript:;');
                $a.attr('data-order', linkAngleNth);
                $a.css({
                    height: options.linkSize,
                    lineHeight: options.linkSize + 'px',
                    color: options.linkColor,
                    fontSize: options.linkSize
                });
                if ($el.find('a.active').length == 0) {
                    $a.addClass('active');
                }
                linkWidth = $a.width();
                linkDegree = linkAngle * linkAngleNth * (-1);
                if (linkWidth > linkMaxWidth) {
                    linkMaxWidth = linkWidth;
                }
                $div.css({
                    width: linkWidth,
                    height: divHeight,
                    marginLeft: (-1) * linkWidth / 2,
                    paddingTop: divPaddingTop,
                    transform: 'rotate(' + linkDegree + 'deg)',
                });
                linkAngleNth++;
            });
            linkMaxWidth += options.linkPadding * 2;
            /* svg border */
            if (options.border) {
                initializeBorder();
            }
            /* image box */
            if (options.image) {
                initializeImageBox();
            }
            if (options.contentType == 'ajax') {
                this.initializeAjax();
                this.toggleAjax($el.find('a').first().attr('data-ajax'));
            }
            else {
                initializeTabs();
            }
            /* link click function */
            $el.on('click', 'a:not(.active)', function () {
                var $a = $(this), nth = $a.attr('data-order'), newAngle = nth * linkAngle;
                linkActive = nth;
                // menu rotate
                $el.css('transform', 'rotate(' + newAngle + 'deg)');
                // activate a
                $el.find('a.active').removeClass('active');
                $a.addClass('active');
                // image change
                if (options.image) {
                    toggleImage($a);
                }
                if (options.contentType == 'ajax') {
                    toggleAjax($a.attr('data-ajax'));
                }
                else {
                    toggleTabs(nth);
                }
                /* menuClick function */
                options.onMenuClick();
            });
            /* afterLoad function */
            options.onAfterLoad();
            return this;
        };
        init();
    };
    return HubelekeMenuComponent;
}());
HubelekeMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hubeleke-menu',
        template: "\n<div id=\"rotate-menu\">\n    <a data-image=\"https://scontent.fsst1-1.fna.fbcdn.net/v/t31.0-8/18766463_10154509182312256_251697079675071171_o.jpg?oh=3f01a73e9ea67c6572527496afaf89bc&oe=59E18DF4\">Que</a>\n    <a data-image=\"https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-0/s480x480/19260318_10154583226847256_8173622326874577384_n.jpg?oh=d6cfcd235840b1527d63a529d2d87723&oe=59DF7027\">Linda</a>\n    <a data-image=\"https://scontent.fsst1-1.fna.fbcdn.net/v/t1.0-9/19260555_10154583226532256_6040476372025741147_n.jpg?oh=c873b749f2baa5724771eae731822a2f&oe=5A110470\">Que</a>\n    <a data-image=\"https://scontent.fsst1-1.fna.fbcdn.net/v/t31.0-8/19468020_10154583226242256_3664030111843262077_o.jpg?oh=e49813978105cccf9bd493ce67419f7a&oe=59CC83D5\">Sos</a>\n</div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HubelekeMenuComponent);

var _a;
//# sourceMappingURL=hubeleke-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-fiends-circle/ng-fiends-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\">\n\n  <!-- MAIN-WRAPPER -->\n  <div class=\"main-wrapper\">\n\n    <!-- content -->\n    <div class=\"content\">\n      <div class=\"col-lg-12\">\n        <div class=\"row\">\n\n          <div class=\"circle-left-ctn col-lg-8 col-md-8\">\n            <div class=\"row\">\n\n              <!-- Items to drag -->\n              <ul class=\"circle-list-ul clearfix\">\n\n                <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\" *ngFor=\"let item of items\" dnd-draggable [dragData]=\"item\" [dropZones]=\"['circles']\">\n                  <div class=\" circle-bdr \">\n                    <div class=\"circle-list-item drag-cursor \">\n                      <span class=\"fa fa-times close-btn \"></span>\n                      <div class=\"list-row \">\n                        <span class=\"item-cell \" href=\"# \">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png \" alt=\" \" width=\"100% \" height=\"100% \">\n      \t\t\t\t\t\t\t</span>\n                        <div class=\"item-cell item-dec \">\n                          <h5>{{item}}</h5>\n                          <span class=\"level-icon \"><i class=\"fa fa-star \"></i> <i class=\"fa fa-trophy \"></i>\n                                    \t<i class=\"fa fa-dot-circle-o \"></i>\n                                  \t</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"circles-ctn \" style=\"background-color: red \">\n            <div class=\"circle-right-ctn \">\n\n              <!-- Circles -->\n              <ul class=\"circle-drop-ul clearfix \">\n\n                <li class=\"col-lg-4 m-b10 circle-popover \" *ngFor=\"let circle of circles; let i= index;\">\n                  <div class=\"circle-ui circle-drop \">\n                    <span class=\"dorp-action delete \">1</span>\n                    <span class=\"dorp-action add-new \">1</span>\n                    <div class=\"circle-drop-inner \">\n                      <div class=\"inner \">\n                        <h5>{{ circle[i].name }}</h5>\n                        <span class=\"members \">0</span>\n                      </div>\n                    </div>\n\n\n                    <ul class='circle-drop-item ui-helper-reset clearfix' [dragula]=\" 'main-bag' \" [dragulaModel]='circles[i].content'>\n\n                      <li class=\"col-lg-4 col-md-4 circle-card ui-draggable ui-draggable-handle dingdon \" *ngFor=\"let content of circles[i].content; let z= index; \">\n                        <div class=\"circle-bdr \">\n                          <div class=\"circle-list-item drag-cursor \">\n                            <span class=\"fa fa-times close-btn \"></span>\n                            <div class=\"list-row \">\n                              <span class=\"item-cell \" href=\"# \">\n                                    <img  alt=\" \" height=\"100% \" src=\"../../assets/images/photo.png \" width=\"100%\n                  \" style=\"display: inline-block; height: 22px; \">\n                                </span>\n                              <div class=\"item-cell item-dec \">\n                                <h5>{{ circles[i].content[z] }}</h5>\n                                <span class=\"level-icon \"><i  class=\"fa fa-star \"></i> <i  class=\"fa fa-trophy \"></i>\n                                        <i  class=\"fa fa-dot-circle-o \"></i>\n                                  </span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n\n                    </ul>\n\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!--/ content -->\n\n  </div>\n  <!--/ MAIN-WRAPPER -->\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ng-fiends-circle/ng-fiends-circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style: none; }\n\nli {\n  list-style: none; }\n\n.circles-ctn {\n  height: 100%;\n  top: 52px;\n  right: 0;\n  overflow: auto; }\n  .circles-ctn.affix .circle-right-ctn {\n    width: 100%;\n    padding: 0; }\n\n.circle-right-ctn {\n  height: 100%;\n  padding: 0;\n  overflow-y: auto; }\n\n.circle-list-ul {\n  margin: 0;\n  padding: 30px 0; }\n  .circle-list-ul > li .circle-bdr {\n    border: 5px solid transparent;\n    margin-bottom: 10px; }\n  .circle-list-ul > li.circle-card .circle-bdr:hover {\n    border: 5px solid rgba(77, 148, 255, 0.8); }\n  .circle-list-ul > li > .circle-bdr > .circle-list-item {\n    background: #fff;\n    position: relative;\n    min-height: 80px;\n    display: table;\n    width: 100%;\n    box-shadow: 3px 3px 6px 0 rgba(102, 102, 102, 0.75); }\n    .circle-list-ul > li > .circle-bdr > .circle-list-item.add-user {\n      cursor: pointer; }\n    .circle-list-ul > li > .circle-bdr > .circle-list-item.drag-cursor {\n      cursor: url(" + __webpack_require__("../../../../../src/assets/images/cursor_hand.png") + "), auto; }\n  .circle-list-ul > li > .circle-bdr:hover > .circle-list-item .close-btn {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n    margin: 5px 5px 0 0; }\n    .circle-list-ul > li > .circle-bdr:hover > .circle-list-item .close-btn i {\n      margin: 16px 0 0 15px; }\n  .circle-list-ul > li.ui-state-highlight > .circle-bdr > .circle-list-item {\n    background: rgba(77, 148, 255, 0.4); }\n  .circle-list-ul > .circle-card {\n    position: static; }\n    .circle-list-ul > .circle-card.ui-state-highlight {\n      border: 0;\n      background: none;\n      height: auto; }\n\n.circle-drop-ul {\n  margin: 0;\n  padding: 30px 0; }\n\n.circle-list-item .list-row {\n  display: table-row; }\n\n.circle-list-item.add-user > .add-user-icon {\n  vertical-align: middle;\n  height: 80px;\n  margin-right: 15px;\n  padding: 26px 15px 0;\n  border-right: 1px solid #ccc;\n  display: inline-block; }\n\n.circle-list-item.add-user:hover h5 {\n  text-decoration: underline; }\n\n.circle-list-item h5 {\n  font-weight: 700; }\n\n.circle-list-item .close-btn {\n  display: none; }\n\n.circle-list-item > .list-row > span {\n  width: 90px;\n  padding-right: 10px;\n  height: 80px; }\n\n.circle-list-item > .list-row > .item-cell {\n  display: table-cell;\n  vertical-align: middle; }\n\n.circle-list-item > .list-row > .item-dec .level-icon {\n  margin-top: 5px;\n  float: left;\n  color: #f9532f; }\n\n.circle-left-ctn {\n  z-index: 8; }\n\n.circle-ui {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #f9532f;\n  transition: all 200ms ease-in-out;\n  margin-right: 50px;\n  text-align: center;\n  color: #fff;\n  float: left;\n  padding: 10px;\n  cursor: pointer; }\n  .circle-ui:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n    .circle-ui:hover h5 {\n      text-decoration: underline; }\n    .circle-ui:hover .circle-drop-item {\n      display: block; }\n  .circle-ui > .circle-drop-inner {\n    display: table;\n    overflow: visible;\n    width: 100%;\n    height: 100%; }\n  .circle-ui > .circle-drop-item {\n    display: none; }\n  .circle-ui.drop-hover {\n    background: #fe8a71;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .circle-ui .inner {\n    display: table-cell;\n    vertical-align: middle;\n    position: relative; }\n  .circle-ui.add-circles {\n    background: #777;\n    color: #fff;\n    position: relative; }\n  .circle-ui .circle-drop-item > li {\n    padding: 0 !important;\n    position: absolute; }\n    .circle-ui .circle-drop-item > li .item-dec {\n      display: none; }\n    .circle-ui .circle-drop-item > li .circle-bdr {\n      position: relative; }\n    .circle-ui .circle-drop-item > li .list-row > span {\n      padding: 0;\n      width: 22px;\n      height: 22px; }\n      .circle-ui .circle-drop-item > li .list-row > span img {\n        border-radius: 50%; }\n\n.content .circle-card {\n  display: block; }\n\n.content > .circle-card {\n  z-index: 999999; }\n  .content > .circle-card .item-dec {\n    display: none; }\n  .content > .circle-card .circle-bdr {\n    position: relative; }\n  .content > .circle-card .list-row > span {\n    padding: 0;\n    width: 22px;\n    height: 22px;\n    float: left; }\n\n.content > li .list-row > span img {\n  border-radius: 50%; }\n\n.dorp-action {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 25px;\n  color: #fff;\n  opacity: 0; }\n  .dorp-action.delete {\n    background: red; }\n  .dorp-action.add-new {\n    background: green; }\n\n.draggable-tooltip {\n  position: absolute;\n  bottom: -18px;\n  left: -15px;\n  width: 25px;\n  height: 25px;\n  float: left;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/dropIcon.png") + ") 0 0 no-repeat; }\n  .draggable-tooltip.delete {\n    background: url(" + __webpack_require__("../../../../../src/assets/images/dropIcon.png") + ") 0 -35px no-repeat; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-fiends-circle/ng-fiends-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgFiendsCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgFiendsCircleComponent = (function () {
    function NgFiendsCircleComponent(dragulaService, el) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.el = el;
        this.items = [];
        this.circles = [];
        this.selectedClass = 'ui-state-highlight';
        this.clickDelay = 600; // milliseconds
        this.outside = 0;
        this.outsideCircle = 0;
        this.items.push('Jaun');
        this.items.push('Alberto');
        this.items.push('Badía');
        this.items.push('Hugo');
        this.items.push('Pereira');
        this.circles[1] = { name: 'Family', content: [] };
        this.circles[2] = { name: 'Friends', content: [] };
        this.circles[3] = { name: 'Private', content: [] };
        dragulaService.setOptions('main-bag', {
            isContainer: function (el) {
                console.log('isContainer');
                return false; // only elements in drake.containers will be taken into account
            },
            moves: function (el, source, handle, sibling) {
                console.log('moves');
                //return el.classList.contains('circle-card'); // elements are always draggable by default
                return true;
            },
            accepts: function (el, target, source, sibling) {
                console.log('accepts');
                //return target.classList.contains('circle-drop'); // elements can be dropped in any of the `containers` by default
                return true;
            },
            invalid: function (el, handle) {
                console.log('invalid');
                return false; // don't prevent any drags from initiating by default
            },
            /*
            copy: function (el, source) {
              // To copy only elements in left container, the right container can still be sorted
              return source.id === 'left';
            },
            */
            copy: function (el, source) {
                console.log('IS COPYNG');
                console.log(el);
                console.log(source);
                // To copy only elements in left container, the right container can still be sorted
                return true;
            },
            copySortSource: true
        });
        dragulaService.drop.subscribe(function (value) {
            console.log('onDrop');
            console.log(value);
            _this.onDrop(value.slice(1));
        });
    }
    NgFiendsCircleComponent.prototype.onDrop = function (args) {
        var _this = this;
        var el = args[0], target = args[1], source = args[2];
        console.log('ALBERTO');
        console.log(el);
        console.log(target);
        console.log(source);
        // TODO IF
        var cloneItem;
        if ($('.' + this.selectedClass).length == 1) {
            cloneItem = $('.' + this.selectedClass)
                .removeClass('left-drop-card ui-draggable-dragging draggable' + this.selectedClass)
                .addClass('dingdon')
                .css({
                position: '',
                top: 0,
                left: 0
            }).clone();
        }
        else {
            cloneItem = $('.' + this.selectedClass + ':not(.ui-draggable-dragging)')
                .removeClass('left-drop-card draggable' + this.selectedClass)
                .addClass('dingdon')
                .css({
                position: '',
                top: 0,
                left: 0
            }).clone();
        }
        this.deleteImage(cloneItem, this);
        var dropItmeList = $(this).find('.circle-drop-item li').length;
        $(this).find('.members').text(dropItmeList);
        if (cloneItem.hasClass(this.selectedClass)) {
            $(this).find('.dorp-action.add-new').text(cloneItem.length);
            $(this).find('.dorp-action.add-new').animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, function () {
                $(_this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
            });
        }
    };
    NgFiendsCircleComponent.prototype.ngAfterViewInit = function () {
        this.ngContentID = this.el.nativeElement.firstChild.attributes[0].name;
        this.clickFunction();
    };
    NgFiendsCircleComponent.prototype.clickFunction = function () {
        $('.circle-list-ul > .circle-card')
            .on('mousedown mouseup', function (e) {
            if (e.type == 'mousedown') {
                this.lastClick = e.timeStamp; // get mousedown time
            }
            else {
                this.diffClick = e.timeStamp - this.lastClick;
                if (this.diffClick < this.clickDelay) {
                    $(this).toggleClass(this.selectedClass);
                }
            }
        });
    };
    ;
    NgFiendsCircleComponent.prototype.move = function (count, $elem) {
        var radius = 40;
        var center = [39, 39];
        var a = (-180 + count * 35) * 3.1415927 / 180; // to radians
        var x = (Math.sin(a) * radius + center[0]).toPrecision(4) + 'px';
        var y = (Math.cos(a) * radius + center[1]).toPrecision(4) + 'px';
        $elem.css({
            top: x,
            left: y,
            opacity: 1
        });
    };
    ;
    NgFiendsCircleComponent.prototype.deleteImage = function ($item, data) {
        var _this = this;
        var $trash = $(data);
        $item.each(function () {
            var subitem = $(_this);
            subitem.fadeOut(function () {
                var $list = $('ul', $trash).length ?
                    $('ul', $trash) :
                    $("<ul " + _this.ngContentID + " class='circle-drop-item ui-helper-reset clearfix'/>")
                        .appendTo($trash);
                console.log($list);
                subitem.appendTo($list).fadeIn(function () {
                    subitem.animate({
                        width: '22px',
                        position: 'absolute'
                    })
                        .find('img')
                        .animate({ height: '22px' });
                });
            });
            /*
                  subitem.draggable({
                    appendTo: '.content',
                    helper: 'clone',
                    start: function (e, ui) {
                      this.outside = 0;
                      const folderName = (ui.helper).data('id');
                      const parentClass = $(ui.helper).parents('li.circle-popover');
                      if (parentClass.has('#' + folderName)) {
                        $(ui.helper).find('.draggable-tooltip').remove();
                      } else {
                        $(ui.helper).find('.draggable-tooltip').remove();
                        $(ui.helper).find('.circle-bdr').append($("<span " + this.ngContentID + " class='draggable-tooltip'></span>"));
                      }
                    },
                    drag: function (e, ui) {
                      this.outside = 0;
                    },
                    stop: function (event, ui) {
                      const folderName = (ui.helper).data('id');
                      const parentClass = $(ui.helper).parents('li.circle-popover').attr('id');
                      if (this.outside == 0 && this.outsideCircle == 0) {
                        $(this).parents('li.circle-popover').find('.dorp-action.delete')
                          .animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, () => {
                            $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
                          });
                        const dropItmeList = $(this).parents('li.circle-popover').find('.circle-drop-item li').length;
                        $(this).parents('li.circle-popover').find('.members').text(dropItmeList - 1);
                        $(this).remove();
                      }
                    },
                    cursorAt: { left: 25 }
                  });
            */
            var liLength = $trash.find('ul li').length;
            if (liLength > 10) {
                subitem.css({
                    display: 'none'
                });
            }
            _this.move(liLength, subitem);
            subitem.attr('data-id', subitem.parents('li.circle-popover').attr('id'));
        });
    };
    ;
    NgFiendsCircleComponent.prototype.recycleImage = function ($item, data) {
        $item.fadeOut(function () {
            $item
                .appendTo('.circle-list-ul')
                .fadeIn(function () {
                $item
                    .removeAttr('style').addClass('left-drop-card').removeClass('dingdon')
                    .find('img')
                    .removeAttr('style');
            });
        });
        /*
            $item.draggable({
              helper: 'clone',
              revertDuration: 10, // grouped items animate separately, so leave this number low
              containment: '.demo',
              start: function (e, ui) {
                this.outside = 0;
                ui.helper.addClass(this.selectedClass);
              },
              stop: function (e, ui) {
                // reset group positions
                $('.' + this.selectedClass)
                  .css({
                    top: 0,
                    left: 0
                  })
                  .removeClass(this.selectedClass);
              },
              drag: function (e, ui) {
                // set selected group position to main dragged object
                // this works because the position is relative to the starting position
                $('.' + this.selectedClass)
                  .css({
                    top: ui.position.top,
                    left: ui.position.left
                  });
              }
            });
        */
    };
    ;
    return NgFiendsCircleComponent;
}());
NgFiendsCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng-fiends-circle',
        template: __webpack_require__("../../../../../src/app/ng-fiends-circle/ng-fiends-circle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-fiends-circle/ng-fiends-circle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], NgFiendsCircleComponent);

var _a, _b;
//# sourceMappingURL=ng-fiends-circle.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-tiny-circle/ng-tiny-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tiny-circle\">\n  <div class=\"viewport\">\n    <ul class=\"overview\">\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr3.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr2.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr1.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr4.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr5.jpg\" /></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"dot\"></div>\n  <div class=\"overlay\"></div>\n  <div class=\"thumb\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ng-tiny-circle/ng-tiny-circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: table; }\n  :host img {\n    border: 0;\n    pointer-events: none;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n  :host .tiny-circle {\n    height: 300px;\n    position: relative;\n    width: 300px; }\n    :host .tiny-circle .viewport {\n      height: 300px;\n      position: relative;\n      margin: 0 auto;\n      overflow: hidden;\n      width: 300px;\n      pointer-events: none; }\n    :host .tiny-circle .overview {\n      position: absolute;\n      width: 798px;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      left: 0;\n      top: 0; }\n      :host .tiny-circle .overview li {\n        height: 300px;\n        width: 300px;\n        float: left;\n        position: relative; }\n    :host .tiny-circle .overlay {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-rotatescroll.png") + ") no-repeat 0 0;\n      pointer-events: none;\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 300px;\n      width: 300px; }\n    :host .tiny-circle .thumb {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-thumb.png") + ") no-repeat 50% 50%;\n      -ms-touch-action: none;\n          touch-action: none;\n      position: absolute;\n      top: -3px;\n      cursor: pointer;\n      left: 137px;\n      width: 100px;\n      z-index: 200;\n      height: 100px; }\n    :host .tiny-circle .dot {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-dot.png") + ") no-repeat 0 0;\n      display: none;\n      height: 12px;\n      width: 12px;\n      position: absolute;\n      left: 155px;\n      top: 3px;\n      z-index: 100; }\n      :host .tiny-circle .dot span {\n        display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-tiny-circle/ng-tiny-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTinyCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgTinyCircleComponent = (function () {
    function NgTinyCircleComponent(el) {
        this.el = el;
    }
    NgTinyCircleComponent.prototype.ngAfterViewInit = function () {
        var _defaults, _name, slideCurrent = 0, angleCurrent = 0, intervalActive = false, intervalTimer = null, animationTimer = null, dragging = false, isTouchEvent = false, $dots, dotSize;
        var pluginName = 'tinycircleslider', defaults = {
            interval: false,
            intervalTime: 3500,
            dotsSnap: false,
            dotsHide: true,
            radius: 140,
            start: 0
        };
        var tinyCircle = this.el.nativeElement.querySelector('.tiny-circle'), opt = { interval: false, dotsSnap: true, dotsHide: false };
        var options = Object.assign(defaults, opt), dots = [], $viewport = tinyCircle.querySelector('.viewport'), $overview = tinyCircle.querySelector('.overview'), $slides = $overview.querySelectorAll('li'), slidesTotal = $slides.length, $thumb = tinyCircle.querySelector('.thumb'), $links = $overview.querySelectorAll('a'), containerSize = {
            width: tinyCircle.offsetWidth,
            height: tinyCircle.offsetHeight
        }, slideSize = {
            width: $slides[0].offsetWidth,
            height: $slides[0].offsetHeight
        }, thumbSize = {
            width: $thumb.offsetWidth,
            height: $thumb.offsetHeight
        }, touchEvents = 'ontouchstart' in window, hasRequestAnimationFrame = 'requestAnimationFrame' in window;
        $dots = tinyCircle.querySelectorAll('.dot');
        var dotComputedStyle = window.getComputedStyle($dots[0], null);
        dotSize = {
            width: parseInt(dotComputedStyle.getPropertyValue('width'), 10),
            height: parseInt(dotComputedStyle.getPropertyValue('height'), 10)
        };
        _defaults = defaults;
        _name = pluginName;
        var _toRadians = function (degrees) {
            return degrees * (Math.PI / 180);
        };
        var _setDots = function () {
            var docFragment = document.createDocumentFragment();
            $dots[0].remove();
            for (var index = 0; index < $slides.length; index++) {
                var slide = $slides[index];
                var $dotClone = null;
                var angle = index * 360 / slidesTotal, position = {
                    top: -Math.cos(_toRadians(angle)) * options.radius + containerSize.height / 2 - dotSize.height / 2,
                    left: Math.sin(_toRadians(angle)) * options.radius + containerSize.width / 2 - dotSize.width / 2
                };
                if ($dots) {
                    $dotClone = $dots[0].cloneNode(true);
                    $dotClone.style.top = position.top + 'px';
                    $dotClone.style.left = position.left + 'px';
                    docFragment.appendChild($dotClone);
                }
                dots.push({
                    'angle': angle,
                    'slide': slide,
                    'dot': $dotClone
                });
            }
            dots.sort(function (dotA, dotB) {
                return dotA.angle - dotB.angle;
            });
            for (var index = 0; index < dots.length; index++) {
                var dot = dots[index];
                if (dot.dot) {
                    dot.dot.classList.add('dot-' + (index + 1));
                    var att = document.createAttribute('data-slide-index');
                    att.value = index;
                    dot.dot.setAttributeNode(att);
                    var span = document.createElement('span');
                    span.innerHTML = index + 1;
                    dot.dot.appendChild(span);
                }
            }
            tinyCircle.appendChild(docFragment);
            $dots = tinyCircle.querySelectorAll('.dot');
        };
        var stop = function () {
            intervalActive = false;
            clearTimeout(intervalTimer);
            return self;
        };
        var _page = function (event) {
            return {
                x: isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
                y: isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
            };
        };
        var _sanitizeAngle = function (degrees) {
            return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
        };
        var _toDegrees = function (radians) {
            return radians * 180 / Math.PI;
        };
        var _querySelectorShortestPath = function (angleA, angleB) {
            var angleCW, angleCCW, angleShortest;
            if (angleA > angleB) {
                angleCW = angleA - angleB;
                angleCCW = -(angleB + 360 - angleA);
            }
            else {
                angleCW = angleA + 360 - angleB;
                angleCCW = -(angleB - angleA);
            }
            angleShortest = angleCW < Math.abs(angleCCW) ? angleCW : angleCCW;
            return [angleShortest, angleCCW, angleCW];
        };
        var _querySelectorClosestSlide = function (angle) {
            var closestDotAngleToAngleCCW = 9999, closestDotAngleToAngleCW = 9999, closestDotAngleToAngle = 9999, closestSlideCCW = 0, closestSlideCW = 0, closestSlide = 0;
            for (var index = 0; index < dots.length; index++) {
                var dot = dots[index];
                var delta = _querySelectorShortestPath(dot.angle, angle);
                if (Math.abs(delta[0]) < Math.abs(closestDotAngleToAngle)) {
                    closestDotAngleToAngle = delta[0];
                    closestSlide = index;
                }
                if (Math.abs(delta[1]) < Math.abs(closestDotAngleToAngleCCW)) {
                    closestDotAngleToAngleCCW = delta[1];
                    closestSlideCCW = index;
                }
                if (Math.abs(delta[2]) < Math.abs(closestDotAngleToAngleCW)) {
                    closestDotAngleToAngleCW = delta[2];
                    closestSlideCW = index;
                }
            }
            return [
                [closestSlide, closestSlideCCW, closestSlideCW],
                [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
            ];
        };
        var _setCSS = function (angle, fireCallback) {
            var closestSlidesAndAngles = _querySelectorClosestSlide(angle);
            var closestSlides = closestSlidesAndAngles[0];
            var closestAngles = closestSlidesAndAngles[1];
            $overview.style.left = (-(closestSlides[1] * slideSize.width + Math.abs(closestAngles[1]) * slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2])))) + 'px';
            $thumb.style.top = -Math.cos(_toRadians(angle)) * options.radius + (containerSize.height / 2 - thumbSize.height / 2) + 'px';
            $thumb.style.left = Math.sin(_toRadians(angle)) * options.radius + (containerSize.width / 2 - thumbSize.width / 2) + 'px';
            if (fireCallback) {
                // The move event will trigger when the carousel slides to a new slide.
                //tinyCircle.dispatchEvent('move', [$slides[slideCurrent], slideCurrent]);
            }
        };
        var _stepMove = function (angleStep, angleDelta, stepInterval) {
            var angleStepNew = angleStep, endAnimation = false;
            if (Math.abs(angleStep) > Math.abs(angleDelta)) {
                angleStepNew = -angleDelta;
                endAnimation = true;
            }
            else if (hasRequestAnimationFrame) {
                requestAnimationFrame(function () {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                });
            }
            else {
                animationTimer = setTimeout(function () {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                }, stepInterval);
            }
            angleCurrent = _sanitizeAngle(angleCurrent - angleStepNew);
            _setCSS(angleCurrent, endAnimation);
        };
        var start = function (first) {
            if (options.interval) {
                intervalActive = true;
                _setTimer(first);
            }
            return self;
        };
        var move = function (index) {
            var slideIndex = Math.max(0, isNaN(index) ? slideCurrent : index);
            if (slideIndex >= slidesTotal) {
                slideIndex = 0;
            }
            var angleDestination = dots[slideIndex] && dots[slideIndex].angle, angleDelta = _querySelectorShortestPath(angleDestination, angleCurrent)[0], angleStep = angleDelta > 0 ? -2 : 2;
            slideCurrent = slideIndex;
            _stepMove(angleStep, angleDelta, 50);
            start(0);
            return self;
        };
        var _setTimer = function (slideFirst) {
            intervalTimer = setTimeout(function () {
                move(slideCurrent + 1);
            }, (slideFirst ? 50 : options.intervalTime));
        };
        var _endDrag = function (event) {
            if (event.target.classList.contains('dot')) {
                return false;
            }
            dragging = false;
            event.preventDefault();
            document.removeEventListener('mousemove');
            document.removeEventListener('mouseup');
            $thumb.removeEventListener('mouseup');
            if (options.dotsHide) {
                $dots.stop(true, true).fadeOut('slow');
            }
            if (options.dotsSnap) {
                move(_querySelectorClosestSlide(angleCurrent)[0][0]);
            }
        };
        var _drag = function (event) {
            var containerOffset = tinyCircle.getBoundingClientRect(), thumbPositionNew = {
                left: _page(event).x - containerOffset.left - (containerSize.width / 2),
                top: _page(event).y - containerOffset.top - (containerSize.height / 2)
            };
            angleCurrent = _sanitizeAngle(_toDegrees(Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)));
            if (!hasRequestAnimationFrame) {
                _setCSS(angleCurrent);
            }
            return false;
        };
        var _dragAnimationLoop = function () {
            if (dragging) {
                _setCSS(angleCurrent);
                requestAnimationFrame(function () {
                    _dragAnimationLoop();
                });
            }
        };
        var _startDrag = function (event) {
            event.preventDefault();
            isTouchEvent = event.type == 'touchstart';
            dragging = true;
            if (event.target.classList.contains('dot')) {
                return false;
            }
            stop();
            document.addEventListener('mousemove', _drag);
            document.addEventListener('mouseup', _endDrag);
            $thumb.addEventListener('mouseup', _endDrag);
            if (options.dotsHide) {
                $dots.stop(true, true).fadeIn('slow');
            }
            if (hasRequestAnimationFrame) {
                _dragAnimationLoop();
            }
        };
        var snapHandler = function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            stop();
            move(event.target.getAttribute('data-slide-index'));
            return false;
        };
        var _setEvents = function () {
            if (touchEvents) {
                tinyCircle.ontouchstart = _startDrag;
                tinyCircle.ontouchmove = _drag;
                tinyCircle.ontouchend = _endDrag;
            }
            $thumb.addEventListener('mousedown', _startDrag);
            if (touchEvents) {
                for (var index = 0; index < dots.length; index++) {
                    dots[index].dot.addEventListener('touchstart', snapHandler);
                }
            }
            for (var index = 0; index < dots.length; index++) {
                dots[index].dot.addEventListener('mousedown', snapHandler);
            }
        };
        var _initialize = function () {
            _setDots();
            var clone = $slides[0].cloneNode(true);
            $overview.appendChild(clone);
            $overview.style.width = slideSize.width * ($slides.length + 1) + 'px';
            _setEvents();
            _setCSS(0);
            move(options.start);
            return self;
        };
        _initialize();
    };
    return NgTinyCircleComponent;
}());
NgTinyCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng-tiny-circle',
        template: __webpack_require__("../../../../../src/app/ng-tiny-circle/ng-tiny-circle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-tiny-circle/ng-tiny-circle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NgTinyCircleComponent);

var _a;
//# sourceMappingURL=ng-tiny-circle.component.js.map

/***/ }),

/***/ "../../../../../src/app/ong-fiends-circle/ong-fiends-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"col-lg-12\">\n    <div class=\"row\">\n\n      <div class=\"circle-left-ctn col-lg-8 col-md-8\">\n        <div class=\"row\">\n\n          <!-- Items to drag -->\n          <ul class=\"circle-list-ul clearfix\">\n\n            <li class=\"col-lg-4 col-md-4 circle-card left-drop-card\" *ngFor=\"let people of peoples\" dnd-draggable [dragData]=\"people\"\n              [dropZones]=\"getGroupsNames()\">\n              <div class=\" circle-bdr\">\n                <div class=\"circle-list-item drag-cursor\">\n                  <span class=\"fa fa-times close-btn\"></span>\n                  <div class=\"list-row\">\n                    <span class=\"item-cell\" href=\"#\">\n        \t\t\t\t\t\t\t<img src=\"../../assets/images/photo.png\" alt=\"\" width=\"100%\" height=\"100%\">\n      \t\t\t\t\t\t\t</span>\n                    <div class=\"item-cell item-dec\">\n                      <h5>{{ people.name }}</h5>\n                      <span class=\"level-icon\"><i class=\"fa fa-star\"></i> <i class=\"fa fa-trophy\"></i>\n                                    \t<i class=\"fa fa-dot-circle-o\"></i>\n                                  \t</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"circles-ctn\" style=\"background-color: red\">\n        <div class=\"circle-right-ctn\">\n\n          <!-- Circles -->\n          <ul class=\"circle-drop-ul clearfix\">\n\n            <li class=\"col-lg-4 m-b10 circle-popover\" *ngFor=\"let group of groups; let i = index\" dnd-droppable (onDropSuccess)=\"addPeople($event, group.name)\"\n              [dropZones]=\"[group.name]\">\n              <div class=\"circle-ui circle-drop\">\n                <span class=\"dorp-action delete\">1</span>\n                <span class=\"dorp-action add-new\">1</span>\n                <div class=\"circle-drop-inner\">\n                  <div class=\"inner\">\n                    <h5>{{ group.name }}</h5>\n                    <span class=\"members\">0</span>\n                  </div>\n                </div>\n\n                <ul class='circle-drop-item ui-helper-reset clearfix'>\n\n                  <li class=\"col-lg-4 col-md-4 circle-card ui-draggable ui-draggable-handle dingdon\" *ngFor=\"let people of groups[i].peoples\"\n                    [style.left]=\"people.style.left\" [style.top]=\"people.style.top\" [style.width]=\"people.style.width\" [style.opacity]=\"people.style.opacity\">\n\n                    <div class=\"circle-bdr\">\n                      <div class=\"circle-list-item drag-cursor\">\n                        <span class=\"fa fa-times close-btn\"></span>\n                        <div class=\"list-row\">\n                          <span class=\"item-cell\" href=\"#\">\n                                    <img  alt=\"\" height=\"100%\" src=\"../../assets/images/photo.png\" width=\"100%\" style=\"display: inline-block; height: 22px;\">\n                                </span>\n                          <div class=\"item-cell item-dec\">\n                            <h5>{{ people.name }}</h5>\n                            <span class=\"level-icon\"><i  class=\"fa fa-star\"></i> <i  class=\"fa fa-trophy\"></i>\n                                        <i  class=\"fa fa-dot-circle-o\"></i>\n                                  </span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </li>\n\n                </ul>\n\n              </div>\n            </li>\n\n          </ul>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ong-fiends-circle/ong-fiends-circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style: none; }\n\nli {\n  list-style: none; }\n\n.circles-ctn {\n  height: 100%;\n  top: 52px;\n  right: 0;\n  overflow: auto; }\n  .circles-ctn.affix .circle-right-ctn {\n    width: 100%;\n    padding: 0; }\n\n.circle-right-ctn {\n  height: 100%;\n  padding: 0;\n  overflow-y: auto; }\n\n.circle-list-ul {\n  margin: 0;\n  padding: 30px 0; }\n  .circle-list-ul > li .circle-bdr {\n    border: 5px solid transparent;\n    margin-bottom: 10px; }\n  .circle-list-ul > li.circle-card .circle-bdr:hover {\n    border: 5px solid rgba(77, 148, 255, 0.8); }\n  .circle-list-ul > li > .circle-bdr > .circle-list-item {\n    background: #fff;\n    position: relative;\n    min-height: 80px;\n    display: table;\n    width: 100%;\n    box-shadow: 3px 3px 6px 0 rgba(102, 102, 102, 0.75); }\n    .circle-list-ul > li > .circle-bdr > .circle-list-item.add-user {\n      cursor: pointer; }\n    .circle-list-ul > li > .circle-bdr > .circle-list-item.drag-cursor {\n      cursor: url(" + __webpack_require__("../../../../../src/assets/images/cursor_hand.png") + "), auto; }\n  .circle-list-ul > li > .circle-bdr:hover > .circle-list-item .close-btn {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n    margin: 5px 5px 0 0; }\n    .circle-list-ul > li > .circle-bdr:hover > .circle-list-item .close-btn i {\n      margin: 16px 0 0 15px; }\n  .circle-list-ul > li.ui-state-highlight > .circle-bdr > .circle-list-item {\n    background: rgba(77, 148, 255, 0.4); }\n  .circle-list-ul > .circle-card {\n    position: static; }\n    .circle-list-ul > .circle-card.ui-state-highlight {\n      border: 0;\n      background: none;\n      height: auto; }\n\n.circle-drop-ul {\n  margin: 0;\n  padding: 30px 0; }\n\n.circle-list-item .list-row {\n  display: table-row; }\n\n.circle-list-item.add-user > .add-user-icon {\n  vertical-align: middle;\n  height: 80px;\n  margin-right: 15px;\n  padding: 26px 15px 0;\n  border-right: 1px solid #ccc;\n  display: inline-block; }\n\n.circle-list-item.add-user:hover h5 {\n  text-decoration: underline; }\n\n.circle-list-item h5 {\n  font-weight: 700; }\n\n.circle-list-item .close-btn {\n  display: none; }\n\n.circle-list-item > .list-row > span {\n  width: 90px;\n  padding-right: 10px;\n  height: 80px; }\n\n.circle-list-item > .list-row > .item-cell {\n  display: table-cell;\n  vertical-align: middle; }\n\n.circle-list-item > .list-row > .item-dec .level-icon {\n  margin-top: 5px;\n  float: left;\n  color: #f9532f; }\n\n.circle-left-ctn {\n  z-index: 8; }\n\n.circle-ui {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #f9532f;\n  transition: all 200ms ease-in-out;\n  margin-right: 50px;\n  text-align: center;\n  color: #fff;\n  float: left;\n  padding: 10px;\n  cursor: pointer; }\n  .circle-ui:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n    .circle-ui:hover h5 {\n      text-decoration: underline; }\n    .circle-ui:hover .circle-drop-item {\n      display: block; }\n  .circle-ui > .circle-drop-inner {\n    display: table;\n    overflow: visible;\n    width: 100%;\n    height: 100%; }\n  .circle-ui > .circle-drop-item {\n    display: none; }\n  .circle-ui.drop-hover {\n    background: #fe8a71;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .circle-ui .inner {\n    display: table-cell;\n    vertical-align: middle;\n    position: relative; }\n  .circle-ui.add-circles {\n    background: #777;\n    color: #fff;\n    position: relative; }\n  .circle-ui .circle-drop-item > li {\n    padding: 0 !important;\n    position: absolute; }\n    .circle-ui .circle-drop-item > li .item-dec {\n      display: none; }\n    .circle-ui .circle-drop-item > li .circle-bdr {\n      position: relative; }\n    .circle-ui .circle-drop-item > li .list-row > span {\n      padding: 0;\n      width: 22px;\n      height: 22px; }\n      .circle-ui .circle-drop-item > li .list-row > span img {\n        border-radius: 50%; }\n\n.content .circle-card {\n  display: block; }\n\n.content > .circle-card {\n  z-index: 999999; }\n  .content > .circle-card .item-dec {\n    display: none; }\n  .content > .circle-card .circle-bdr {\n    position: relative; }\n  .content > .circle-card .list-row > span {\n    padding: 0;\n    width: 22px;\n    height: 22px;\n    float: left; }\n\n.content > li .list-row > span img {\n  border-radius: 50%; }\n\n.dorp-action {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 25px;\n  color: #fff;\n  opacity: 0; }\n  .dorp-action.delete {\n    background: red; }\n  .dorp-action.add-new {\n    background: green; }\n\n.draggable-tooltip {\n  position: absolute;\n  bottom: -18px;\n  left: -15px;\n  width: 25px;\n  height: 25px;\n  float: left;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/dropIcon.png") + ") 0 0 no-repeat; }\n  .draggable-tooltip.delete {\n    background: url(" + __webpack_require__("../../../../../src/assets/images/dropIcon.png") + ") 0 -35px no-repeat; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ong-fiends-circle/ong-fiends-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OngFiendsCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemStyle = (function () {
    function ItemStyle(left, top, width, opacity) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.opacity = opacity;
    }
    return ItemStyle;
}());
var People = (function () {
    function People(name, style) {
        this.name = name;
        this.style = style;
    }
    return People;
}());
var Group = (function () {
    function Group(name, peoples) {
        this.name = name;
        this.peoples = peoples;
    }
    return Group;
}());
var OngFiendsCircleComponent = (function () {
    function OngFiendsCircleComponent(el) {
        this.el = el;
        this.conf = {
            radius: 60,
            groupItemWidth: 22,
            itemsPerGroup: 10
        };
        this.peoples = [];
        this.groups = [new Group('Friends', []), new Group('Family', []), new Group('Private', [])];
        this.peoples.push(new People('Blue Shoes'));
        this.peoples.push(new People('Good Jacket'));
        this.peoples.push(new People('Red Shirt'));
        this.peoples.push(new People('Blue Jeans'));
    }
    OngFiendsCircleComponent.prototype.ngAfterViewInit = function () {
        var circle = this.el.nativeElement.querySelector('.circle-drop');
        var centerX = (circle.offsetWidth / 2) - (this.conf.groupItemWidth / 2);
        var centerY = (circle.offsetHeight / 2) - (this.conf.groupItemWidth / 2);
        this.center = [centerX, centerY];
    };
    OngFiendsCircleComponent.prototype.addPeople = function ($event, groupName) {
        var peopleDraged = $event.dragData;
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.name == groupName) {
                var coord = this.coord(group.peoples.length + 1);
                var style = { left: coord.x, top: coord.y, width: this.conf.groupItemWidth + 'px', opacity: '1' };
                group.peoples.push(new People(peopleDraged.name, style));
            }
        }
    };
    OngFiendsCircleComponent.prototype.coord = function (count) {
        var itemAngle = 360 / this.conf.itemsPerGroup;
        var a = (-180 + count * itemAngle) * Math.PI / 180; // to radians
        var x = (Math.sin(a) * this.conf.radius + this.center[0]).toPrecision(4) + 'px';
        var y = (Math.cos(a) * this.conf.radius + this.center[1]).toPrecision(4) + 'px';
        return { x: x, y: y };
    };
    OngFiendsCircleComponent.prototype.getGroupsNames = function () {
        return this.groups.map(function (group) { return group.name; });
    };
    return OngFiendsCircleComponent;
}());
OngFiendsCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ong-fiends-circle',
        template: __webpack_require__("../../../../../src/app/ong-fiends-circle/ong-fiends-circle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ong-fiends-circle/ong-fiends-circle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], OngFiendsCircleComponent);

var _a;
//# sourceMappingURL=ong-fiends-circle.component.js.map

/***/ }),

/***/ "../../../../../src/app/ong-tiny-circle/ong-tiny-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tiny-circle\">\n  <div class=\"viewport\">\n    <ul class=\"overview\">\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr3.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr2.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr1.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr4.jpg\" /></a>\n      </li>\n      <li>\n        <a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr5.jpg\" /></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"dot\"></div>\n  <div class=\"overlay\"></div>\n  <div class=\"thumb\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ong-tiny-circle/ong-tiny-circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: table; }\n  :host img {\n    border: 0;\n    pointer-events: none;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n  :host .tiny-circle {\n    height: 350px;\n    padding: 25px;\n    position: relative;\n    width: 350px; }\n    :host .tiny-circle .viewport {\n      height: 350px;\n      position: relative;\n      margin: 0 auto;\n      overflow: hidden;\n      width: 350px;\n      pointer-events: none; }\n    :host .tiny-circle .overview {\n      position: absolute;\n      width: 798px;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      left: 0;\n      top: 0; }\n      :host .tiny-circle .overview li {\n        height: 350px;\n        width: 350px;\n        float: left;\n        position: relative; }\n    :host .tiny-circle .overlay {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-rotatescroll2.png") + ") no-repeat 0 0;\n      pointer-events: none;\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 400px;\n      width: 400px; }\n    :host .tiny-circle .thumb {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-thumb.png") + ") no-repeat 50% 50%;\n      -ms-touch-action: none;\n          touch-action: none;\n      position: absolute;\n      top: -3px;\n      cursor: pointer;\n      left: 137px;\n      width: 100px;\n      z-index: 200;\n      height: 100px; }\n    :host .tiny-circle .dot {\n      cursor: pointer;\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-dot3.png") + ") no-repeat 0 0;\n      height: 22px;\n      text-align: center;\n      line-height: 22px;\n      font-size: 10px;\n      color: #555;\n      width: 22px;\n      position: absolute;\n      left: 155px;\n      top: 3px;\n      z-index: 100; }\n      :host .tiny-circle .dot span {\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ong-tiny-circle/ong-tiny-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OngTinyCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OngTinyCircleComponent = (function () {
    function OngTinyCircleComponent(el) {
        this.el = el;
        this.defaults = {
            dotsSnap: false,
            dotsHide: true,
            radius: 140,
            start: 0
        };
        this.state = {
            slideCurrent: 0,
            angleCurrent: 0,
            animationTimer: null,
            dragging: false,
            isTouchEvent: false,
            dots: null,
            dotSize: null,
            containerSize: null,
            slideSize: null,
            thumbSize: null,
            touchEvents: null,
            hasRequestAnimationFrame: null
        };
        this.dom = {
            $container: null,
            $dots: null,
            $viewport: null,
            $overview: null,
            $slides: null,
            slidesTotal: null,
            $thumb: null,
            $links: null
        };
    }
    OngTinyCircleComponent.prototype.ngAfterViewInit = function () {
        this._initialize();
    };
    OngTinyCircleComponent.prototype._toRadians = function (degrees) {
        return degrees * (Math.PI / 180);
    };
    ;
    OngTinyCircleComponent.prototype._sanitizeAngle = function (degrees) {
        return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
    };
    ;
    OngTinyCircleComponent.prototype._toDegrees = function (radians) {
        return radians * 180 / Math.PI;
    };
    ;
    OngTinyCircleComponent.prototype._setDots = function () {
        var docFragment = document.createDocumentFragment();
        this.dom.$dots[0].remove();
        for (var index = 0; index < this.dom.$slides.length; index++) {
            var slide = this.dom.$slides[index];
            var $dotClone = null;
            var angle = index * 360 / this.dom.slidesTotal, position = {
                top: -Math.cos(this._toRadians(angle)) * this.options.radius + this.state.containerSize.height / 2 - this.state.dotSize.height / 2,
                left: Math.sin(this._toRadians(angle)) * this.options.radius + this.state.containerSize.width / 2 - this.state.dotSize.width / 2
            };
            if (this.dom.$dots) {
                $dotClone = this.dom.$dots[0].cloneNode(true);
                $dotClone.style.top = position.top + 'px';
                $dotClone.style.left = position.left + 'px';
                docFragment.appendChild($dotClone);
            }
            this.state.dots.push({
                'angle': angle,
                'slide': slide,
                'dot': $dotClone
            });
        }
        this.state.dots.sort(function (dotA, dotB) {
            return dotA.angle - dotB.angle;
        });
        for (var index = 0; index < this.state.dots.length; index++) {
            var dot = this.state.dots[index];
            if (dot.dot) {
                dot.dot.classList.add('dot-' + (index + 1));
                var att = document.createAttribute('data-slide-index');
                att.value = index;
                dot.dot.setAttributeNode(att);
                var span = document.createElement('span');
                span.innerHTML = index + 1;
                dot.dot.appendChild(span);
            }
        }
        this.dom.$container.appendChild(docFragment);
        this.dom.$dots = this.dom.$container.querySelectorAll('.dot');
    };
    ;
    OngTinyCircleComponent.prototype._page = function (event) {
        return {
            x: this.state.isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
            y: this.state.isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
        };
    };
    ;
    OngTinyCircleComponent.prototype._querySelectorShortestPath = function (angleA, angleB) {
        var angleCW, angleCCW, angleShortest;
        if (angleA > angleB) {
            angleCW = angleA - angleB;
            angleCCW = -(angleB + 360 - angleA);
        }
        else {
            angleCW = angleA + 360 - angleB;
            angleCCW = -(angleB - angleA);
        }
        angleShortest = angleCW < Math.abs(angleCCW) ? angleCW : angleCCW;
        return [angleShortest, angleCCW, angleCW];
    };
    ;
    OngTinyCircleComponent.prototype._querySelectorClosestSlide = function (angle) {
        var closestDotAngleToAngleCCW = 9999, closestDotAngleToAngleCW = 9999, closestDotAngleToAngle = 9999, closestSlideCCW = 0, closestSlideCW = 0, closestSlide = 0;
        for (var index = 0; index < this.state.dots.length; index++) {
            var dot = this.state.dots[index];
            var delta = this._querySelectorShortestPath(dot.angle, angle);
            if (Math.abs(delta[0]) < Math.abs(closestDotAngleToAngle)) {
                closestDotAngleToAngle = delta[0];
                closestSlide = index;
            }
            if (Math.abs(delta[1]) < Math.abs(closestDotAngleToAngleCCW)) {
                closestDotAngleToAngleCCW = delta[1];
                closestSlideCCW = index;
            }
            if (Math.abs(delta[2]) < Math.abs(closestDotAngleToAngleCW)) {
                closestDotAngleToAngleCW = delta[2];
                closestSlideCW = index;
            }
        }
        return [
            [closestSlide, closestSlideCCW, closestSlideCW],
            [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
        ];
    };
    ;
    OngTinyCircleComponent.prototype._setCSS = function (angle, fireCallback) {
        var closestSlidesAndAngles = this._querySelectorClosestSlide(angle);
        var closestSlides = closestSlidesAndAngles[0];
        var closestAngles = closestSlidesAndAngles[1];
        this.dom.$overview.style.left = (-(closestSlides[1] * this.state.slideSize.width + Math.abs(closestAngles[1]) * this.state.slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2])))) + 'px';
        this.dom.$thumb.style.top = (-Math.cos(this._toRadians(angle)) * this.options.radius + (this.state.containerSize.height / 2 - this.state.thumbSize.height / 2)) + 'px';
        this.dom.$thumb.style.left = (Math.sin(this._toRadians(angle)) * this.options.radius + (this.state.containerSize.width / 2 - this.state.thumbSize.width / 2)) + 'px';
        if (fireCallback) {
            // The move event will trigger when the carousel slides to a new slide.
            //$container.dispatchEvent('move', [$slides[slideCurrent], slideCurrent]);
        }
    };
    ;
    OngTinyCircleComponent.prototype._stepMove = function (angleStep, angleDelta, stepInterval) {
        var _this = this;
        var angleStepNew = angleStep, endAnimation = false;
        if (Math.abs(angleStep) > Math.abs(angleDelta)) {
            angleStepNew = -angleDelta;
            endAnimation = true;
        }
        else if (this.state.hasRequestAnimationFrame) {
            requestAnimationFrame(function () {
                _this._stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
            });
        }
        else {
            this.state.animationTimer = setTimeout(function () {
                _this._stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
            }, stepInterval);
        }
        this.state.angleCurrent = this._sanitizeAngle(this.state.angleCurrent - angleStepNew);
        this._setCSS(this.state.angleCurrent, endAnimation);
    };
    ;
    OngTinyCircleComponent.prototype.move = function (index) {
        var slideIndex = Math.max(0, isNaN(index) ? this.state.slideCurrent : index);
        if (slideIndex >= this.dom.slidesTotal) {
            slideIndex = 0;
        }
        var angleDestination = this.state.dots[slideIndex] && this.state.dots[slideIndex].angle, angleDelta = this._querySelectorShortestPath(angleDestination, this.state.angleCurrent)[0], angleStep = angleDelta > 0 ? -2 : 2;
        this.state.slideCurrent = slideIndex;
        this._stepMove(angleStep, angleDelta, 50);
    };
    ;
    OngTinyCircleComponent.prototype._endDrag = function (event, self) {
        if (event.target.classList.contains('dot')) {
            return false;
        }
        self.state.dragging = false;
        event.preventDefault();
        self.dom.$container.removeEventListener('mousemove');
        self.dom.$container.removeEventListener('mouseup');
        self.dom.$thumb.removeEventListener('mouseup');
        if (self.options.dotsHide) {
            self.state.$dots.stop(true, true).fadeOut('slow');
        }
        if (self.options.dotsSnap) {
            self.move(self._querySelectorClosestSlide(self.state.angleCurrent)[0][0]);
        }
    };
    ;
    OngTinyCircleComponent.prototype._drag = function (event, self) {
        var containerOffset = self.dom.$container.getBoundingClientRect(), thumbPositionNew = {
            left: self._page(event).x - containerOffset.left - (self.state.containerSize.width / 2),
            top: self._page(event).y - containerOffset.top - (self.state.containerSize.height / 2)
        };
        self.state.angleCurrent = self._sanitizeAngle(self._toDegrees(Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)));
        if (!self.dom.hasRequestAnimationFrame) {
            self._setCSS(self.state.angleCurrent);
        }
        return false;
    };
    ;
    OngTinyCircleComponent.prototype._dragAnimationLoop = function () {
        var _this = this;
        if (this.state.dragging) {
            this._setCSS(this.state.angleCurrent);
            requestAnimationFrame(function () {
                _this._dragAnimationLoop();
            });
        }
    };
    ;
    OngTinyCircleComponent.prototype._startDrag = function (event, self) {
        event.preventDefault();
        self.state.isTouchEvent = event.type == 'touchstart';
        self.state.dragging = true;
        if (event.target.classList.contains('dot')) {
            return false;
        }
        self.dom.$container.addEventListener('mousemove', function (e) { self._drag(e, self); });
        self.dom.$container.addEventListener('mouseup', function (e) { self._endDrag(e, self); });
        self.dom.$thumb.addEventListener('mouseup', function (e) { self._endDrag(e, self); });
        if (self.options.dotsHide) {
            self.state.$dots.stop(true, true).fadeIn('slow');
        }
        if (self.dom.hasRequestAnimationFrame) {
            self._dragAnimationLoop();
        }
    };
    ;
    OngTinyCircleComponent.prototype.snapHandler = function (event, self) {
        event.preventDefault();
        event.stopImmediatePropagation();
        self.move(event.target.getAttribute('data-slide-index'));
        return false;
    };
    ;
    OngTinyCircleComponent.prototype._setEvents = function () {
        var _this = this;
        this.dom.$thumb.addEventListener('mousedown', function (e) { _this._startDrag(e, _this); });
        for (var index = 0; index < this.state.dots.length; index++) {
            this.state.dots[index].dot.addEventListener('mousedown', function (e) { _this.snapHandler(e, _this); });
        }
        if (this.state.touchEvents) {
            this.dom.$container.addEventListener('ontouchstart', function (e) { _this._startDrag(e, _this); });
            this.dom.$container.addEventListener('ontouchmove', function (e) { _this._drag(e, _this); });
            this.dom.$container.addEventListener('ontouchend', function (e) { _this._endDrag(e, _this); });
            for (var index = 0; index < this.state.dots.length; index++) {
                this.state.dots[index].dot.addEventListener('touchstart', function (e) { _this.snapHandler(e, _this); });
            }
        }
    };
    ;
    OngTinyCircleComponent.prototype._bindDom = function () {
        this.dom.$container = this.el.nativeElement.querySelector('.tiny-circle');
        this.dom.$viewport = this.dom.$container.querySelector('.viewport');
        this.dom.$overview = this.dom.$container.querySelector('.overview');
        this.dom.$slides = this.dom.$overview.querySelectorAll('li');
        this.dom.slidesTotal = this.dom.$slides.length;
        this.dom.$thumb = this.dom.$container.querySelector('.thumb');
        this.dom.$links = this.dom.$overview.querySelectorAll('a');
        this.dom.$dots = this.dom.$container.querySelectorAll('.dot');
    };
    ;
    OngTinyCircleComponent.prototype._initState = function () {
        this.state.dots = [];
        this.state.containerSize = {
            width: this.dom.$container.offsetWidth,
            height: this.dom.$container.offsetHeight
        };
        this.state.slideSize = {
            width: this.dom.$slides[0].offsetWidth,
            height: this.dom.$slides[0].offsetHeight
        };
        this.state.thumbSize = {
            width: this.dom.$thumb.offsetWidth,
            height: this.dom.$thumb.offsetHeight
        };
        this.state.touchEvents = 'ontouchstart' in window;
        this.state.hasRequestAnimationFrame = 'requestAnimationFrame' in window;
        var dotComputedStyle = window.getComputedStyle(this.dom.$dots[0], null);
        this.state.dotSize = {
            width: parseInt(dotComputedStyle.getPropertyValue('width'), 10),
            height: parseInt(dotComputedStyle.getPropertyValue('height'), 10)
        };
    };
    ;
    OngTinyCircleComponent.prototype._initialize = function () {
        this.options = Object.assign(this.defaults, { dotsSnap: true, dotsHide: false, radius: 184 });
        this._bindDom();
        this._initState();
        this._setDots();
        var clone = this.dom.$slides[0].cloneNode(true);
        this.dom.$overview.appendChild(clone);
        this.dom.$overview.style.width = this.state.slideSize.width * (this.dom.$slides.length + 1) + 'px';
        this._setEvents();
        this._setCSS(0);
        this.move(this.options.start);
    };
    ;
    return OngTinyCircleComponent;
}());
OngTinyCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ong-tiny-circle',
        template: __webpack_require__("../../../../../src/app/ong-tiny-circle/ong-tiny-circle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ong-tiny-circle/ong-tiny-circle.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], OngTinyCircleComponent);

var _a;
//# sourceMappingURL=ong-tiny-circle.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        if (type === void 0) { type = 'html'; }
        switch (type) {
            case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/tiny-circle/tiny-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tiny-circle\">\n\t\t<div class=\"viewport\">\n\t\t\t<ul class=\"overview\">\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr3.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr2.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr1.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr4.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr5.jpg\" /></a></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"dot\"></div>\n\t\t<div class=\"overlay\"></div>\n\t\t<div class=\"thumb\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tiny-circle/tiny-circle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: table; }\n  :host img {\n    border: 0;\n    pointer-events: none;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n  :host .tiny-circle {\n    height: 350px;\n    padding: 25px;\n    position: relative;\n    width: 350px; }\n    :host .tiny-circle .viewport {\n      height: 350px;\n      position: relative;\n      margin: 0 auto;\n      overflow: hidden;\n      width: 350px; }\n    :host .tiny-circle .overview {\n      background-color: #efefef;\n      position: absolute;\n      width: 798px;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      left: 0;\n      top: 0; }\n      :host .tiny-circle .overview li {\n        height: 350px;\n        width: 350px;\n        margin: 0 20px 0 0;\n        float: left;\n        position: relative; }\n    :host .tiny-circle .overlay {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-rotatescroll2.png") + ") no-repeat 0 0;\n      pointer-events: none;\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 400px;\n      width: 400px; }\n    :host .tiny-circle .thumb {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-thumb.png") + ") no-repeat 50% 50%;\n      position: absolute;\n      top: -3px;\n      cursor: pointer;\n      left: 137px;\n      width: 100px;\n      z-index: 200;\n      height: 100px; }\n    :host .tiny-circle .dot {\n      cursor: pointer;\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-dot3.png") + ") no-repeat 0 0;\n      height: 22px;\n      text-align: center;\n      line-height: 22px;\n      font-size: 10px;\n      color: #555;\n      width: 22px;\n      position: absolute;\n      left: 155px;\n      top: 3px;\n      z-index: 100; }\n      :host .tiny-circle .dot span {\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tiny-circle/tiny-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyCircleComponent = (function () {
    function TinyCircleComponent() {
    }
    TinyCircleComponent.prototype.ngAfterViewInit = function () {
        var _defaults, _name, slideCurrent = 0, angleCurrent = 0, intervalActive = false, intervalTimer = null, animationTimer = null, dragging = false, isTouchEvent = false, $dots, dotSize;
        var pluginName = 'tinycircleslider', defaults = {
            interval: false,
            intervalTime: 3500,
            dotsSnap: false,
            dotsHide: true,
            radius: 140,
            start: 0
        };
        var $container = $('.tiny-circle'), opt = { interval: false, dotsSnap: true, dotsHide: false, radius: 184 };
        var options = $.extend({}, defaults, opt), dots = [], $viewport = $container.find('.viewport'), $overview = $container.find('.overview'), $slides = $overview.children(), slidesTotal = $slides.length, $thumb = $container.find('.thumb'), $links = $slides.find('a'), containerSize = {
            width: $container.outerWidth(true),
            height: $container.outerHeight(true)
        }, slideSize = {
            width: $slides.first().outerWidth(true),
            height: $slides.first().outerHeight(true)
        }, thumbSize = {
            width: $thumb.outerWidth(true),
            height: $thumb.outerHeight(true)
        }, touchEvents = 'ontouchstart' in window, hasRequestAnimationFrame = 'requestAnimationFrame' in window;
        $dots = $container.find('.dot');
        dotSize = {
            width: $dots.outerWidth(),
            height: $dots.outerHeight()
        };
        _defaults = defaults;
        _name = pluginName;
        var _toRadians = function (degrees) {
            return degrees * (Math.PI / 180);
        };
        var _setDots = function () {
            var docFragment = document.createDocumentFragment();
            $dots.remove();
            $slides.each(function (index, slide) {
                var $dotClone = null;
                var angle = parseInt($(slide).attr('data-degrees'), 10) || (index * 360 / slidesTotal), position = {
                    top: -Math.cos(_toRadians(angle)) * options.radius + containerSize.height / 2 - dotSize.height / 2,
                    left: Math.sin(_toRadians(angle)) * options.radius + containerSize.width / 2 - dotSize.width / 2
                };
                if ($dots.length > 0) {
                    $dotClone = $dots.clone();
                    $dotClone
                        .addClass($(slide).attr('data-classname'))
                        .css(position);
                    docFragment.appendChild($dotClone[0]);
                }
                dots.push({
                    'angle': angle,
                    'slide': slide,
                    'dot': $dotClone
                });
            });
            dots.sort(function (dotA, dotB) {
                return dotA.angle - dotB.angle;
            });
            $.each(dots, function (index, dot) {
                if ($(dot.dot).length > 0) {
                    $(dot.dot)
                        .addClass('dot-' + (index + 1))
                        .attr('data-slide-index', index)
                        .html('<span>' + (index + 1) + '</span>');
                }
            });
            $container.append(docFragment);
            $dots = $container.find('.dot');
        };
        var stop = function () {
            intervalActive = false;
            clearTimeout(intervalTimer);
            return self;
        };
        var _page = function (event) {
            return {
                x: isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
                y: isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
            };
        };
        var _sanitizeAngle = function (degrees) {
            return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
        };
        var _toDegrees = function (radians) {
            return radians * 180 / Math.PI;
        };
        var _findShortestPath = function (angleA, angleB) {
            var angleCW, angleCCW, angleShortest;
            if (angleA > angleB) {
                angleCW = angleA - angleB;
                angleCCW = -(angleB + 360 - angleA);
            }
            else {
                angleCW = angleA + 360 - angleB;
                angleCCW = -(angleB - angleA);
            }
            angleShortest = angleCW < Math.abs(angleCCW) ? angleCW : angleCCW;
            return [angleShortest, angleCCW, angleCW];
        };
        var _findClosestSlide = function (angle) {
            var closestDotAngleToAngleCCW = 9999, closestDotAngleToAngleCW = 9999, closestDotAngleToAngle = 9999, closestSlideCCW = 0, closestSlideCW = 0, closestSlide = 0;
            $.each(dots, function (index, dot) {
                var delta = _findShortestPath(dot.angle, angle);
                if (Math.abs(delta[0]) < Math.abs(closestDotAngleToAngle)) {
                    closestDotAngleToAngle = delta[0];
                    closestSlide = index;
                }
                if (Math.abs(delta[1]) < Math.abs(closestDotAngleToAngleCCW)) {
                    closestDotAngleToAngleCCW = delta[1];
                    closestSlideCCW = index;
                }
                if (Math.abs(delta[2]) < Math.abs(closestDotAngleToAngleCW)) {
                    closestDotAngleToAngleCW = delta[2];
                    closestSlideCW = index;
                }
            });
            return [
                [closestSlide, closestSlideCCW, closestSlideCW],
                [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
            ];
        };
        var _setCSS = function (angle, fireCallback) {
            var closestSlidesAndAngles = _findClosestSlide(angle);
            var closestSlides = closestSlidesAndAngles[0];
            var closestAngles = closestSlidesAndAngles[1];
            $overview.css('left', -(closestSlides[1] * slideSize.width + Math.abs(closestAngles[1]) * slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2]))));
            $thumb.css({
                top: -Math.cos(_toRadians(angle)) * options.radius + (containerSize.height / 2 - thumbSize.height / 2),
                left: Math.sin(_toRadians(angle)) * options.radius + (containerSize.width / 2 - thumbSize.width / 2)
            });
            if (fireCallback) {
                // The move event will trigger when the carousel slides to a new slide.
                $container.trigger('move', [$slides[slideCurrent], slideCurrent]);
            }
        };
        var _stepMove = function (angleStep, angleDelta, stepInterval) {
            var angleStepNew = angleStep, endAnimation = false;
            if (Math.abs(angleStep) > Math.abs(angleDelta)) {
                angleStepNew = -angleDelta;
                endAnimation = true;
            }
            else if (hasRequestAnimationFrame) {
                requestAnimationFrame(function () {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                });
            }
            else {
                animationTimer = setTimeout(function () {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                }, stepInterval);
            }
            angleCurrent = _sanitizeAngle(angleCurrent - angleStepNew);
            _setCSS(angleCurrent, endAnimation);
        };
        var start = function (first) {
            if (options.interval) {
                intervalActive = true;
                _setTimer(first);
            }
            return self;
        };
        var move = function (index) {
            var slideIndex = Math.max(0, isNaN(index) ? slideCurrent : index);
            if (slideIndex >= slidesTotal) {
                slideIndex = 0;
            }
            var angleDestination = dots[slideIndex] && dots[slideIndex].angle, angleDelta = _findShortestPath(angleDestination, angleCurrent)[0], angleStep = angleDelta > 0 ? -2 : 2;
            slideCurrent = slideIndex;
            _stepMove(angleStep, angleDelta, 50);
            start(0);
            return self;
        };
        var _setTimer = function (slideFirst) {
            intervalTimer = setTimeout(function () {
                move(slideCurrent + 1);
            }, (slideFirst ? 50 : options.intervalTime));
        };
        var _endDrag = function (event) {
            console.log(event.target);
            console.log($(event.target));
            console.log($(event.target).hasClass('dot'));
            if ($(event.target).hasClass('dot')) {
                return false;
            }
            dragging = false;
            event.preventDefault();
            $(document).unbind('mousemove mouseup');
            $thumb.unbind('mouseup');
            if (options.dotsHide) {
                $dots.stop(true, true).fadeOut('slow');
            }
            if (options.dotsSnap) {
                move(_findClosestSlide(angleCurrent)[0][0]);
            }
        };
        var _drag = function (event) {
            var containerOffset = $container.offset(), thumbPositionNew = {
                left: _page(event).x - containerOffset.left - (containerSize.width / 2),
                top: _page(event).y - containerOffset.top - (containerSize.height / 2)
            };
            angleCurrent = _sanitizeAngle(_toDegrees(Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)));
            if (!hasRequestAnimationFrame) {
                _setCSS(angleCurrent);
            }
            return false;
        };
        var _dragAnimationLoop = function () {
            if (dragging) {
                _setCSS(angleCurrent);
                requestAnimationFrame(function () {
                    _dragAnimationLoop();
                });
            }
        };
        var _startDrag = function (event) {
            event.preventDefault();
            isTouchEvent = event.type == 'touchstart';
            dragging = true;
            if ($(event.target).hasClass('dot')) {
                return false;
            }
            stop();
            $(document).mousemove(_drag);
            $(document).mouseup(_endDrag);
            $thumb.mouseup(_endDrag);
            if (options.dotsHide) {
                $dots.stop(true, true).fadeIn('slow');
            }
            if (hasRequestAnimationFrame) {
                _dragAnimationLoop();
            }
        };
        var snapHandler = function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            stop();
            move($(this).attr('data-slide-index'));
            return false;
        };
        var _setEvents = function () {
            if (touchEvents) {
                $container[0].ontouchstart = _startDrag;
                $container[0].ontouchmove = _drag;
                $container[0].ontouchend = _endDrag;
            }
            $thumb.bind('mousedown', _startDrag);
            if (touchEvents) {
                $container.delegate('.dot', 'touchstart', snapHandler);
            }
            $container.delegate('.dot', 'mousedown', snapHandler);
        };
        var _initialize = function () {
            _setDots();
            $overview
                .append($slides.first().clone())
                .css('width', slideSize.width * ($slides.length + 1));
            _setEvents();
            _setCSS(0);
            move(options.start);
            return self;
        };
        _initialize();
    };
    return TinyCircleComponent;
}());
TinyCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tiny-circle',
        template: __webpack_require__("../../../../../src/app/tiny-circle/tiny-circle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tiny-circle/tiny-circle.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TinyCircleComponent);

//# sourceMappingURL=tiny-circle.component.js.map

/***/ }),

/***/ "../../../../../src/app/tn/tn.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"circleslider3\">\n\t\t<div class=\"viewport\">\n\t\t\t<ul class=\"overview\">\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr3.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr2.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr1.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr4.jpg\" /></a></li>\n\t\t\t\t<li><a href=\"http://www.baijs.com\"><img src=\"../../assets/images/hdr5.jpg\" /></a></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"dot\"></div>\n\t\t<div class=\"overlay\"></div>\n\t\t<div class=\"thumb\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tn/tn.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: table; }\n  :host img {\n    border: 0;\n    pointer-events: none;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n  :host .tiny-circle {\n    height: 350px;\n    padding: 25px;\n    position: relative;\n    width: 350px; }\n    :host .tiny-circle .viewport {\n      height: 350px;\n      position: relative;\n      margin: 0 auto;\n      overflow: hidden;\n      width: 350px; }\n    :host .tiny-circle .overview {\n      background-color: #efefef;\n      position: absolute;\n      width: 798px;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      left: 0;\n      top: 0; }\n      :host .tiny-circle .overview li {\n        height: 350px;\n        width: 350px;\n        margin: 0 20px 0 0;\n        float: left;\n        position: relative; }\n    :host .tiny-circle .overlay {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-rotatescroll2.png") + ") no-repeat 0 0;\n      pointer-events: none;\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 400px;\n      width: 400px; }\n    :host .tiny-circle .thumb {\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-thumb.png") + ") no-repeat 50% 50%;\n      position: absolute;\n      top: -3px;\n      cursor: pointer;\n      left: 137px;\n      width: 100px;\n      z-index: 200;\n      height: 100px; }\n    :host .tiny-circle .dot {\n      cursor: pointer;\n      background: url(" + __webpack_require__("../../../../../src/assets/images/bg-dot3.png") + ") no-repeat 0 0;\n      height: 22px;\n      text-align: center;\n      line-height: 22px;\n      font-size: 10px;\n      color: #555;\n      width: 22px;\n      position: absolute;\n      left: 155px;\n      top: 3px;\n      z-index: 100; }\n      :host .tiny-circle .dot span {\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tn/tn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TnComponent = (function () {
    function TnComponent() {
    }
    TnComponent.prototype.ngAfterViewInit = function () {
        var _defaults, _name, slideCurrent = 0, angleCurrent = 0, intervalActive = false, intervalTimer = null, animationTimer = null, dragging = false, isTouchEvent = false, $dots, dotSize;
        var pluginName = 'tinycircleslider', defaults = {
            interval: false,
            intervalTime: 3500,
            dotsSnap: false,
            dotsHide: true,
            radius: 140,
            start: 0
        };
        var $container = $('#circleslider3'), opt = { interval: false, dotsSnap: true, dotsHide: false, radius: 184 };
        var options = $.extend({}, defaults, opt), dots = [], $viewport = $container.find('.viewport'), $overview = $container.find('.overview'), $slides = $overview.children(), slidesTotal = $slides.length, $thumb = $container.find('.thumb'), $links = $slides.find('a'), containerSize = {
            width: $container.outerWidth(true),
            height: $container.outerHeight(true)
        }, slideSize = {
            width: $slides.first().outerWidth(true),
            height: $slides.first().outerHeight(true)
        }, thumbSize = {
            width: $thumb.outerWidth(true),
            height: $thumb.outerHeight(true)
        }, touchEvents = 'ontouchstart' in window, hasRequestAnimationFrame = 'requestAnimationFrame' in window;
        $dots = $container.find('.dot');
        dotSize = {
            width: $dots.outerWidth(),
            height: $dots.outerHeight()
        };
        _defaults = defaults;
        _name = pluginName;
        var _toRadians = function (degrees) {
            return degrees * (Math.PI / 180);
        };
        var _setDots = function () {
            var docFragment = document.createDocumentFragment();
            $dots.remove();
            $slides.each(function (index, slide) {
                var $dotClone = null;
                var angle = parseInt($(slide).attr('data-degrees'), 10) || (index * 360 / slidesTotal), position = {
                    top: -Math.cos(_toRadians(angle)) * options.radius + containerSize.height / 2 - dotSize.height / 2,
                    left: Math.sin(_toRadians(angle)) * options.radius + containerSize.width / 2 - dotSize.width / 2
                };
                if ($dots.length > 0) {
                    $dotClone = $dots.clone();
                    $dotClone
                        .addClass($(slide).attr('data-classname'))
                        .css(position);
                    docFragment.appendChild($dotClone[0]);
                }
                dots.push({
                    'angle': angle,
                    'slide': slide,
                    'dot': $dotClone
                });
            });
            dots.sort(function (dotA, dotB) {
                return dotA.angle - dotB.angle;
            });
            $.each(dots, function (index, dot) {
                if ($(dot.dot).length > 0) {
                    $(dot.dot)
                        .addClass('dot-' + (index + 1))
                        .attr('data-slide-index', index)
                        .html('<span>' + (index + 1) + '</span>');
                }
            });
            $container.append(docFragment);
            $dots = $container.find('.dot');
        };
        var stop = function () {
            intervalActive = false;
            clearTimeout(intervalTimer);
            return self;
        };
        var _page = function (event) {
            return {
                x: isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
                y: isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
            };
        };
        var _sanitizeAngle = function (degrees) {
            return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
        };
        var _toDegrees = function (radians) {
            return radians * 180 / Math.PI;
        };
        var _findShortestPath = function (angleA, angleB) {
            var angleCW, angleCCW, angleShortest;
            if (angleA > angleB) {
                angleCW = angleA - angleB;
                angleCCW = -(angleB + 360 - angleA);
            }
            else {
                angleCW = angleA + 360 - angleB;
                angleCCW = -(angleB - angleA);
            }
            angleShortest = angleCW < Math.abs(angleCCW) ? angleCW : angleCCW;
            return [angleShortest, angleCCW, angleCW];
        };
        var _findClosestSlide = function (angle) {
            var closestDotAngleToAngleCCW = 9999, closestDotAngleToAngleCW = 9999, closestDotAngleToAngle = 9999, closestSlideCCW = 0, closestSlideCW = 0, closestSlide = 0;
            $.each(dots, function (index, dot) {
                var delta = _findShortestPath(dot.angle, angle);
                if (Math.abs(delta[0]) < Math.abs(closestDotAngleToAngle)) {
                    closestDotAngleToAngle = delta[0];
                    closestSlide = index;
                }
                if (Math.abs(delta[1]) < Math.abs(closestDotAngleToAngleCCW)) {
                    closestDotAngleToAngleCCW = delta[1];
                    closestSlideCCW = index;
                }
                if (Math.abs(delta[2]) < Math.abs(closestDotAngleToAngleCW)) {
                    closestDotAngleToAngleCW = delta[2];
                    closestSlideCW = index;
                }
            });
            return [
                [closestSlide, closestSlideCCW, closestSlideCW],
                [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
            ];
        };
        var _setCSS = function (angle, fireCallback) {
            var closestSlidesAndAngles = _findClosestSlide(angle);
            var closestSlides = closestSlidesAndAngles[0];
            var closestAngles = closestSlidesAndAngles[1];
            $overview.css('left', -(closestSlides[1] * slideSize.width + Math.abs(closestAngles[1]) * slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2]))));
            $thumb.css({
                top: -Math.cos(_toRadians(angle)) * options.radius + (containerSize.height / 2 - thumbSize.height / 2),
                left: Math.sin(_toRadians(angle)) * options.radius + (containerSize.width / 2 - thumbSize.width / 2)
            });
            if (fireCallback) {
                // The move event will trigger when the carousel slides to a new slide.
                $container.trigger('move', [$slides[slideCurrent], slideCurrent]);
            }
        };
        var _stepMove = function (angleStep, angleDelta, stepInterval) {
            var angleStepNew = angleStep, endAnimation = false;
            if (Math.abs(angleStep) > Math.abs(angleDelta)) {
                angleStepNew = -angleDelta;
                endAnimation = true;
            }
            else if (hasRequestAnimationFrame) {
                requestAnimationFrame(function () {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                });
            }
            else {
                animationTimer = setTimeout(function () {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                }, stepInterval);
            }
            angleCurrent = _sanitizeAngle(angleCurrent - angleStepNew);
            _setCSS(angleCurrent, endAnimation);
        };
        var start = function (first) {
            if (options.interval) {
                intervalActive = true;
                _setTimer(first);
            }
            return self;
        };
        var move = function (index) {
            var slideIndex = Math.max(0, isNaN(index) ? slideCurrent : index);
            if (slideIndex >= slidesTotal) {
                slideIndex = 0;
            }
            var angleDestination = dots[slideIndex] && dots[slideIndex].angle, angleDelta = _findShortestPath(angleDestination, angleCurrent)[0], angleStep = angleDelta > 0 ? -2 : 2;
            slideCurrent = slideIndex;
            _stepMove(angleStep, angleDelta, 50);
            start(0);
            return self;
        };
        var _setTimer = function (slideFirst) {
            intervalTimer = setTimeout(function () {
                move(slideCurrent + 1);
            }, (slideFirst ? 50 : options.intervalTime));
        };
        var _endDrag = function (event) {
            console.log(event.target);
            console.log($(event.target));
            console.log($(event.target).hasClass('dot'));
            if ($(event.target).hasClass('dot')) {
                return false;
            }
            dragging = false;
            event.preventDefault();
            $(document).unbind('mousemove mouseup');
            $thumb.unbind('mouseup');
            if (options.dotsHide) {
                $dots.stop(true, true).fadeOut('slow');
            }
            if (options.dotsSnap) {
                move(_findClosestSlide(angleCurrent)[0][0]);
            }
        };
        var _drag = function (event) {
            var containerOffset = $container.offset(), thumbPositionNew = {
                left: _page(event).x - containerOffset.left - (containerSize.width / 2),
                top: _page(event).y - containerOffset.top - (containerSize.height / 2)
            };
            angleCurrent = _sanitizeAngle(_toDegrees(Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)));
            if (!hasRequestAnimationFrame) {
                _setCSS(angleCurrent);
            }
            return false;
        };
        var _dragAnimationLoop = function () {
            if (dragging) {
                _setCSS(angleCurrent);
                requestAnimationFrame(function () {
                    _dragAnimationLoop();
                });
            }
        };
        var _startDrag = function (event) {
            event.preventDefault();
            isTouchEvent = event.type == 'touchstart';
            dragging = true;
            if ($(event.target).hasClass('dot')) {
                return false;
            }
            stop();
            $(document).mousemove(_drag);
            $(document).mouseup(_endDrag);
            $thumb.mouseup(_endDrag);
            if (options.dotsHide) {
                $dots.stop(true, true).fadeIn('slow');
            }
            if (hasRequestAnimationFrame) {
                _dragAnimationLoop();
            }
        };
        var snapHandler = function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            stop();
            move($(this).attr('data-slide-index'));
            return false;
        };
        var _setEvents = function () {
            if (touchEvents) {
                $container[0].ontouchstart = _startDrag;
                $container[0].ontouchmove = _drag;
                $container[0].ontouchend = _endDrag;
            }
            $thumb.bind('mousedown', _startDrag);
            if (touchEvents) {
                $container.delegate('.dot', 'touchstart', snapHandler);
            }
            $container.delegate('.dot', 'mousedown', snapHandler);
        };
        var _initialize = function () {
            _setDots();
            $overview
                .append($slides.first().clone())
                .css('width', slideSize.width * ($slides.length + 1));
            _setEvents();
            _setCSS(0);
            move(options.start);
            return self;
        };
        _initialize();
    };
    return TnComponent;
}());
TnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tn',
        template: __webpack_require__("../../../../../src/app/tn/tn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tn/tn.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TnComponent);

//# sourceMappingURL=tn.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/bg-dot.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/images/bg-dot3.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/images/bg-rotatescroll.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-rotatescroll.6cd56d57a6a90dd52951.png";

/***/ }),

/***/ "../../../../../src/assets/images/bg-rotatescroll2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-rotatescroll2.c0c5d80ececcb010960b.png";

/***/ }),

/***/ "../../../../../src/assets/images/bg-thumb.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/images/cursor_hand.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cursor_hand.c89d2a13d911c96fc626.png";

/***/ }),

/***/ "../../../../../src/assets/images/dropIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dropIcon.b8a117de8d04c901cc80.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map