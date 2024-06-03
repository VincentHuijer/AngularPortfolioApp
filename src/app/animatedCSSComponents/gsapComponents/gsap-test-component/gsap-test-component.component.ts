import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MovingBallWithLogoComponent } from '../../movingBallProgress/moving-ball-with-logo/moving-ball-with-logo.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-gsap-test-component',
  standalone: true,
  imports: [MovingBallWithLogoComponent],
  templateUrl: './gsap-test-component.component.html',
  styleUrls: ['./gsap-test-component.component.css']
})
export class GsapTestComponentComponent implements AfterViewInit {
  @ViewChild('box') box!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    gsap.to(this.box.nativeElement, {
      duration: 3,
      rotation: 360,
      scale: 2,
      scrollTrigger: {
        trigger: this.box.nativeElement,
        markers: false,
        scrub: 1,
      }
    });
  }
}
