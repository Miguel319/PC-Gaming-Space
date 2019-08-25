import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PcListaComponent } from "./componentes/pc-lista/pc-lista.component";
import { PcComponent } from "./componentes/pc/pc.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { PcsComponent } from './componentes/pcs/pcs.component';

@NgModule({
  declarations: [AppComponent, PcListaComponent, PcComponent, PcsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
