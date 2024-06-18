import { Component } from '@angular/core';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';
import { SkillBarComponent } from '../../generalComponents/skill-bar/skill-bar.component';
import { LinkArrowComponent } from '../../../assets/svgIcons/link-arrow/link-arrow.component';

@Component({
  selector: 'app-vincent-portfolio',
  standalone: true,
  imports: [AsterikDarkComponent, SkillBarComponent, LinkArrowComponent],
  templateUrl: './vincent-portfolio.component.html',
  styleUrl: './vincent-portfolio.component.css'
})
export class VincentPortfolioComponent {

}
