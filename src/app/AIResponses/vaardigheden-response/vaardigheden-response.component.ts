import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HtmlLogoComponent } from '../../../assets/svgIcons/html-logo/html-logo.component';

@Component({
  selector: 'app-vaardigheden-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vaardigheden-response.component.html',
  styleUrl: './vaardigheden-response.component.css'
})
export class VaardighedenResponseComponent {
  logoBaseUrl = 'assets/logos/';

  skills = [
    { name: 'HTML', level: 90, logo: 'HTMLLogo.png' },
    { name: 'AdobeXd', level: 80, logo: 'AdobeXdLogo.png'},
    { name: 'JavaScript', level: 70, logo: 'JavaLogo.png'},
    { name: 'Angular', level: 60, logo: 'AngularLogo.png'}
  ];
}
