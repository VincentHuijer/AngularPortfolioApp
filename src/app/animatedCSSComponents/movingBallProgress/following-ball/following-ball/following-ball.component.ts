import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-following-ball',
  standalone: true,
  imports: [],
  templateUrl: './following-ball.component.html',
  styleUrl: './following-ball.component.css'
})

export class FollowingBallComponent {
  @ViewChild('ball') ball!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const ballElement = this.ball.nativeElement;
    const x = event.clientX - ballElement.offsetWidth;
    const y = event.clientY - ballElement.offsetHeight;
    ballElement.style.transform = `translate(${x}px, ${y}px)`;
  }
}
