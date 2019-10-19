import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceutilService } from '../servicios/serviceutil.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nombre: string;
  public apellido:string;
  public password: string;
  public direccion: string;
  public telefono: string;

  constructor(private router: Router,
              private webserviceap: ServiceutilService,
              public alertController: AlertController) {}

  /*
  Metodo consume servicio login
  */
  routinglistaUsuarios(){

    const that = this;

    const parametros = { nom: this.nombre, pass: this.password };

    this.webserviceap.consumirWS('personaApp/login/', parametros, function(resp) {

      const estado = resp.respuesta;
      const nombre = resp.persona.nombre;
      if (estado === 'OK') {
        sessionStorage.setItem('nombre', resp.persona.nombre + " " + resp.persona.apellido);
        sessionStorage.setItem('direccion', resp.persona.direccion);
        sessionStorage.setItem('telefono', resp.persona.telefono);
        that.router.navigate(['/principal']);

      } else {
        that.alertMsg(resp);
        console.log("Error con conexion con el server" + resp.respuesta)
      }
    });


  }
  async alertMsg(resp) {
    const alert = await this.alertController.create({
      message: resp.respuesta,
      buttons: ['OK']
    });
    await alert.present();

  }

}
