
export type TableColumnType = 'text' | 'button';

export interface TableColumn {
    type: TableColumnType;
    field: string;
    label: string;
}