import { Component } from '@angular/core';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';
import { SkillBarComponent } from '../../generalComponents/skill-bar/skill-bar.component';
import { LinkArrowComponent } from '../../../assets/svgIcons/link-arrow/link-arrow.component';

@Component({
  selector: 'app-ashray-portfolio',
  standalone: true,
  imports: [AsterikDarkComponent, SkillBarComponent, LinkArrowComponent],
  templateUrl: './ashray-portfolio.component.html',
  styleUrl: './ashray-portfolio.component.css'
})
export class AshrayPortfolioComponent {

}
