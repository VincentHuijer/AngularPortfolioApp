import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angle-brackets',
  standalone: true,
  imports: [],
  template: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16L22 12L18 8M6 8L2 12L6 16M14.5 4L9.5 20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  styles: ``
})
export class AngleBracketsComponent {
  @Input() class = '';
}
