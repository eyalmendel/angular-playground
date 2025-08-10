import { TableColumn } from "./table-column.interface";

export interface TableColumnRenderer {

    render(value: unknown, row: Object, column: TableColumn): void;

}