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
  @Input() userMessages: string[] = [];
  @Input() aiMessages: string[] = [];
}