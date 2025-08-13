import { Component, OnInit } from '@angular/core';
import { BaseRenderer } from '../base-renderer';
import { IconColumnConfig, IconRendererConfig } from '../../core/types';

@Component({
  selector: 'app-icon-renderer',
  imports: [],
  templateUrl: './icon-renderer.html',
  styleUrl: './icon-renderer.css'
})
export class IconRenderer<T> extends BaseRenderer<T> implements OnInit  {

  get iconConfig(): IconRendererConfig<T> {
    return (this.column as IconColumnConfig<T>).rendererConfig
  }

  url: string | null = null;
  altText: string | null = null;

  constructor() {
    super();    
  }

  ngOnInit(): void {
    this.url = this.iconConfig.getUrl(this.row!);
    this.altText = this.iconConfig.getAltText(this.row!);
  }

}
