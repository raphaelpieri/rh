import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rotas
import {Routing, RoutingProviders} from './app-routing';

//Root
import { AppComponent } from './app.component';

//Shared
import { HeadbarComponent } from './components/headbar/headbar.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';


//Components


//Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    HomePageComponent,
    SubMenuComponent,
    LoginComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
