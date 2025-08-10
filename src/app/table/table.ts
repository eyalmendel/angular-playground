import { Component, input } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { TableColumn } from './interfaces/table-column.interface';
import { TableColumnRendererRegistryService } from './services/table-column-renderer-registry.service';

@Component({
  selector: 'app-table',
  imports: [CdkTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

    data = input<Object[]>([]);

    columns = input<TableColumn[]>([]);

    displayedColumns = input<string[]>([]);

    constructor(private _registry: TableColumnRendererRegistryService) {

    }

}
