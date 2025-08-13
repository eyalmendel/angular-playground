import { Injectable, Type } from "@angular/core";
import { TableColumnType } from "./types";
import { TableColumnRenderer } from "./table-column-renderer";
import { TextRenderer } from "../renderers/text-renderer/text-renderer";
import { ButtonRenderer } from "../renderers/button-renderer/button-renderer";
import { IconRenderer } from "../renderers/icon-renderer/icon-renderer";

@Injectable({
    providedIn: 'root'
})
export class TableColumnRendererRegistry<T> {

    private _renderers = new Map<TableColumnType, Type<TableColumnRenderer<T>>>([
        ['text', TextRenderer],
        ['button', ButtonRenderer],
        ['icon', IconRenderer],
    ]);

    getRenderer = (type: TableColumnType): Type<TableColumnRenderer<T>> | null => {
        return this._renderers.get(type) ?? null;
    }

}