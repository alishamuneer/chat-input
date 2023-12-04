import { Component } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ChatInputComponent,
    ChatBoxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gpt-208';
}
