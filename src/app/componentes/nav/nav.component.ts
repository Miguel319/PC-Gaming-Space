import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/compartido/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  cerrarSesion() {
    this.auth.cerrarSesion();
    this.router.navigate(["/login"]);
  }

  estaAutenticado() {
    return this.auth.estaAutenticado();
  }
}
