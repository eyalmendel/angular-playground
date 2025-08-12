
export type TableColumnType = 'text' | 'number' | 'button';

export type ComparableTableColumnType = 'text' | 'number';

export type ColumnComparator = (a: any, b: any) => number;

export interface TableColumn {
    type: TableColumnType;
    field: string;
    label: string;
    sortable?: boolean;
    comparator?: ColumnComparator;
}