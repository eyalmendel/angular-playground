import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TableBodyDirective } from './directives/table-body';
import { TableCellHostDirective } from './directives/table-cell-host';
import { TableColumn } from './interfaces/table-column';
import { TableHeader } from './table-header/table-header';
import { TableSelectionService } from './services/table-selection';

@Component({
    selector: 'app-table',
    imports: [
        CommonModule, 
        CdkTableModule, 
        TableBodyDirective, 
        TableCellHostDirective,
        TableHeader,
    ],
    providers: [TableSelectionService],
    templateUrl: './table.html',
    styleUrl: './table.css'
})
export class Table {

    data = input<Object[]>([]);

    columns = input<TableColumn[]>([]);

    displayedColumns = input<string[]>([]);

    selectable = input<boolean>(true);

    constructor(public tableSelectionService: TableSelectionService) {

    }

    ngOnInit(): void {
        this.tableSelectionService.selectable = this.selectable();
        this.tableSelectionService.setData(this.data());
    }
}
