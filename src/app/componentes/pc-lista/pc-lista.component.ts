import { Component, OnInit, HostBinding } from "@angular/core";
import { PC } from "src/app/modelos/pc.model";
import { PcService } from "src/app/compartido/pc.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-pc-lista",
  templateUrl: "./pc-lista.component.html",
  styleUrls: ["./pc-lista.component.css"]
})
export class PcListaComponent implements OnInit {
  pcs: PC[];
  @HostBinding("class") classes = "row";

  constructor(private pcService: PcService) {}

  ngOnInit() {
    this.pcs = [];
    this.obtenerPCs();
  }

  obtenerPCs() {
    this.pcService.obtenerPCs().subscribe(res => (this.pcs = res));
  }

  eliminarPC(pc: PC, i: number) {
    Swal.fire({
      title: `¿Seguro que quiere eliminar a ${pc.alias}?`,
      type: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        this.pcService
          .eliminarPC(pc.id)
          .subscribe(res => this.pcs.splice(i, 1));
      }
    });
  }
}
