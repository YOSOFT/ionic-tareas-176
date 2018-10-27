import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaHttpProvider {
  url = 'http://localhost:3000/'
  headers: HttpHeaders
  constructor(public http: HttpClient) {
    let jwt = localStorage.getItem('jwt');
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwt
    })
  }

  obtenerTareas(){
    return this.http.get(this.url + 'tareas', {
      headers: this.headers
    });
  }

}
