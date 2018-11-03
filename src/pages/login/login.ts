import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario = {
    email : 'prueba@prueba.com',
    password: 'prueba'
  }
  registroPage = RegistroPage
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider
    ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    if(this.usuario.email && this.usuario.password){
      this.auth.login(this.usuario).subscribe(
        (dato: any) => {
          console.log(dato);
          localStorage.setItem('jwt', dato.jwt);
          localStorage.setItem('id', dato.id);
          this.navCtrl.setRoot(HomePage);
        }
      );
    }
  }

}
