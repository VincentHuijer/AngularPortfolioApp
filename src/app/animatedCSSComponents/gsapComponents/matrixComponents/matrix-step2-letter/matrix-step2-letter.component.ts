import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-matrix-step2-letter',
  standalone: true,
  imports: [],
  templateUrl: './matrix-step2-letter.component.html',
  styleUrl: './matrix-step2-letter.component.css'
})
export class MatrixStep2LetterComponent implements AfterViewInit {
  @ViewChild('lettersContainer') lettersContainer!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.lettersContainer) {
        gsap.to(this.lettersContainer.nativeElement.children, {
          y: 200,
          duration: 10,
          color: '#0CB000',
        });
      } else {
        console.error('lettersContainer element not found');
      }
    }, 0);
  }
}