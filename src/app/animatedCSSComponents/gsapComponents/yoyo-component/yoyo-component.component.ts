import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-yoyo-component',
  standalone: true,
  imports: [],
  templateUrl: './yoyo-component.component.html',
  styleUrl: './yoyo-component.component.css'
})
export class yoyoComponentComponent implements AfterViewInit {
  @ViewChild('box') box!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    setTimeout(() => {
      console.log('box:', this.box);
      if (this.box) {
        gsap.to(this.box.nativeElement, {
          rotation: 360,
          x: '100vw',
          xPercent: -100,
          duration: 2,
          repeat: 50, //3x afspelen
          yoyo: true,
          backgroundColor: '#8d3dae',
        });
      } else {
        console.error('Box element not found');
      }
    }, 0);
  }
}