import { TemplateRef } from "@angular/core";

export type TableColumnType = 'text' | 'button' | 'badge';

export type ComparableTableColumnType = Extract<TableColumnType, 'text'>;

export type ColumnComparator = (a: any, b: any) => number;

export type TableColumnTemplateContext<T> = {
    row: T;
    column: TableColumnConfig<T>;
}

export type ButtonRendererConfig<T> = {
    text: string;
    action: (row: T) => void;
    iconUrl?: string;
}

export interface BaseTableColumnConfig<T> {
    field: string;
    label: string;
    sortable?: boolean;
    comparator?: ColumnComparator;
    template?: TemplateRef<TableColumnTemplateContext<T>>;
}

export interface TextColumnConfig<T> extends BaseTableColumnConfig<T> {
    type: 'text';
}

export interface ButtonColumnConfig<T> extends BaseTableColumnConfig<T> {
    type: 'button';
    rendererConfig: ButtonRendererConfig<T>;
}

export type TableColumnConfig<T> = TextColumnConfig<T> | ButtonColumnConfig<T>;