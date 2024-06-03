import { Component } from '@angular/core';
import { GsapTestComponentComponent } from '../../animatedCSSComponents/gsapComponents/gsap-test-component/gsap-test-component.component';

@Component({
  selector: 'app-gsap-animations-learning-page',
  standalone: true,
  imports: [GsapTestComponentComponent],
  templateUrl: './gsap-animations-learning-page.component.html',
  styleUrl: './gsap-animations-learning-page.component.css'
})
export class GsapAnimationsLearningPageComponent {

}
