import { Component } from '@angular/core';
import { BaseRenderer } from '../base-renderer';

@Component({
  selector: 'app-text-renderer',
  imports: [],
  templateUrl: './text-renderer.html',
  styleUrl: './text-renderer.css'
})
export class TextRenderer extends BaseRenderer {

    constructor() {
        super();
    }
}
