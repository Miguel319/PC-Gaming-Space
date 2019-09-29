import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PcListaComponent } from "./componentes/pc-lista/pc-lista.component";
import { PcComponent } from "./componentes/pc/pc.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { PcsComponent } from './componentes/pcs/pcs.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  declarations: [AppComponent, PcListaComponent, PcComponent, PcsComponent, LoginComponent, RegistroComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
