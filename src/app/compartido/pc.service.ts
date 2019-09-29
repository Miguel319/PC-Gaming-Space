import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PC } from "../modelos/pc.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PcService {
  private url = "https://pc-gaming-space1.firebaseio.com";

  constructor(private http: HttpClient) {}

  agregarPC(pc: PC) {
    const body = JSON.stringify(pc);

    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(`${this.url}/pcs.json`, body, { headers }).pipe(
      map((res: any) => {
        pc.id = res.name;
        return pc;
      })
    );
  }

  actualizarPC(pc: PC) {
    const pcTemp: PC = {
      ...pc
    };

    delete pcTemp.id;

    const body = JSON.stringify(pcTemp);

    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.put(`${this.url}/pcs/${pc.id}.json`, body, { headers });
  }

  obtenerPCs() {
    return this.http.get(`${this.url}/pcs.json`).pipe(map(this.crearPCs));
  }

  private crearPCs(pcObj: object) {
    const pcs: PC[] = [];

    if (pcObj === null) return [];

    Object.keys(pcObj).forEach(key => {
      const pc: PC = pcObj[key];
      pc.id = key;
      pcs.push(pc);
    });

    return pcs;
  }

  obtenerPC(id: string) {
    return this.http.get(`${this.url}/pcs/${id}.json`);
  }

  eliminarPC(id: string) {
    return this.http.delete(`${this.url}/pcs/${id}.json`);
  }

}
