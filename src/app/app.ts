import { Component } from '@angular/core';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
    onClick = () => {
        console.log("clicked")
    }

}
