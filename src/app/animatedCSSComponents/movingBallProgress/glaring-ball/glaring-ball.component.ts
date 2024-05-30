import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-glaring-ball',
  standalone: true,
  imports: [],
  templateUrl: './glaring-ball.component.html',
  styleUrl: './glaring-ball.component.css'
})

export class GlaringBallComponent {
  @ViewChild('innerBall') ball!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const ballElement = this.ball.nativeElement;
    const x = event.clientX - ballElement.offsetWidth;
    const y = event.clientY - ballElement.offsetHeight;
    ballElement.style.transform = `translate(${x}px, ${y}px)`;
  }
}
