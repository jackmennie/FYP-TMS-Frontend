import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from '../components/home/home.component';
import { ConfigComponent } from '../components/config/config.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'config', component: ConfigComponent },
  { path: '**', component: HomeComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
