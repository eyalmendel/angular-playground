import { Injectable, Type } from "@angular/core";
import { TableColumnType } from "../interfaces/table-column";
import { TableColumnRenderer } from "../interfaces/table-column-renderer";
import { TextRenderer } from "../renderers/text-renderer/text-renderer";

@Injectable({
    providedIn: 'root'
})
export class TableColumnRendererRegistry {

    private _renderers = new Map<TableColumnType, Type<TableColumnRenderer>>([
        ['text', TextRenderer],
    ])

    getRenderer = (type: TableColumnType): Type<TableColumnRenderer> | null => {
        return this._renderers.get(type) ?? null;
    }

}