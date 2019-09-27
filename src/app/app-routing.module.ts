import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcListaComponent } from './componentes/pc-lista/pc-lista.component';
import { PcComponent } from './componentes/pc/pc.component';
import { PcsComponent } from "./componentes/pcs/pcs.component";
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  { path: 'pcs', component: PcsComponent },
  { path: 'pcs/nuevo', component: PcComponent },
  { path: 'pc/:id', component: PcComponent},
  { path: 'inicioDeSesion', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'pcs'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
