import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: 'app-table-cell-host'
})
export class TableCellHostDirective {

    constructor(viewContainerRef: ViewContainerRef) {}

}