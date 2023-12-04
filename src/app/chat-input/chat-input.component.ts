import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatBoxModelComponent } from '../chat-box-model/chat-box-model.component';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, ChatBoxModelComponent, ToastComponent, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {
  placeholder = 'Query internal knowledge';
  btnText = '';
  selected = false;
  toast = false;
  width = 0;
  textareaContent = '';
  textareaHeight = 35;

  @ViewChild('editorRef') editorRef!: ElementRef;
  isTextareaFocused = false;

  onTextareaFocus() {
    this.isTextareaFocused = true;
  }

  onTextareaBlur() {
    this.isTextareaFocused = false;
  }

  changeHeight(): void {
    const elem = this.editorRef.nativeElement;
    elem.style.height = 'auto';
    this.textareaHeight = elem.scrollHeight;
  }

  incrementWidth(): void {
    this.width = 0;
    const startTime = new Date().getTime();
    const endTime = startTime + 2000;
    const incrementInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const progress = Math.min(
        1,
        (currentTime - startTime) / (endTime - startTime)
      );
      this.width = progress * 100;
      if (currentTime >= endTime) {
        clearInterval(incrementInterval);
      }
    }, 10);
  }

  changePlaceholderText(text: string): void {
    this.incrementWidth();

    this.toast = true;
    setTimeout(() => {
      this.toast = false;
    }, 3000);

    if (text === 'Query Web Research' || text === 'Query GPT-4 turbo') {
      this.selected = false;
      this.placeholder = text;
    } else if (
      text === 'Query internal knowledge' &&
      this.placeholder === 'Query internal knowledge'
    ) {
      this.selected = !this.selected;
      this.toast = false;
    } else if (
      text === 'Query internal knowledge' &&
      this.placeholder != 'Query internal knowledge'
    ) {
      this.selected = false;
      this.placeholder = text;
    }
  }

  changeBtnText(text: string): void {
    if (this.btnText === text) {
      this.btnText = '';
    } else {
      this.btnText = text;
    }
  }
}
