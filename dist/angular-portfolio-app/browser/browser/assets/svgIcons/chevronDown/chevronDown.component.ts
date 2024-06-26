import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevronDown',
  standalone: true,
  imports: [],
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="#9C9C9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  styles: ``
})
export class chevronDownComponent {
  @Input() class = '';
}
