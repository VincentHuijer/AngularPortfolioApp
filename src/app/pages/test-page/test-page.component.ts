import { Component } from '@angular/core';
import { HoverButtonComponent } from '../../generalComponents/hover-button/hover-button.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [HoverButtonComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {

}
