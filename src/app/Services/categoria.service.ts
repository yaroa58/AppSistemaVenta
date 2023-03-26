import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'; //permite recibir las respuestas de las Apis
import { environment } from 'src/environments/environment'; //url de la api rest
import { ResponseApi } from '../Interfaces/response-api'; // permite recibir la respuesta de las solicitudes Http


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlApi: string = environment.endpoint + "Categoria/"

  constructor(private http: HttpClient) { }

  //metodo para obtener lista de usuarios
  lista(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }
}
