import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';

const appRoutes: Routes = [
    { path:'', component: LoginComponent },
    { path:'home', component: HomePageComponent },
    { path:'usuarios', component: UsuarioListComponent}
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);