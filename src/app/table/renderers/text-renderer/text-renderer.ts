import { Component } from '@angular/core';
import { BaseRenderer } from '../base-renderer';

@Component({
  selector: 'app-text-renderer',
  imports: [],
  templateUrl: './text-renderer.html',
  styleUrl: './text-renderer.css'
})
export class TextRenderer<T> extends BaseRenderer<T> {

    constructor() {
        super();
    }
}
