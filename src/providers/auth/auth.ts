import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.url = localStorage.getItem('url');
  }

  login(usuario){
   return this.http.post(this.url + 'usuario_token', {
      auth:usuario
    })
  }

  registro(usuario){
    return new Observable(observer => {
      this.http.post(this.url + 'usuarios', {
        usuario:usuario
      }).subscribe(
        resp => {
          console.log("res",resp);
          this.login(usuario).subscribe(
            datos => {
              console.log("token",datos);
              observer.next(datos);
              observer.complete();
            },
            error => observer.error(error)
          );
        },
        error => observer.error(error)
      )
    })


   }

}
