import { TemplateRef } from "@angular/core";

export type TableColumnType = 'text' | 'button' | 'badge' | 'icon';

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

export type IconRendererConfig<T> = {
    getUrl: (row: T) => string;
    getAltText: (row: T) => string;
}

export interface BaseTableColumnConfig<T> {
    type: TableColumnType
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

export interface IconColumnConfig<T> extends BaseTableColumnConfig<T> {
    type: 'icon';
    rendererConfig: IconRendererConfig<T>;
}

export type TableColumnConfig<T> = 
    TextColumnConfig<T> | 
    ButtonColumnConfig<T> | 
    IconColumnConfig<T>;