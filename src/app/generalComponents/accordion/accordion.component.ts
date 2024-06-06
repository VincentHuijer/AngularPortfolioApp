import { Component } from '@angular/core';
import { chevronDownComponent } from '../../../assets/svgIcons/chevronDown/chevronDown.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [chevronDownComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
