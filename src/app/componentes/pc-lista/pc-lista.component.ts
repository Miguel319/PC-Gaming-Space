import { Component, OnInit } from '@angular/core';
import { PC } from 'src/app/modelos/pc.model';

@Component({
  selector: 'app-pc-lista',
  templateUrl: './pc-lista.component.html',
  styleUrls: ['./pc-lista.component.css']
})
export class PcListaComponent implements OnInit {
  pcs: PC;

  constructor() { }

  ngOnInit() {
  }

}
