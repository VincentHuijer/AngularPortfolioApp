import { Component } from '@angular/core';
import { TweenComponentComponent } from '../../animatedCSSComponents/gsapComponents/matrixComponents/tween-component/tween-component.component';
import { yoyoComponentComponent } from '../../animatedCSSComponents/gsapComponents/yoyo-component/yoyo-component.component';
import { MatrixStep2LetterComponent } from '../../animatedCSSComponents/gsapComponents/matrixComponents/matrix-step2-letter/matrix-step2-letter.component';
import { MatrixStep3LetterComponent } from '../../animatedCSSComponents/gsapComponents/matrixComponents/matrix-step3-changing-text/matrix-step3-changing-text.component';

@Component({
  selector: 'app-gsap-animations2',
  standalone: true,
  imports: [TweenComponentComponent, yoyoComponentComponent, MatrixStep2LetterComponent, MatrixStep3LetterComponent],
  templateUrl: './gsap-animations2.component.html',
  styleUrl: './gsap-animations2.component.css'
})
export class GsapAnimations2Component {

}
