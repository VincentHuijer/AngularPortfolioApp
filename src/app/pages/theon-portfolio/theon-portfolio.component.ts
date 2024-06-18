import { Component } from '@angular/core';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';
import { SkillBarComponent } from '../../generalComponents/skill-bar/skill-bar.component';
import { LinkArrowComponent } from '../../../assets/svgIcons/link-arrow/link-arrow.component';

@Component({
  selector: 'app-theon-portfolio',
  standalone: true,
  imports: [AsterikDarkComponent, SkillBarComponent, LinkArrowComponent],
  templateUrl: './theon-portfolio.component.html',
  styleUrl: './theon-portfolio.component.css'
})
export class TheonPortfolioComponent {

}
