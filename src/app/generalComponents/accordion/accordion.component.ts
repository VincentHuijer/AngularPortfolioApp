import { Component } from '@angular/core';
import { SvgComponent } from '../../../assets/svgIcons/svg/svg.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
