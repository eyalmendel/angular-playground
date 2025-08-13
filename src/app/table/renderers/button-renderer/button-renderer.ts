import { Component } from '@angular/core';
import { BaseRenderer } from '../base-renderer';
import { Button } from '../../../button/button';
import { ButtonColumnConfig, ButtonRendererConfig } from '../../core/types';

@Component({
  selector: 'app-button-renderer',
  imports: [Button],
  templateUrl: './button-renderer.html',
  styleUrl: './button-renderer.css'
})
export class ButtonRenderer<T> extends BaseRenderer<T> {

  constructor() {
    super();
  }

  get columnConfig(): ButtonColumnConfig<T> {
    return this.column as ButtonColumnConfig<T>;
  }

  get rendererConfig(): ButtonRendererConfig<T> {
    return this.columnConfig.rendererConfig;
  }

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    
    if (typeof this.rendererConfig.action !== 'function') {
      console.error("Given action is not callable", {
        this: this,
        row: this.row,
        column: this.column 
      })
    }

    this.rendererConfig.action(this.row!);
  }
}
