import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-glaring-ball-try3-squeeking',
  standalone: true,
  imports: [],
  templateUrl: './glaring-ball-try3-squeeking.component.html',
  styleUrl: './glaring-ball-try3-squeeking.component.css'
})

export class GlaringBallComponentTry3Squeeking implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  private isSad: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.lookAt(event.pageX, event.pageY);
  }

  lookAt(mouseX: number, mouseY: number): void {
    const eyeBall = document.querySelector('.eye-ball3') as HTMLElement;
    const eye = document.querySelector('.eye3') as HTMLElement;
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

  onEyeClick(): void {
    this.isSad = !this.isSad;
    const eyeBall = document.querySelector('.eye-ball3') as HTMLElement;
    if (this.isSad) {
      eyeBall.innerHTML = '💧';
      eyeBall.style.transform = ''; 
    } else {
      eyeBall.innerHTML = '';
    }
  }
}

  

  













