import { CdkTableModule } from '@angular/cdk/table';
import { AfterViewInit, Component, input, QueryList, ViewChildren } from '@angular/core';
import { TableCellHostDirective } from './directives/table-cell-host.directive';
import { TableColumn } from './interfaces/table-column.interface';
import { TableColumnRendererRegistryService } from './services/table-column-renderer-registry.service';

@Component({
  selector: 'app-table',
  imports: [CdkTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table implements AfterViewInit {

    data = input<Object[]>([]);

    columns = input<TableColumn[]>([]);

    displayedColumns = input<string[]>([]);

    @ViewChildren(TableCellHostDirective) cellHosts!: QueryList<TableCellHostDirective>;

    constructor(private _registry: TableColumnRendererRegistryService) {

    }

    ngAfterViewInit(): void {
        this.data().forEach((row, rowIndex) => {
            this.columns().forEach((column, columnIndex) => {
                const hostIndex = rowIndex * this.columns.length + columnIndex;
                const host = this.cellHosts.get(hostIndex) ?? null;
                if (host == null) {
                    return;
                }

                const rendererType = this._registry.getRenderer(column.type);
                if (rendererType == null) {
                    return;
                }

                const rendererRef = host.viewContainerRef.createComponent(rendererType);
                const field = column.field as keyof typeof row;
                const fieldValue = row[field];
                rendererRef.instance.render(fieldValue, row, column);
            });
        });
    }

}
