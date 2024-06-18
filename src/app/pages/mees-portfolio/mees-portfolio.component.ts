import { Component } from '@angular/core';
import { SkillBarComponent } from '../../generalComponents/skill-bar/skill-bar.component';
import { LinkArrowComponent } from '../../../assets/svgIcons/link-arrow/link-arrow.component';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';

@Component({
  selector: 'app-mees-portfolio',
  standalone: true,
  imports: [AsterikDarkComponent, SkillBarComponent, LinkArrowComponent],
  templateUrl: './mees-portfolio.component.html',
  styleUrl: './mees-portfolio.component.css'
})
export class MeesPortfolioComponent {

}
