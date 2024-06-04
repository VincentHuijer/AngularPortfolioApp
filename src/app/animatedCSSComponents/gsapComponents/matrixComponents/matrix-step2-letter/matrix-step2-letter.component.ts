import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-matrix-step2-letter',
  standalone: true,
  imports: [],
  templateUrl: './matrix-step2-letter.component.html',
  styleUrl: './matrix-step2-letter.component.css'
})
export class MatrixStep2LetterComponent {
  @ViewChild('letter') letter!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.letter) {
        gsap.to(this.letter.nativeElement, {
          y: 200,
          duration: 10,
          color: '#0CB000'
        });
      } else {
        console.error('letter element not found');
      }
    }, 0);
  }
}
