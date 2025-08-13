import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  effect,
  input
} from '@angular/core';
import { TableColumnConfig } from '../core/types';

interface TableBodyContext<T> {
  $implicit: T;
  columns: TableColumnConfig<T>[];
}

@Directive({
  selector: '[appTableBody]'
})
export class TableBodyDirective<T> {

  data = input<T[]>([], {alias: 'appTableBodyOf' });
  columns = input<TableColumnConfig<T>[]>([], { alias: 'appTableBodyColumns' })

  constructor(
    private templateRef: TemplateRef<TableBodyContext<T>>,
    private viewContainerRef: ViewContainerRef
  ) {
    effect(() => {
      this._updateView();
    })
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