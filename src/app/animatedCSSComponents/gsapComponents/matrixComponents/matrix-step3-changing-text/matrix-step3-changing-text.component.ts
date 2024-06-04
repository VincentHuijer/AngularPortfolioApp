import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-matrix-step3-changing-text',
  standalone: true,
  imports: [],
  templateUrl: './matrix-step3-changing-text.component.html',
  styleUrl: './matrix-step3-changing-text.component.css'

  })
  export class MatrixStep3LetterComponent implements AfterViewInit {
    @ViewChild('lettersContainer') lettersContainer!: ElementRef;

    constructor() {}
  
    ngAfterViewInit(): void {
      setTimeout(() => {
        if (this.lettersContainer) {
          const children = this.lettersContainer.nativeElement.children;
          const timeline = gsap.timeline();
          Array.from(children).forEach((child: any) => {
            child.innerText = this.getRandomCharacter();
            const randDur = gsap.utils.random(0.15, 1.5); 
            const randStag = gsap.utils.random(0.1, 0.15); 
            gsap.to(children, {
              duration: randDur,
              autoAlpha: 1, //visibility and opacity on
              stagger: {
                each: randStag
              }
            });
            gsap.to(children, {
              duration: randDur,
              delay: randDur,
              autoAlpha: 0, //visibilty and opacity off
              stagger: {
                each: randStag
              }
            });
          })
        } else {
          console.error('lettersContainer element not found');
        }
      }, 0);
    }
  
    getRandomCharacter(): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>?/`~';
      // '一二三四五六七八九十百千万' +
      // '你好吗我很好谢谢再见';
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }