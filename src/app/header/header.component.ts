import { Component } from '@angular/core';
import { AccordionComponent } from '../generalComponents/accordion/accordion.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  portfolioLinks = [
    { label: 'Home', routerLink: '/' },
    { label: 'Ashray', routerLink: '/ashray' },
    { label: 'Mees', routerLink: '/mees' },
    { label: 'Theon', routerLink: '/theon' },
    { label: 'Vincent', routerLink: '/vincent' },
    { label: 'CSS Animations', routerLink: '/css-animations' },
    { label: 'Test Page', routerLink: '/test-page' }
  ];
}
