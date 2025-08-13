import { Injectable, Type } from "@angular/core";
import { TableColumnType } from "../types";
import { TableColumnRenderer } from "../interfaces/table-column-renderer";
import { TextRenderer } from "../renderers/text-renderer/text-renderer";
import { ButtonRenderer } from "../renderers/button-renderer/button-renderer";

@Injectable({
    providedIn: 'root'
})
export class TableColumnRendererRegistry<T> {

    private _renderers = new Map<TableColumnType, Type<TableColumnRenderer<T>>>([
        ['text', TextRenderer],
        ['button', ButtonRenderer],
    ])

    getRenderer = (type: TableColumnType): Type<TableColumnRenderer<T>> | null => {
        return this._renderers.get(type) ?? null;
    }

}