import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../modelos/usuario.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private signUpUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbxXhlHQnnk1lq8eCC2bbTKJ-ov3zaOYM";
  private signInInUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbxXhlHQnnk1lq8eCC2bbTKJ-ov3zaOYM";

  constructor(private http: HttpClient) {}

  //signUp?key=[API_KEY]
  iniciarSesion(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(this.signInInUrl, authData);
  }

  //signInWithPassword?key=[API_KEY]
  registrar(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(this.signUpUrl, authData);
  }

  cerrarSesion() {}
}
