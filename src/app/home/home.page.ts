import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {

  }

  itemlist: Array<any> = [];

  addItem() {
    this.itemlist.push(this.itemlist.length);
  }

  removeItem(item) {
    this.alertController.create({
      header: 'Delete?',
      message: 'Do you want to delete the last item ?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          setTimeout(() => {
            this.itemlist.splice(this.itemlist.length-1, 1);
          }, 500);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    }).then(alert => {
      alert.present();
    });
  }
}
