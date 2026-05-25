import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Pedro',
  gender: 'male',
  age: 35,
  address: 'Calle 123, Ciudad',
};

const client2 = {
  name: 'María',
  gender: 'female',
  age: 30,
  address: 'Avenida 456, Ciudad',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.client.set(this.client() === client1 ? client2 : client1);
  }
}
