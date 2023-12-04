import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('widthAnimation', [
      state('closed', style({ width: '0%' })),
      state('open', style({ width: '100%' })),
      transition('closed <=> open', animate('1s')),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @Input() placeholder!: string;
  widthState = 'closed';

  ngOnInit() {
    this.animateWidth();
  }

  animateWidth() {
    this.widthState = 'open';

    setTimeout(() => {
      this.widthState = 'closed';
    }, 5000);
  }
}
