import { Directive, input, QueryList, ViewChildren } from "@angular/core";
import { TableCellHostDirective } from "./table-cell-host.directive";
import { TableColumn } from "../interfaces/table-column.interface";
import { TableColumnRendererRegistryService } from "../services/table-column-renderer-registry.service";

@Directive({
  selector: '[appTableRowHost]'
})
export class TableRowHostDirective {

  columns = input<TableColumn[]>([]);

  row = input<Object | null>(null);

  @ViewChildren(TableCellHostDirective)
  cellHosts: QueryList<TableCellHostDirective> | null = null;

  constructor(private _registry: TableColumnRendererRegistryService) {

  }

  ngAfterViewInit(): void {
    this.cellHosts?.changes.subscribe(this.renderCells);
    this.renderCells();
  }

  private renderCells(): void {
    if (this.row() == null || this.cellHosts == null) {
      return;
    }

    this.cellHosts.forEach((cellHost, columnIndex) => {
      const viewContainerRef = cellHost.viewContainerRef;
      viewContainerRef.clear();

      const column = this.columns()[columnIndex];
      const rendererType = this._registry.getRenderer(column.type);

      if (!rendererType) {
        return;
      }

      const rendererRef = cellHost.viewContainerRef.createComponent(rendererType);
      const field = column.field
      const fieldValue = this.row()![field as keyof Object];
      rendererRef.instance.render(fieldValue, this.row()!, column);
    });
  }
}