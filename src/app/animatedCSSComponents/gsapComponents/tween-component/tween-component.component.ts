import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-tween-component',
  standalone: true,
  imports: [],
  templateUrl: './tween-component.component.html',
  styleUrl: './tween-component.component.css'
})
export class TweenComponentComponent implements AfterViewInit {
  @ViewChild('box') box!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    setTimeout(() => {
      console.log('box:', this.box); // Debugging log after a timeout
      if (this.box) {
        gsap.to(this.box.nativeElement, {
          y: 200,
          duration: 10,
          backgroundColor: '#0CB000',
        });
      } else {
        console.error('Box element not found');
      }
    }, 0);
  }
}