import { Directive, input, OnInit, ViewContainerRef } from "@angular/core";
import { TableColumn } from "../interfaces/table-column";
import { TableColumnRendererRegistry } from "../services/table-column-renderer-registry";

@Directive({
    selector: '[appTableCellHost]'
})
export class TableCellHostDirective implements OnInit {

    column = input<TableColumn | null>(null);

    row = input<Object | null>(null);

    constructor(
        private _registry: TableColumnRendererRegistry,
        private _viewContainerRef: ViewContainerRef,
    ) {
    
    }
    
      ngOnInit(): void {
        this.renderCells();
      }
    
      private renderCells(): void {
        if (this.row() == null || this.column() == null) {
          return;
        }
    
        this._viewContainerRef.clear();

        const rendererType = this._registry.getRenderer(this.column()!.type);
  
        if (!rendererType) {
          return;
        }
  
        const rendererRef = this._viewContainerRef.createComponent(rendererType);
        const fieldValue = this.row()![this.column()!.field as keyof Object];
        rendererRef.instance.render(fieldValue, this.row()!, this.column()!);
      }

}