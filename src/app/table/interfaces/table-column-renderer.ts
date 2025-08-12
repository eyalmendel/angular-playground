import { TableColumn } from "./table-column";

export interface TableColumnRenderer {

    render(value: unknown, row: Object, column: TableColumn): void;

}