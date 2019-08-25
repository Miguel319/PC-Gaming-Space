import { Component, OnInit } from "@angular/core";
import { PC } from "src/app/modelos/pc.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-pc",
  templateUrl: "./pc.component.html",
  styleUrls: ["./pc.component.css"]
})
export class PcComponent implements OnInit {
  pc: PC;

  constructor() {}

  ngOnInit() {
    this.pc = new PC();
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    console.log(form);
    console.log(this.pc);
  }
}
