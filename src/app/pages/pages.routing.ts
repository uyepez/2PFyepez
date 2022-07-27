import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
    { 
        path: 'home', 
        component: PagesComponent,
        children: [
            { path: '', component: HomeComponent, canActivate:[AuthGuard] },
            { path: 'cuenta', component: CuentaComponent, canActivate:[AuthGuard] },
            { path: '', pathMatch: 'full', redirectTo: 'login' }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}