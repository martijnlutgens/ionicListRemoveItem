import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  constructor(public alertController: AlertController) {

  }

  items$: BehaviorSubject<Array<number>> = new BehaviorSubject([]);
  itemlist: Array<number> = [];

  addItem() {
    this.itemlist.push(this.itemlist.length);
    this.items$.next([...this.itemlist]);
  }

  removeItem() {
    this.alertController.create({
      header: 'Delete?',
      message: 'Do you want to delete the last item ?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          setTimeout(() => {
            this.itemlist.splice(this.itemlist.length-1, 1);
            this.itemlist = [...this.itemlist];
            this.items$.next([...this.itemlist]);
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