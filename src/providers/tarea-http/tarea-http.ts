import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaHttpProvider {
  url = 'http://localhost:3000/'
  constructor(public http: HttpClient) {
    console.log('Hello TareaHttpProvider Provider');
  }

  obtenerTareas(){
    return this.http.get(this.url + 'tareas');
  }

}
