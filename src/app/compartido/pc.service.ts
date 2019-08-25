import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PC } from '../modelos/pc.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class PcService {
  url = "https://pc-gaming-space1.firebaseio.com";

  constructor(private http: HttpClient) {}

  agregarPC(pc: PC) {
    return this.http.post(`${this.url}/pcs.json`, pc)
      .pipe(
        map((res: any)=> {
          pc.id = res.name;
          return pc;
        })
      )
  }
}
