import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario = {
    email : '',
    password: ''
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registro(){
    if(this.usuario.email && this.usuario.password){
      this.auth.registro(this.usuario).subscribe(
        (dato: any) => {
          console.log(dato.jwt);
          localStorage.setItem('jwt', dato.jwt);
          localStorage.setItem('id', dato.id);
          this.navCtrl.setRoot(HomePage);
        }
      );
    }
  }

}
