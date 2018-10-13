import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = []
  habilitar = false
  constructor(
    public navCtrl: NavController,
    public alerta: AlertController,
    private servicioTareas: TareaProvider,
    private toast: ToastController
    ) {
   this.tareas = servicioTareas.obtenerTareas();
  }

  agregarTarea(){
    let alert = this.alerta.create({
      title: "Agregar tarea",
      message: "tarea....",
      inputs:[{
        type: "text",
        name: "textoTarea"
      }],
      buttons: [{text: "Cancelar"},
      {text: "Agregar",
      handler: (dato) => {
        console.log(dato);
        // this.tareas.push(dato.textoTarea);
        this.servicioTareas.agregarTarea(dato.textoTarea);
      }
    }
      ]
    });
    alert.present();
  }
  irPaginaArchivadas(){
    this.navCtrl.push(TareasArchivadasPage);
  }
  archivarTarea(indice){
    this.servicioTareas.archivarTarea(indice)
  }
  editarTarea(indice){
    let alert = this.alerta.create({
      title: "Editar tarea",
      inputs: [{
        type: "text",
        name: "textoTarea",
        value: this.tareas[indice]
      }],
      buttons: [{
        text: "Guardar",
        handler: (datos) => {
          this.servicioTareas.editarTarea(datos.textoTarea, indice);
          let toast = this.toast.create({
            message: "Tarea editada exitosamente",
            duration: 2000
          });
          toast.present();
        }
      }]
    });
    alert.present();
  }

  ordenarTareas(evento){
    console.log(evento);
    reorderArray(this.tareas, evento);
  }

}
