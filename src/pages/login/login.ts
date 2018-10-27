import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario = {
    email : 'prueba@prueba.com',
    password : 'prueba'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private aut: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log('login');
    this.aut.login(this.usuario).subscribe(
      (datos: any) => {
        console.log(datos.jwt)
        if(datos.jwt){
          localStorage.setItem('jwt',datos.jwt);
          this.navCtrl.setRoot(HomePage);
        }
    })
  }
}
