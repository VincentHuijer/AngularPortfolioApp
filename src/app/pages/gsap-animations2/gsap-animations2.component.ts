import { Component } from '@angular/core';
import { TweenComponentComponent } from '../../animatedCSSComponents/gsapComponents/tween-component/tween-component.component';
import { yoyoComponentComponent } from '../../animatedCSSComponents/gsapComponents/yoyo-component/yoyo-component.component';

@Component({
  selector: 'app-gsap-animations2',
  standalone: true,
  imports: [TweenComponentComponent, yoyoComponentComponent],
  templateUrl: './gsap-animations2.component.html',
  styleUrl: './gsap-animations2.component.css'
})
export class GsapAnimations2Component {

}
