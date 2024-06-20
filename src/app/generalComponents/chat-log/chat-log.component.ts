import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { VaardighedenResponseComponent } from '../../AIResponses/vaardigheden-response/vaardigheden-response.component';
import { gsap } from 'gsap';
import { PortfolioComponentComponent } from '../../AIResponses/portfolio-component/portfolio-component.component';


@Component({
  selector: 'app-chat-log',
  standalone: true,
  imports: [CommonModule, VaardighedenResponseComponent, PortfolioComponentComponent],
  templateUrl: './chat-log.component.html',
  styleUrl: './chat-log.component.css'
})
export class ChatLogComponent implements OnChanges, AfterViewInit {
  message: string = 'vaardigheden Vincent';

  @Input() userMessages: string[] = [];
  @Input() aiMessages: string[] = [];
  @ViewChild('textContainer') textContainer!: ElementRef;

  findPerson(message: string) {
    if (message.includes('vincent')) {
      return 'Vincent';
    } else if (message.includes('theon')) {
      return 'Theon';
    } else if (message.includes('mees')) {
      return 'Mees';
    } else if (message.includes('ashray')) {
      return 'Ashray';
    } else {
      return 'None';
    }
  }

  ngAfterViewInit() {
    if (this.aiMessages.length > 0) {
      this.animateText(this.aiMessages[this.aiMessages.length - 1]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['aiMessages'] && !changes['aiMessages'].firstChange) {
      this.animateText(this.aiMessages[this.aiMessages.length - 1]);
    }
  }

  private animateText(message: string) {
    const textContainer = this.textContainer.nativeElement;
    textContainer.innerHTML = '';

    message.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      textContainer.appendChild(span);
    });

    gsap.from(textContainer.children, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.05,
      ease: 'power2.out'
    });
  }
}