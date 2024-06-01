import { Component } from '@angular/core';
import { BouncingBallComponent } from '../../animatedCSSComponents/movingBallProgress/bouncingBalls/bouncing-ball/bouncing-ball.component';
import { MovingBallComponent } from '../../animatedCSSComponents/movingBallProgress/moving-ball/moving-ball.component';
import { FollowingBallComponent } from '../../animatedCSSComponents/movingBallProgress/following-ball/following-ball/following-ball.component';
import { GlaringBallComponent } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball/glaring-ball.component';
import { GlaringBallComponentTry2 } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball-try2/glaring-ball-try2.component';
import { GlaringBallComponentTry3Squeeking } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball-try3-squeeking/glaring-ball-try3-squeeking.component';
import { MultiBouncingBallsComponent } from '../../animatedCSSComponents/movingBallProgress/bouncingBalls/multi-bouncing-balls/multi-bouncing-balls.component';

@Component({
  selector: 'app-css-animations-learning-page',
  standalone: true,
  imports: [BouncingBallComponent, MovingBallComponent, FollowingBallComponent, GlaringBallComponent, GlaringBallComponentTry2, GlaringBallComponentTry3Squeeking, MultiBouncingBallsComponent],
  templateUrl: './css-animations-learning-page.component.html',
  styleUrl: './css-animations-learning-page.component.css'
})
export class CssAnimationsLearningPageComponent {

}
