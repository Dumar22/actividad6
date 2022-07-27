import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { Page404Component } from './componentes/page404/page404.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contactenos',component: ContactenosComponent},
  {path: '**',component: Page404Component,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
