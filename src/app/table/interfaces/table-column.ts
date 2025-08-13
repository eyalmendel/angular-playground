import { TemplateRef } from "@angular/core";

export type TableColumnType = 'text' | 'button' | 'badge';

export type ComparableTableColumnType = Extract<TableColumnType, 'text'>;

export type ColumnComparator = (a: any, b: any) => number;

export type TableColumnTemplateContext = {
    row: Object;
    column: TableColumn;
}

export interface TableColumn {
    type: TableColumnType;
    field: string;
    label: string;
    sortable?: boolean;
    comparator?: ColumnComparator;
    template?: TemplateRef<TableColumnTemplateContext>;
}