import { Component, NgModule } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MessageComponent, ChatLogComponent, AngleBracketsComponent, AsterikComponent, FooterComponent, ArrowButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent { //removed the empty strings cause it made the message count 1 by default. Very confusing.
  userMessages: string[] = [];
  aiMessages: string[] = [];

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
}