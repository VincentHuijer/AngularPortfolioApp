import { Component, Input } from '@angular/core';
import { chevronDownComponent } from '../../../assets/svgIcons/chevronDown/chevronDown.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, chevronDownComponent, RouterModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  isMenuOpen = false;
  @Input() links: { label: string; routerLink: string; }[] = [];
  @Input() title: string = "undefined"

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
