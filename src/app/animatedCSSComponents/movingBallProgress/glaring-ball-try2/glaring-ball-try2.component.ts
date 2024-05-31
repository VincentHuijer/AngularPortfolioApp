import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-glaring-ball-try2',
  standalone: true,
  imports: [],
  templateUrl: './glaring-ball-try2.component.html',
  styleUrl: './glaring-ball-try2.component.css'
})

export class GlaringBallComponentTry2 implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.lookAt(event.pageX, event.pageY);
  }

  lookAt(mouseX: number, mouseY: number): void {
    const eyeBall = document.querySelector('.eye-ball') as HTMLElement;
    const eye = document.querySelector('.eye') as HTMLElement;
    const eyeWidth = eye.offsetWidth;
    const eyeHeight = eye.offsetHeight;

    const position = eyeBall.getBoundingClientRect();
    const positionX = position.left + eyeBall.offsetWidth / 2;
    const positionY = position.top + eyeBall.offsetHeight / 2;
    const deltaX = mouseX - positionX;
    const deltaY = mouseY - positionY;
    const offsetX = Math.atan(deltaX * 0.01) / Math.PI * eyeWidth;
    const offsetY = Math.atan(deltaY * 0.01) / Math.PI * eyeHeight;

    eyeBall.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }
}
