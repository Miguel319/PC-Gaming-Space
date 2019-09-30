import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioModel } from "src/app/modelos/usuario.model";
import { AuthService } from "src/app/compartido/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginFormulario: FormGroup;
  usuario: UsuarioModel;
  recordarme = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.loginFormulario = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  iniciarSesion() {
    if (this.loginFormulario.valid) {
      Swal.fire({
        allowOutsideClick: false,
        title: "Cargando",
        type: "info",
        text: "Espere, por favor..."
      });

      Swal.showLoading();

      this.usuario = Object.assign({}, this.loginFormulario.value);

      this.auth.iniciarSesion(this.usuario).subscribe(
        res => {
          console.log(res);
          Swal.close();
          this.router.navigate(["/pcs"]);
        },
        err => {
          Swal.fire({
            allowOutsideClick: false,
            title: "Error al autenticar",
            type: "error",
            text: err.error.error.message
          });
        }
      );
    }
  }
}
