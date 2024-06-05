import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hover-button',
  standalone: true,
  imports: [],
  templateUrl: './hover-button.component.html',
  styleUrl: './hover-button.component.css'
})
export class HoverButtonComponent implements AfterViewInit {
  @Input() width: string = '250px';
  @Input() height: string = '250px';
  @Input() text: string = 'Click Me';
  @Input() defaultColor: string = '#436EFC';
  @Input() hoverColor: string = '#2616E7';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const button = this.el.nativeElement.querySelector('button');

    gsap.to(button, {
      backgroundColor: this.hoverColor,
      duration: 0.3,
      paused: true,
      reversed: true,
    });

    button.addEventListener('mouseenter', () => {
      gsap.to(button, { backgroundColor: this.hoverColor, duration: 0.3 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, { backgroundColor: this.defaultColor, duration: 0.3 });
    });
  }
}