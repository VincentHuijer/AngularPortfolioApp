import { Component } from '@angular/core';
import { BouncingBallComponent } from '../../animatedCSSComponents/movingBallProgress/bouncing-ball/bouncing-ball.component';
import { MovingBallComponent } from '../../animatedCSSComponents/movingBallProgress/moving-ball/moving-ball.component';
import { FollowingBallComponent } from '../../animatedCSSComponents/movingBallProgress/following-ball/following-ball/following-ball.component';

@Component({
  selector: 'app-css-animations-learning-page',
  standalone: true,
  imports: [BouncingBallComponent, MovingBallComponent, FollowingBallComponent],
  templateUrl: './css-animations-learning-page.component.html',
  styleUrl: './css-animations-learning-page.component.css'
})
export class CssAnimationsLearningPageComponent {

}
