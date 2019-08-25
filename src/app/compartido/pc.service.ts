import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PC } from "../modelos/pc.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PcService {
  url = "https://pc-gaming-space1.firebaseio.com";

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

    return this.http.put(`${this.url}/pcs/${pc.id}.json`, pcTemp);
  }
}
