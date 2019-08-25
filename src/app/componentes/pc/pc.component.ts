import { Component, OnInit } from "@angular/core";
import { PC } from "src/app/modelos/pc.model";
import { NgForm } from "@angular/forms";
import { PcService } from "src/app/compartido/pc.service";
import Swal from "sweetalert2";
import { Observable } from "rxjs";

@Component({
  selector: "app-pc",
  templateUrl: "./pc.component.html",
  styleUrls: ["./pc.component.css"]
})
export class PcComponent implements OnInit {
  pc: PC;

  constructor(private pcService: PcService) {}

  ngOnInit() {
    this.pc = new PC();
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log("Formulario inválido");
      return;
    }

    Swal.fire({
      title: "Espere",
      text: "Guardando..",
      type: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.pc.id) {
      peticion = this.pcService.actualizarPC(this.pc);
    } else {
      peticion = this.pcService.agregarPC(this.pc);
    }

    peticion.subscribe(res => {
      Swal.fire({
        title: this.pc.alias,
        text: "¡PC Gaming actualizada satisfactoriamente!",
        type: "success"
      });
    });
  }
}
