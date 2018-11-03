import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaHttpProvider {
  url
  headers
  usuario_id
  constructor(public http: HttpClient) {

  }

  obtenerTareas(){
    this.url = localStorage.getItem('url');
    let jwt = localStorage.getItem('jwt');
    this.usuario_id = localStorage.getItem('id');
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + jwt
    });
    let ruta =this.url + 'usuarios/' + this.usuario_id +  '/tareas'
    return this.http.get(ruta, { headers: this.headers});
  }

}
