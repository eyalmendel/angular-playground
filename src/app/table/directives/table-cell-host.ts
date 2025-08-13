import { Directive, input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { TableColumnRendererRegistry } from "../core/table-column-renderer-registry";
import { TableColumnConfig } from "../core/types";

@Directive({
    selector: '[appTableCellHost]'
})
export class TableCellHostDirective<T> implements OnInit {

    column = input<TableColumnConfig<T> | null>(null);

    row = input<T | null>(null);

    constructor(
        private _registry: TableColumnRendererRegistry<T>,
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

        if (this.column()?.template) {
          this._viewContainerRef.createEmbeddedView(
            this.column()!.template as TemplateRef<any>,
            this.row()
          );
          
          return;
        }

        const rendererType = this._registry.getRenderer(this.column()!.type);
  
        if (rendererType == null) {
          return;
        }
  
        const rendererRef = this._viewContainerRef.createComponent(rendererType);
        const fieldValue = this.row()![this.column()!.field as keyof T];
        rendererRef.instance.render(fieldValue, this.row()!, this.column()!);
      }

}