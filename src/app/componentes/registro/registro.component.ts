import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "src/app/modelos/usuario.model";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/compartido/auth.service";
import Swal from 'sweetalert2';

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

       Swal.fire({
         allowOutsideClick: false,
         title: "Éxito",
         type: "success",
         text: "Usuario creado satisfactoriamente."
       });
      Swal.showLoading()     ;

      this.usuario = Object.assign({}, this.registroFormulario.value);
      this.auth.registrar(this.usuario).subscribe(res => {
        Swal.close();
         Swal.fire({
           allowOutsideClick: false,
           title: "Éxito",
           type: "success",
           text: "Usuario creado satisfactoriamente."
         });
         this.router.navigate(['/pcs']);;
      }, err => {
        console.log(err.error.error.message)
      });
      console.log(this.registroFormulario.value);
    }
  }
}
