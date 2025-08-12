import { TableColumnRenderer } from '../interfaces/table-column-renderer';
import { TableColumn } from '../interfaces/table-column';

export class BaseRenderer implements TableColumnRenderer {

    value: unknown | null = null;
    row: Object | null = null;
    column: TableColumn | null = null;
    
    render(value: unknown, row: Object, column: TableColumn): void {
        this.value = value;
        this.row = row;
        this.column = column;
    }
}
