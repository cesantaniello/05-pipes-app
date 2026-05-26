import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe,
    JsonPipe, UpperCasePipe],
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

  clientsMap = {
    '=0': 'No tienes ningún cliente',
    '=1': 'Tienes un cliente',
    other: 'Tienes # clientes'
  };

  clients = signal(['Maria', 'Pedro', 'Juan', 'Ana',
    'Luis', 'Sofia', 'Carlos', 'Marta', 'Jorge']
  );

  deleteClient() { this.clients.update(prev => prev.slice(1)); }
}
