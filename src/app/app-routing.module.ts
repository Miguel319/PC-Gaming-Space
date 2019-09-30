import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PcComponent } from "./componentes/pc/pc.component";
import { PcsComponent } from "./componentes/pcs/pcs.component";
import { LoginComponent } from "./componentes/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      { path: "pcs", component: PcsComponent },
      { path: "pcs/nuevo", component: PcComponent },
      { path: "pc/:id", component: PcComponent },
      { path: "**", pathMatch: "full", redirectTo: "pcs" }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
