import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "src/app/modelos/usuario.model";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/compartido/auth.service";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  registroFormulario: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.crearFormulario();
  }

  crearFormulario() {
    this.registroFormulario = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      apellido: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  registrar() {
    if (this.registroFormulario.valid) {
      this.usuario = Object.assign({}, this.registroFormulario.value);
      this.auth.registrar(this.usuario).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err.error.error.message)
      });
      console.log(this.registroFormulario.value);
    }
  }
}
