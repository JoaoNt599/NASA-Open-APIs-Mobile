import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular'; // Importando IonModal

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('apodModal') apodModal!: IonModal;
  @ViewChild('neowsModal') neowsModal!: IonModal;
  @ViewChild('donkiModal') donkiModal!: IonModal;
  @ViewChild('earthModal') earthModal!: IonModal;
  @ViewChild('eonetModal') eonethModal!: IonModal;
  @ViewChild('epictModal') epicModal!: IonModal;
  presentingElement: Element | null = null;

  constructor() {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  dismissApodModal() {
    this.apodModal.dismiss();
  }

  dismissNeowsModal() {
    this.neowsModal.dismiss();
  }

  dismissDonkiModal() {
    this.donkiModal.dismiss();
  }

  dismissEarthModal() {
    this.earthModal.dismiss();
  }

  dismissEonetModal() {
    this.eonethModal.dismiss();
  }

  dismissEpicModal() {
    this.epicModal.dismiss();
  }
}
