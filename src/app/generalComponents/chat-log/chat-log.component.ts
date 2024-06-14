import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VaardighedenResponseComponent } from '../../AIResponses/vaardigheden-response/vaardigheden-response.component';

@Component({
  selector: 'app-chat-log',
  standalone: true,
  imports: [CommonModule, VaardighedenResponseComponent],
  templateUrl: './chat-log.component.html',
  styleUrl: './chat-log.component.css'
})
export class ChatLogComponent {
  message: string = 'vaardigheden Vincent';

  @Input() userMessages: string[] = [];
  @Input() aiMessages: string[] = [];
  
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
}