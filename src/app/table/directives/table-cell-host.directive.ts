import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appTableCellHost]'
})
export class TableCellHostDirective {

    constructor(public viewContainerRef: ViewContainerRef) {

    }

}