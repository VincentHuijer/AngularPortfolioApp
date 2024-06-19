import { Component } from '@angular/core';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';
import { SkillBarComponent } from '../../generalComponents/skill-bar/skill-bar.component';
import { LinkArrowComponent } from '../../../assets/svgIcons/link-arrow/link-arrow.component';
import { GlaringBall4Component } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball4/glaring-ball4.component';

@Component({
  selector: 'app-theon-portfolio',
  standalone: true,
  imports: [AsterikDarkComponent, SkillBarComponent, LinkArrowComponent, GlaringBall4Component],
  templateUrl: './theon-portfolio.component.html',
  styleUrl: './theon-portfolio.component.css'
})
export class TheonPortfolioComponent {

}
