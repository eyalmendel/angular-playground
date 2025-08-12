import {
    Directive,
    OnInit,
    TemplateRef,
    ViewContainerRef,
    input
} from '@angular/core';
import { TableColumn } from '../interfaces/table-column.interface';

interface TableBodyContext<T> {
  $implicit: T;
  columns: TableColumn[];
}

@Directive({
  selector: '[appTableBody]'
})
export class TableBodyDirective<T> implements OnInit {

  data = input<T[]>([], {alias: 'appTableBodyOf' });
  columns = input<TableColumn[]>([], { alias: 'appTableBodyColumns' })

  constructor(
    private templateRef: TemplateRef<TableBodyContext<T>>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this._updateView();
  }

  private _updateView(): void {
    this.viewContainerRef.clear();

    if (this.data().length === 0 || this.columns().length === 0) {
      return;
    }

    this.data().forEach(row => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: row,
        columns: this.columns(),
      });
    });
  }
}