import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'circle-view', redirectTo: './circle-view/CircleView.html' },
  { path: 'tiny-circle-slider', redirectTo: './tiny-circle-slider/examples/simple/index.html' }
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(routes);
