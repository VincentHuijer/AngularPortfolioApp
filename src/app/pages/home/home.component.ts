import { AfterViewInit, Component, ElementRef, NgModule, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedSomethingComponent } from '../../animatedCSSComponents/animated-something/animated-something.component';
import { BouncingBallComponent } from '../../animatedCSSComponents/movingBallProgress/bouncingBalls/bouncing-ball/bouncing-ball.component';
import { MessageComponent } from '../../generalComponents/message-component/message-component.component';
import { ChatLogComponent } from '../../generalComponents/chat-log/chat-log.component';
import { AngleBracketsComponent } from '../../../assets/svgIcons/angle-brackets/angle-brackets.component';
import { AsterikComponent } from '../../../assets/svgIcons/asterik/asterik.component';
import { FooterComponent } from '../../footer/footer.component';
import { ArrowButtonComponent } from '../../../assets/svgIcons/arrow-button/arrow-button.component';
import { CommonModule } from '@angular/common';
import { HtmlLogoComponent } from '../../../assets/svgIcons/html-logo/html-logo.component';
import { HulpResponseComponent } from '../../AIResponses/hulp-response/hulp-response.component';
import { DesignPencilComponent } from '../../../assets/svgIcons/design-pencil/design-pencil.component';
import { AnimationDrawingComponent } from '../../../assets/svgIcons/animation-drawing/animation-drawing.component';
import { gsap } from 'gsap/gsap-core';
import { GlaringBallComponentTry3Squeeking } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball-try3-squeeking/glaring-ball-try3-squeeking.component';
import { GlaringBall4Component } from '../../animatedCSSComponents/movingBallProgress/glaringBallProgress/glaring-ball4/glaring-ball4.component';
import { AsterikDarkComponent } from '../../../assets/svgIcons/asterik-dark/asterik-dark.component';
import { ChatBubbleComponent } from '../../../assets/svgIcons/chat-bubble/chat-bubble.component';
import { BurgerMenuComponent } from '../../../assets/svgIcons/burger-menu/burger-menu.component';
import { HoverButtonComponent } from '../../generalComponents/hover-button/hover-button.component';
import { hoveringAdvancedButton } from '../../generalComponents/hovering-advanced-button/hovering-advanced-button.component';
import { CodeButtonComponent } from '../../generalComponents/code-button/code-button.component';
import { DesignButtonComponent } from '../../generalComponents/design-button/design-button.component';
import { AnimatieButtonComponent } from '../../generalComponents/animatie-button/animatie-button.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MessageComponent, ChatLogComponent, AngleBracketsComponent, AsterikComponent, DesignPencilComponent, AnimationDrawingComponent, FooterComponent, ArrowButtonComponent,HtmlLogoComponent, HulpResponseComponent, GlaringBall4Component, AsterikDarkComponent, ChatBubbleComponent, BurgerMenuComponent, HoverButtonComponent, hoveringAdvancedButton, CodeButtonComponent, DesignButtonComponent, AnimatieButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/cssguy/Character4-sideFullBody.css']
})

export class HomeComponent implements AfterViewInit {
  @ViewChildren('autoHovering') hoverElements!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  userMessages: string[] = [];
  aiMessages: string[] = [];

  // userMessages: string[] = ['Toon mij  de vaardigheden van Theon','Wow, indrukwekkend! Zou ik wat van zijn werk kunnen zien?', 'test3', 'portfolio', ];
  // aiMessages: string[] = ['response1', 'Tuurlijk! Meer over Theon zijn werk is te vinden op zijn portfolio hier!', 'response3', 'portfolio'];

  onMessageSent(message: string) {
    console.log('userMessages before the message was received:', this.userMessages)
    console.log('sending message', message)
    this.userMessages.push(`user: ${message}`);
    console.log('current messages are:', this.userMessages)
    this.getAiResponse(message);
  }
  
  getAiResponse(userMessage: string) {
    console.log('responding message', userMessage)
    const aiResponse = `AI: "${userMessage}"`;
    this.aiMessages.push(aiResponse);
  }

  ngAfterViewInit() {
    this.hoverElements.forEach((element: ElementRef) => {
      const randomDuration = (Math.random() * 6 + 2).toFixed(6); // Generates a random duration between 2s and 4s
      this.renderer.setStyle(element.nativeElement, 'animation-duration', `${randomDuration}s`);
    });

    const icons = document.querySelectorAll(".falling");

    icons.forEach(icon => {
      gsap.set(icon, { y: -100, opacity: 1 });

      gsap.to(icon, {
        y: window.innerHeight + 100, 
        opacity: 0,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1, 
        delay: Math.random() * 2//random time inbetween each animation
      });
    });

    

    
  }
}