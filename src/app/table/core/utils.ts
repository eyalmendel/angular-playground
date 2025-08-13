import { TableColumnConfig } from "./types";

export function stringComparator(a: string, b: string) {
    return a.localeCompare(b);
}

export function setDefaultComparators<T>(columns: TableColumnConfig<T>[]): TableColumnConfig<T>[] {
    columns.forEach(column => {
        if (column.comparator == undefined) {
            column.comparator = stringComparator
        }
    })

    return columns;
}