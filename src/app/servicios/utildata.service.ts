import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtildataService {

  loaderToShow: any;

  constructor(public loadingController: LoadingController) { }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Procesando...',
      spinner: 'bubbles'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 2000);
  }
}
