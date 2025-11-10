import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTalkPage } from './submit-talk-page';

describe('SubmitTalkPage', () => {
  let component: SubmitTalkPage;
  let fixture: ComponentFixture<SubmitTalkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitTalkPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitTalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
