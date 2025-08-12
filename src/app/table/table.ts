import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TableBodyDirective } from './directives/table-body.directive';
import { TableCellHostDirective } from './directives/table-cell-host.directive';
import { TableColumn } from './interfaces/table-column.interface';
import { TableHeader } from './table-header/table-header';

@Component({
    selector: 'app-table',
    imports: [
        CommonModule, 
        CdkTableModule, 
        TableBodyDirective, 
        TableCellHostDirective,
        TableHeader,
    ],
    templateUrl: './table.html',
    styleUrl: './table.css'
})
export class Table {

    data = input<Object[]>([]);

    columns = input<TableColumn[]>([]);

    displayedColumns = input<string[]>([]);
}
