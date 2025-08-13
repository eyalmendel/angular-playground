import { TableColumnConfig } from "../types";

export interface TableColumnRenderer<T> {

    render(value: unknown, row: T, column: TableColumnConfig<T>): void;

}