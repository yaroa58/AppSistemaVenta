import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'; //permite recibir las respuestas de las Apis
import { environment } from 'src/environments/environment'; //url de la api rest
import { ResponseApi } from '../Interfaces/response-api'; // permite recibir la respuesta de las solicitudes Http
import { Login } from '../Interfaces/login'; // importacion de interfaces para recibir las credenciales
import { Usuario } from '../Interfaces/usuario'; // interfaz de usuario

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // creacion de url para armar la url de api
  private urlApi: string = environment.endpoint + "Usuario/"
  //inyeccion de depencia HttpClient para realizar las solicitudes
  constructor(private http: HttpClient) { }
  //creacion de metodos
  iniciarSesion(request: Login): Observable<ResponseApi> {
    // inicio de ejecucion de la solicitud
    return this.http.post<ResponseApi>(`${this.urlApi}IniciarSesion`, request)
  }
  //metodo para obtener lista de usuarios
  lista(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }
  // Metodo para guardar usuario
  guardar(request: Usuario): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`, request)
  }
  // Metodo para editar usuario
  editar(request: Usuario): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`, request)
  }
  // Metodo para eliminar usuario
  eliminar(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }
}
