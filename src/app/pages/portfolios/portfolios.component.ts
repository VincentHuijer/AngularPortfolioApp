import { Component } from '@angular/core';
import { GlaringBall4Component } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball4/glaring-ball4.component';

@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [GlaringBall4Component],
  templateUrl: './portfolios.component.html',
  styleUrl: './portfolios.component.css'
})
export class PortfoliosComponent {

}
