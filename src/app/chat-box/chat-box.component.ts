import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css',
})
export class ChatBoxComponent {
  apple: string = '../../assets/images/logos/apple.png';
  dribbble: string = '../../assets/images/logos/dribbble.png';
  google: string = '../../assets/images/logos/google.png';
  linkedin: string = '../../assets/images/logos/LinkedIn.webp';
  pinterest: string = '../../assets/images/logos/pinterest.png';
  snapchat: string = '../../assets/images/logos/snapchat.webp';
}
