import { Component } from '@angular/core';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';
import { SkillBarComponent } from '../../generalComponents/skill-bar/skill-bar.component';

@Component({
  selector: 'app-vincent-portfolio',
  standalone: true,
  imports: [AsterikDarkComponent, SkillBarComponent],
  templateUrl: './vincent-portfolio.component.html',
  styleUrl: './vincent-portfolio.component.css'
})
export class VincentPortfolioComponent {

}
