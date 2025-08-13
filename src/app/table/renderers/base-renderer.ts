import { TableColumnRenderer } from '../interfaces/table-column-renderer';
import { TableColumnConfig } from '../types';

export class BaseRenderer<T> implements TableColumnRenderer<T> {

    value: unknown | null = null;
    row: T | null = null;
    column: TableColumnConfig<T> | null = null;
    
    render(value: unknown, row: T, column: TableColumnConfig<T>): void {
        this.value = value;
        this.row = row;
        this.column = column;
    }
}
