import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-log',
  standalone: true,
  imports: [],
  templateUrl: './chat-log.component.html',
  styleUrl: './chat-log.component.css'
})
export class ChatLogComponent {
  @Input() userMessages: string[] = [];
  @Input() aiMessages: string[] = [];
}