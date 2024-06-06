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

}
