import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PcListaComponent } from "./componentes/pc-lista/pc-lista.component";
import { PcComponent } from "./componentes/pc/pc.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, PcListaComponent, PcComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
