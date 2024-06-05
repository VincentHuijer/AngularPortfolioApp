import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedSomethingComponent } from '../../animatedCSSComponents/animated-something/animated-something.component';
import { BouncingBallComponent } from '../../animatedCSSComponents/movingBallProgress/bouncingBalls/bouncing-ball/bouncing-ball.component';
import { MessageComponent } from '../../generalComponents/message-component/message-component.component';
import { ChatLogComponent } from '../../generalComponents/chat-log/chat-log.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MessageComponent, ChatLogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  userMessages: string[] = ['user: Hello'];
  aiMessages: string[] = ['AI: Boo'];

  onMessageSent(message: string) {
    console.log('sending message')
    this.userMessages.push(`user: ${message}`);
    this.getAiResponse(message);
  }
  
  getAiResponse(userMessage: string) {
    console.log('responding message')
    const aiResponse = `AI: "${userMessage}"`;
    this.aiMessages.push(aiResponse);
  }
}