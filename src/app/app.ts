import { Component } from '@angular/core';
import { Button } from './button/button';
import { Table } from './table/table';
import { TableColumn } from './table/interfaces/table-column';

type User = {
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
  
  columns: TableColumn[] = [
    { type: 'text', label: 'Name', field: 'name' },
    { type: 'text', label: 'Status', field: 'status' },
    { type: 'text', label: 'Phone', field: 'phone' },
  ];

  data: User[] = [
    { name: 'Eyal Mendel', status: 'online', phone: '054542648' },
    { name: 'Guy Mendel', status: 'offline', phone: '053526179' },
    { name: 'Noga Mendel', status: 'inactive', phone: '054588848' },
  ];

  displayedColumns = ['name', 'status', 'phone'];

}
