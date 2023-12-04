import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxModelComponent } from './chat-box-model.component';

describe('ChatBoxModelComponent', () => {
  let component: ChatBoxModelComponent;
  let fixture: ComponentFixture<ChatBoxModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBoxModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatBoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
