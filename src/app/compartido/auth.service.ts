import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../modelos/usuario.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private signUpUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbxXhlHQnnk1lq8eCC2bbTKJ-ov3zaOYM";
  private signInInUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbxXhlHQnnk1lq8eCC2bbTKJ-ov3zaOYM";
  usuarioToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  //signUp?key=[API_KEY]
  iniciarSesion(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(this.signInInUrl, authData).pipe(
      map(res => {
        this.guardarToken(res["idToken"]);
        return res;
      })
    );
  }

  //signInWithPassword?key=[API_KEY]
  registrar(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(this.signUpUrl, authData)
      .pipe(
        map(res => {
          this.guardarToken(res['idToken']);
          return res;
        })
      );
  }

  private guardarToken(idToken: string) {
    this.usuarioToken = idToken;
    localStorage.setItem("token", idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  private leerToken() {
    this.usuarioToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    return this.usuarioToken;
  }

  estaAutenticado() : boolean {
    if (this.usuarioToken.length < 2) 
      return false;

     const expira = Number(localStorage.getItem('expira'));
     const expiraDate = new Date();
     expiraDate.setTime(expira);

     return expiraDate > new Date() ? true : false;
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }
}
