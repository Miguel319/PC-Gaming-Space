import { Component, OnInit, HostBinding } from "@angular/core";
import { PC } from "src/app/modelos/pc.model";
import { HttpClient } from "selenium-webdriver/http";
import { PcService } from "src/app/compartido/pc.service";

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
}
