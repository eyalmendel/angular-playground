import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, signal } from '@angular/core';
import { TableBodyDirective } from './directives/table-body';
import { TableCellHostDirective } from './directives/table-cell-host';
import { ColumnComparator, ComparableTableColumnType, TableColumnConfig } from './core/types';
import { TableSelectionService } from './core/table-selection';

type SortDirection = 'asc' | 'desc' | null;

type SortState = {
    column: string | null;
    direction: SortDirection;
}

const DEFAULT_COLUMNS_COMPARATORS: Record<ComparableTableColumnType, ColumnComparator> = {
    'text': (a: string, b: string) => a.localeCompare(b),
}

function setDefaultComparators<T>(columns: TableColumnConfig<T>[]): TableColumnConfig<T>[] {
    columns.forEach(column => {
        if (column.comparator == undefined) {
            column.comparator = DEFAULT_COLUMNS_COMPARATORS[column.type as ComparableTableColumnType];
        }
    })

    return columns;
}

@Component({
    selector: 'app-table',
    imports: [
        CommonModule,
        CdkTableModule,
        TableBodyDirective,
        TableCellHostDirective,
    ],
    providers: [TableSelectionService],
    templateUrl: './table.html',
    styleUrl: './table.css'
})
export class Table<T> {

    data = input.required<T[]>();

    columns = input.required<TableColumnConfig<T>[], TableColumnConfig<T>[]>({ transform: setDefaultComparators });

    displayedColumns = input.required<string[]>();

    selectable = input<boolean>(true);


    sortState = signal<SortState>({ column: null, direction: null });

    sortedData = computed(() => {
        const data = [...this.data()];
        const { column: sortedColumn, direction: sortedDirection } = this.sortState();
        if (sortedColumn == null || sortedDirection == null) {
            return data;
        }

        const direction = sortedDirection === 'asc' ? 1 : -1;
        const sortableColumn = this.columns()
            .find(column => column.field === sortedColumn)
            ?? null;

        if (sortableColumn == null) {
            return data;
        }

        return data.sort((item, otherItem): number => {
            const itemValue = item[sortedColumn as keyof T];
            const otherItemValue = otherItem[sortedColumn as keyof T];
            return sortableColumn.comparator!(itemValue, otherItemValue) * direction;
        });
    });

    constructor(public tableSelectionService: TableSelectionService<T>) {
        effect(() => {
            this.tableSelectionService.setData(this.data());
            this.tableSelectionService.selectable = this.selectable();
        })
    }

    setSortState(column: string): void {
        const currentSort = this.sortState();
        let newDirection: SortDirection = 'asc';

        if (currentSort.column === column) {
            if (currentSort.direction === 'asc') {
                newDirection = 'desc';
            } else if (currentSort.direction === 'desc') {
                newDirection = null;
            }
        }

        this.sortState.set({ column, direction: newDirection });
    }

}
