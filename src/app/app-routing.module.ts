import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcListaComponent } from './componentes/pc-lista/pc-lista.component';
import { PcComponent } from './componentes/pc/pc.component';
import { PcsComponent } from "./componentes/pcs/pcs.component";


const routes: Routes = [
  { path: 'pcs', component: PcsComponent },
  { path: 'pc/:id', component: PcComponent},
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
