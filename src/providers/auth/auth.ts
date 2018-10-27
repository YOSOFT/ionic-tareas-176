import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url = 'http://localhost:3000/';
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(usuario){
      return this.http.post(this.url + 'usuario_token', {auth: usuario});
  }

}
