import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {

    text = input<string | null>(null);

    textColor = input<string>('var(--secondary-color)');

    color = input<string>('var(--primary-color)');

    width = input<number>(100);
    
    height = input<number>(25);

    borderRadius = input<string>('var(--default-border-radius)')

    click = output<void>();

}
