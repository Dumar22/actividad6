import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { FormsModule } from '@angular/forms';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { ProductosComponent } from './componentes/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactenosComponent,
    MenuComponent,
    Page404Component,
    HomeComponent,
    CarrouselComponent,
    NosotrosComponent,
    RedessocialesComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
