import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArrowButtonComponent } from '../../../assets/svgIcons/arrow-button/arrow-button.component';
import { AsterikComponent } from '../../../assets/svgIcons/asterik/asterik.component';

@Component({
  selector: 'app-message-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ArrowButtonComponent, AsterikComponent],
  templateUrl: './message-component.component.html',
  styleUrl: './message-component.component.css'
})
export class MessageComponent {
  message: string = '';

  @Output() messageSent = new EventEmitter<string>();

  sendMessage() { 
    console.log('Message sent from messageComponent ->', this.message);
    if (this.message.trim()) {
      this.messageSent.emit(this.message); //emit message toward home component: --> ((messageSent)="onMessageSent($event)")
      this.message = '';
    }
  }
}