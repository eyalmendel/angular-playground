import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, input, QueryList, ViewChildren } from '@angular/core';
import { TableRowHostDirective } from './directives/table-row-host.directive';
import { TableColumn } from './interfaces/table-column.interface';

@Component({
    selector: 'app-table',
    imports: [CommonModule, CdkTableModule, TableRowHostDirective],
    templateUrl: './table.html',
    styleUrl: './table.css'
})
export class Table {

    data = input<Object[]>([]);

    columns = input<TableColumn[]>([]);

    displayedColumns = input<string[]>([]);

    @ViewChildren(TableRowHostDirective)
    rowHosts: QueryList<TableRowHostDirective> | null = null;
}
