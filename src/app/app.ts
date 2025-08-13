import { Component, signal, WritableSignal } from '@angular/core';
import { Table } from './table/table';
import { TableColumnConfig } from './table/core/types';

interface User {
  name: string;
  status: 'online' | 'offline' | 'inactive',
  phone: string;
}

@Component({
  selector: 'app-root',
  imports: [Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  columns: TableColumnConfig<User>[] = [
    { type: 'text', label: 'Name', field: 'name', sortable: true },
    { type: 'icon', label: 'Status', field: 'status', rendererConfig: {
      getUrl: (row: User) => row.status === 'online' ? 'icons/online.svg' : 'icons/offline.svg',
      getAltText: (row: User) => row.status.toLowerCase()
    } },
    { type: 'text', label: 'Phone', field: 'phone' },
    { type: 'button', label: 'Action', field: 'action', rendererConfig: {
      text: 'click me',
      action: (row: User) => console.log(`Action done by: ${row.name}`)
    }}
  ];

  data: WritableSignal<User[]> = signal([
    { name: 'Eyal Mendel', status: 'online', phone: '054542648',},
    { name: 'Guy Mendel', status: 'offline', phone: '053526179',},
    { name: 'Noga Mendel', status: 'inactive', phone: '054588848', },
  ]);

  addNewData() {
    this.data.update(prev => [...prev, { name: 'Eyal Mendel', status: 'online', phone: '054542648' }])
  }

}
