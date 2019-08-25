import { Component, OnInit } from "@angular/core";
import { PC } from "src/app/modelos/pc.model";
import { NgForm } from "@angular/forms";
import { PcService } from "src/app/compartido/pc.service";

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

    this.pcService.agregarPC(this.pc).subscribe((res: PC) => {
      console.log(res);
      this.pc = res;
    }),
      err => console.log(err);
  }
}
